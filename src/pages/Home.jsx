import styled from "styled-components";
import Layout from "components/common/Layout";
import NewsItem from "components/NewsItem";

const Home = () => {
  return (
    <Layout>

      <HomeContainer>
        <h2>처음 보이는 페이지</h2>

        <div className="api-wrap">

          <ul className="api-list">
            <li className="api-item">
                <div className="img-box">
                    <img src="" alt="" />
                </div>

                <div className="text-box">
                    <h3>title</h3>
                    <p>description</p>
                    <div>
                        <span>기자 이름</span>
                        <small>date</small>
                    </div>
                </div>
            </li>
          </ul>

        </div>
      </HomeContainer>
    </Layout>
  );
};


const HomeContainer = styled.div`
  
`

export default Home;