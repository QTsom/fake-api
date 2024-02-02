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

                    <div>
                        <input type="search" name="" id="" />
                        <button type="button" className="search-button">검색하기</button>
                    </div>

                    <div className="content-wrap">
                        <div className="content-wrap--empty">
                            <p>검색 내역이 없습니다.</p>
                        </div>
                        <ul className="search__list">
                            {searchList.map((search, searchItem) => (
                                <li className="search__item" key={searchItem}>
                                    <div>
                                        <strong>name: {search.name} </strong>
                                        <span>email: {search.email}</span>
                                        <p></p>
                                        <span>phone: {search.phone}</span>
                                        <span>Company: {search.company.name} - {search.company.catchPhrase} - {search.company.bs}</span>
                                    </div>
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
    
`

export default Menu1;