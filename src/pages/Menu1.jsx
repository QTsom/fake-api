import Layout from "components/common/Layout";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Menu1 = () => {
    const [searchList, setSearchList] = useState([]);

    useEffect(() => {
        // Fetch comments data
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((data) => setSearchList(data))
          .catch((error) => console.error('Error fetching comments:', error));
    
      }, []);

    return (
        <Layout>
            <Menu1Container>
                <div className="inner">
                    <h2 className="content-title">첫 번째 메뉴</h2>

                    <div className="search-wrap">
                        <input type="search" className="search-wrap--input" />
                        <button type="button" className="search-wrap--button">검색하기</button>
                    </div>

                    <div className="content-wrap">
                        <div className="content-wrap--empty">
                            <p>검색 내역이 없습니다.</p>
                        </div>
                        <ul className="search__list">
                            {searchList.map((search, searchItem) => (
                                <li className="search__item" key={searchItem}>
                                    <strong className="search__item--name">Name: {search.name} </strong>
                                    <span className="search__item--email">Email: {search.email}</span>
                                    <span className="search__item--phone">Phone: {search.phone}</span>
                                    <span className="search__item--company">Company: {search.company.name} - {search.company.catchPhrase} - {search.company.bs}</span>
                                    <p className="search__item--address">Address: {search.address.street} - {search.address.suite} - {search.address.city}</p>
                                </li>
                            ))}
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
        height: 35px;
        padding: 0 30px;
        margin-bottom: 20px;
        border-radius: 8px;
        gap: 10px;
        border: 1px solid #ccc;

        &--input {
            width: 100%;
            height: 70%;
            padding: 0 15px;
            font-size: 16px;
            color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        &--button {
            flex-shrink: 0;
            font-size: 16px;
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


`

export default Menu1;