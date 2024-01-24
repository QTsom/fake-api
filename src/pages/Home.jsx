import {useState} from "react";
import styled from "styled-components";
import Layout from "components/common/Layout";

const Home = () => {

  const [selectPhotoId, setSelectPhotoId] = useState(null);

  const handleItemClick = (id) => {
    setSelectPhotoId(id);
  };

  const postList = [
    {
      id: 1,
      userName: "NAME",
      description: "description",
      email: "title",
      newsDate: "",
    },
    {
      id: 2,
      userName: "name",
      description: "description",
      email: "title",
      newsDate: "",
    },
    {
      id: 3,
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
    },
    {
      id: 2,
      title: "title",
      imgUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      id: 3,
      title: "title",
      imgUrl: "https://via.placeholder.com/150/56a8c2",
    },
    {
      id: 4,
      title: "title",
      imgUrl: "https://via.placeholder.com/150/24f355",
    },
    {
      id: 5,
      title: "title",
      imgUrl: "https://via.placeholder.com/150/56a8c2",
    },
  ]

  return (
    <Layout>

      <HomeContainer>
        <div className="inner">

          <div className="post">
            <h2 className="title">포스트 영역</h2>

            <ul className="post__list">
              {postList.map((post, postItem) => (
                <li className="post__item" key={postItem}>
                  <span className="post__item--name">{post.userName}</span>
                  <p className="post__item--description">{post.description}</p>
                  
                  <div className="info-box">
                    <h3 className="post__item--email">{post.email}</h3>
                    <small className="post__item--date">date</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="photo">
            <h2 className="title">포토 영역</h2>

            <ul className="photo__list">
              {photoList.map((photo) => (
                <li className="photo__item" key={photo.id}>
                  <div className="photo__item--click" onClick={() => handleItemClick(photo.id)}>
                    <div className="photo__item--img">
                      <img src={photo.imgUrl} alt="" />
                    </div>
                    <h3 className="photo__item--title">{photo.title}</h3>
                  </div>

                  {selectPhotoId === photo.id && (
                    <div className="enlargement">
                      <div className="enlargement__inner">
                        <div className="enlargement__button-box">
                          <h3>확대된 이미지 보기</h3>
                          <button
                            type="button"
                            className="enlargement__button-box--close"
                            onClick={() => setSelectPhotoId(null)}
                          >
                            닫기
                          </button>
                        </div>

                        <div className="enlargement--img">
                          <img src={photo.imgUrl} alt="" />
                        </div>
                      </div>
                    </div>
                  )}
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
  .title {
    font-size: 26px;
    text-align: center;
    margin-bottom: 60px;
  }
  .post {
    margin-bottom: 150px;

    &__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    &__item {
      padding: 20px;
      border: 1px solid #999;
      border-radius: 8px;
      &--name {
        font-size: 18px;
      }
      &--description {
        margin: 10px 0;
        font-size: 16px;
      }
  
      .info-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        color: #999;
      }
      
      &--email {
        font-size: 14px;
      }
      &--date {
        font-size: 14px;
      }
    }
  }

  .photo {
    
    &__list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
    &__item {
      padding: 20px;
      border: 1px solid #999;
      border-radius: 8px;

      &--img {
        margin-bottom: 13px;
        border-radius: 8px;
        overflow: hidden;
      }
      &--title {
        word-break: break-all;
        font-size: 14px;
        font-weight: 400;
      }
    }

    .enlargement {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(100, 100, 100, 0.3);

      &__inner {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        background-color: #000;
        box-shadow: 5px 6px 13px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
      }
      &__button-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px; 
        padding: 0 10px 0 20px;
        border-bottom: 1px solid #ccc;
        
        h3 {
          font-size: 18px;
          color: #f1f1f1;
        }
        &--close {
          padding: 10px;
          font-size: 16px;
          color: #f1f1f1;
        }

      }
      &--img {
        padding: 30px;
        margin: 0 auto;
        
        img {
          border-radius: 10px;
          overflow: hidden;
        }
      }
    }
  }
`

export default Home;