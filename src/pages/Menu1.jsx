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
            });
            setFilterResults(filteredData);
        }
        else{
            setFilterResults(searchList);
        }
    }
    
    return (
        <Layout>
            <Menu1Container>
                <div className="inner">
                    <div className="title-wrap">
                        <h2 className="content-title">Filter 검색</h2>
                        <p className="title-wrap--description">React Hook 사용하여 React 내 완전 함수형의 검색 필터를 갖게 됨</p>
                    </div>

                    <div className="search-wrap">
                        <strong>검색</strong>
                        <input type="search" className="search-wrap--input" placeholder="한 글자 이상 검색어를 입력하세요." onChange={(e) => searchItems(e.target.value)} />
                    </div>

                    <div className="content-wrap">

                        {searchInput.length > 1 && searchInput !== '' && (
                            <div className="content-wrap--empty">
                                <p>검색 내역이 없습니다.</p>
                            </div>
                        )}

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
    .title-wrap {
        margin-bottom: 80px;
        text-align: center;
        color: #fbf845;

        .content-title {
            color: #fbf845;
            margin-bottom: 15px;
        }
        &--description {
            font-size: 20px;
        }
    }
    .search__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
    }

    .search-wrap {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 450px;
        height: 70px;
        padding: 0 30px;
        margin: 0 auto 35px;
        border-radius: 8px;
        gap: 10px;
        border: 6px double #fbf845;

        &--input {
            width: 100%;
            height: 30px;
            padding: 0 15px;
            font-size: 16px;
            color: #fff;
            border: 1px solid #fbf845;
            border-radius: 5px;

            &::placeholder {
                font-size: 13px;
                color: #fbf845;
            }
        }

        strong {
            position: absolute;
            top: -16px;
            left: 50%;
            transform: translateX(-50%);
            display: inline-block;
            padding: 0 20px;
            font-size: 18px;
            line-height: 25px;

            color: #fbf845;
            background: #333;
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