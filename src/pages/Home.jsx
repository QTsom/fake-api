// import {useState} from "react";
import styled from "styled-components";
import Layout from "components/common/Layout";

const Home = () => {

  const postList = [
    {
      id: 1,
      userName: "name",
      description: "description",
      email: "title",
      newsDate: "",
    },
  ]

  const photoList = [
    {
      id: 1,
      title: "title",
      imgUrl: "https://via.placeholder.com/600/92c952",
    }
  ]

  return (
    <Layout>

      <HomeContainer>
        <h2>처음 보이는 페이지</h2>

        <div className="inner">
          <div className="post">
            <ul className="post__list">
              {postList.map((post, postItem) => (
                <li className="post__item" key={postItem}>
                  <div className="post__text-box">
                      <span className="post__text-box--name">{post.userName}</span>
                      <p className="post__text-box--description">{post.description}</p>

                      <div>
                        <h3 className="post__text-box--title">{post.email}</h3>
                        <small className="post__text-box--date">date</small>
                      </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="photo">
            <ul className="photo__list">
              {photoList.map((photo, photoItem) => (
                <li className="photo__item" key={photoItem}>
                  <div className="photo__item--img">
                    <img src={photo.imgUrl} alt="" />
                  </div>
                  <h3 className="photo__item--title">{photo.title}</h3>

                  <div className="enlargement">
                    <div className="enlargement__button-box">
                      <button type="button" className="enlargement__button-box--close">닫기</button>
                    </div>

                    <div className="enlargement--img">
                      <img src={photo.imgUrl} alt="" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </HomeContainer>
    </Layout>
  );
};


const HomeContainer = styled.div`
  .home-inner {
    max-width: 1240;
  }
`

export default Home;