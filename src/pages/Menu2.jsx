import { useEffect, useState } from "react";
import Layout from "components/common/Layout";
import styled from "styled-components";
import NewsItem from "components/NewsItem";
import axios from 'axios';

const Menu2 = ({category}) => {

    const [articles, setArticles] = useState();
    const [loading, setLoading] = useState();
    const query = category === "all" ? "" : `&category=${category}`;

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);

            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=d6e76706631d4059b20e981f9fc9b930'
                );

                setArticles(response.data.articles);
            } catch(error) {
                console.log(error)
            }
            setLoading(false);
        }
        fetchData();
    }, [category])

    if (loading) {
        return (
            <Layout>
                <Menu2Container>
                    <div className="inner">
                        <div className="title-wrap">
                            <h2 className="content-title">News Api</h2>
                            <p className="title-wrap--description">외부 news api를 호출해 뉴스뷰어 작업</p>
                        </div>

                        <p className="">대기 중</p>
                    </div>
                </Menu2Container>
            </Layout>
        )
    }
    if (!articles) {
        return null;
    }

    return (
        <Layout>
            <Menu2Container>
                <div className="inner">
                    <div className="title-wrap">
                        <h2 className="content-title">News Api</h2>
                        <p className="title-wrap--description">외부 news api를 호출해 뉴스뷰어 작업</p>
                    </div>

                    <ul>
                        {articles.map((article) => (
                            <NewsItem key={article.url} article={article} />
                        ))}
                    </ul>
                </div>
            </Menu2Container>
        </Layout>
    )
}

const Menu2Container = styled.div`
    
    .title-wrap {
        margin-bottom: 80px;
        text-align: center;
        color: #ff5cd3;

        .content-title {
            color: #ff5cd3;
            margin-bottom: 15px;
        }
        &--description {
            font-size: 20px;
        }
    }
`

export default Menu2;