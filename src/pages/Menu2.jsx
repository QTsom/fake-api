import Layout from "components/common/Layout";
import styled from "styled-components";
import NewsItem from "components/NewsItem";

const Menu2 = () => {
    return (
        <Layout>
            <Menu2Container>
                <div className="inner">
                    <div className="title-wrap">
                        <h2 className="content-title">News Api</h2>
                        <p className="title-wrap--description">외부 news api를 호출해 뉴스뷰어 작업</p>
                    </div>

                    <ul>
                        <NewsItem />
                    </ul>
                </div>
            </Menu2Container>
        </Layout>
    )
}

const Menu2Container = styled.div`
    
`

export default Menu2;