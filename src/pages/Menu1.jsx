import Layout from "components/common/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Menu1 = () => {
    const [searchList, setSearchList] = useState([]);
    const [filterResults, setFilterResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                setSearchList(response.data);
            })
    }, []);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = searchList.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilterResults(filteredData)
        }
        else{
            setFilterResults(searchList)
        }
    }
    
    return (
        <Layout>
            <Menu1Container>
                <div className="inner">
                    <h2 className="content-title">첫 번째 메뉴</h2>

                    <div className="search-wrap">
                        <input type="search" className="search-wrap--input" placeholder="검색어를 입력하세요." onChange={(e) => searchItems(e.target.value)} />
                    </div>

                    <div className="content-wrap">
                        <div className="content-wrap--empty">
                            <p>검색 내역이 없습니다.</p>
                        </div>

                        <ul className="search__list">
                            {searchInput.length > 1 ? (
                                filterResults.map((item) => {
                                    return (
                                        <li className="search__item">
                                            <strong className="search__item--name">Name: {item.name} </strong>
                                            <span className="search__item--email">Email: {item.email}</span>
                                            <span className="search__item--phone">Phone: {item.phone}</span>
                                            <span className="search__item--company">Company: {item.company.name} - {item.company.catchPhrase} - {item.company.bs}</span>
                                            <p className="search__item--address">Address: {item.address.street} - {item.address.suite} - {item.address.city}</p>
                                        </li>
                                    )
                                })
                            ) : (
                                searchList.map((item) => {
                                    return (
                                        <li className="search__item">
                                            <strong className="search__item--name">Name: {item.name} </strong>
                                            <span className="search__item--email">Email: {item.email}</span>
                                            <span className="search__item--phone">Phone: {item.phone}</span>
                                            <span className="search__item--company">Company: {item.company.name} - {item.company.catchPhrase} - {item.company.bs}</span>
                                            <p className="search__item--address">Address: {item.address.street} - {item.address.suite} - {item.address.city}</p>
                                        </li>
                                    )
                                })
                                
                                )
                            }

                        </ul>
                    </div>
                </div>
            </Menu1Container>
        </Layout>
    )
}

const Menu1Container = styled.div`
    .content-title {
        margin-bottom: 40px;
    }
    .search__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
    }

    .search-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 450px;
        height: 50px;
        padding: 0 30px;
        margin-bottom: 20px;
        border-radius: 8px;
        gap: 10px;
        border: 1px solid #ccc;

        &--input {
            width: 100%;
            height: 25px;
            padding: 0 15px;
            font-size: 16px;
            color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;

            &::placeholder {
                font-size: 13px;
                color: #aaa;
            }
        }
    }

    .content-wrap {
        &--empty {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 400px;
            border: 1px solid #ccc;
            border-radius: 7px;

            p {
                font-size: 20px;
                font-weight: 400;
            }
        }

        .search__item {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
    
            > * {
                word-break: break-all;
            }
    
            &--name {
                font-size: 18px;
            }
    
            &--company {
                font-size: 12px;
                color: #aaa;
            }
            &--address {
                font-size: 12px;
                color: #aaa;
            }
    
        }
    }



`

export default Menu1;