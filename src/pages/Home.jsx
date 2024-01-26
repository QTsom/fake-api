import {useState, useEffect} from "react";
import styled from "styled-components";
import Layout from "components/common/Layout";

const Home = () => {

  const [selectPhotoId, setSelectPhotoId] = useState(null);
  const [commentList, setCommentList] = useState([]);
  const [commentVisibleComments, setCommentVisibleComments] = useState(6);
  // const [photoVisibleComments, setPhotoVisibleComments] = useState(6);
  // const [photoList, setPhotoList] = useState([]);

  const handleItemClick = (id) => {
    setSelectPhotoId(id);
  };

  useEffect(() => {
    // Fetch comments data
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setCommentList(data))
      .catch((error) => console.error('Error fetching comments:', error));

    // Fetch photos data
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotoList(data))
      .catch((error) => console.error('Error fetching photos:', error));
  }, []);

  const loadMoreComments = () => {
    setCommentVisibleComments((prevCommentVisibleComments) => prevCommentVisibleComments + 10);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/comments"
  //     );
  //     setPosts(response.data);
  //     setLoading(false);
  //   };
  // fetchData();
  // }, []);

  // const commentList = [
  //   {
  //     id: 1,
  //     name: "NAME",
  //     body: "description",
  //     email: "title",
  //     date: "",
  //   },
  //   {
  //     id: 2,
  //     name: "name",
  //     body: "description",
  //     email: "title",
  //     date: "",
  //   },
  //   {
  //     id: 3,
  //     name: "name",
  //     body: "description",
  //     email: "title",
  //     date: "",
  //   },
  // ]

  // const photoList = [
  //   {
  //     id: 1,
  //     title: "title",
  //     thumbnailUrl: "https://via.placeholder.com/600/92c952",
  //     url: "https://via.placeholder.com/600/92c952",
  //   },
  //   {
  //     id: 2,
  //     title: "title",
  //     thumbnailUrl: "https://via.placeholder.com/150/d32776",
  //     url: "https://via.placeholder.com/150/d32776",
  //   },
  //   {
  //     id: 3,
  //     title: "title",
  //     thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  //     url: "https://via.placeholder.com/150/56a8c2",
  //   },
  //   {
  //     id: 4,
  //     title: "title",
  //     thumbnailUrl: "https://via.placeholder.com/150/24f355",
  //     url: "https://via.placeholder.com/150/24f355",
  //   },
  //   {
  //     id: 5,
  //     title: "title",
  //     thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  //     url: "https://via.placeholder.com/150/56a8c2",
  //   },
  // ]

  return (
    <Layout>

      <HomeContainer>
        <div className="inner">

          <div className="comment">
            <h2 className="title">포스트 영역</h2>

            <ul className="comment__list">
              {commentList.slice(0, commentVisibleComments).map((comment, commentItem) => (
                <li className="comment__item" key={commentItem}>
                  <div>
                    <span className="comment__item--name">{comment.name}</span>
                    <p className="comment__item--description">{comment.body}</p>
                  </div>
                  
                  <div className="info-box">
                    <h3 className="comment__item--email">{comment.email}</h3>
                    <small className="comment__item--date">date</small>
                  </div>
                </li>
              ))}
            </ul>
              
            <div className="comment__more-view">
              <button type="button" className="comment__more-view--btn" onClick={loadMoreComments}>더보기</button>
            </div>
          </div>
          
          <div className="photo">
            <h2 className="title">포토 영역</h2>

            <ul className="photo__list">
              {photoList.map((photo) => (
                // 사진의 id 추적
                <li className="photo__item" key={photo.id}>
                  <div className="photo__item--click" onClick={() => handleItemClick(photo.id)}>
                    <div className="photo__item--img">
                      <img src={photo.thumbnailUrl} alt="" />
                    </div>
                    <h3 className="photo__item--title">{photo.title}</h3>
                    <p className="photo__item--hover">
                      확대된 이미지 보기
                    </p>
                  </div>

                  {/* 해당 id 기반으로 확대된 이미지 렌더링 */}
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
                          <img src={photo.url} alt="" />
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="pagination">
              <button type="button">이전</button>
              <ul>
                <li>
                  <a href="">1</a>
                </li>
                <li>
                  <a href="">2</a>
                </li>
                <li>
                  <a href="">3</a>
                </li>
              </ul>
              <button type="button">다음</button>
            </div>
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
  .comment {
    padding-bottom: 80px;
    margin-bottom: 150px;
    border-bottom: 1px solid #ccc;

    &__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    &__item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      border: 1px solid #999;
      border-radius: 8px;
      &--name {
        font-size: 18px;
      }
      &--description {
        margin: 15px 0;
        font-size: 14px;
        font-weight: 400;
        color: #ccc;
        line-height: 1.4;
      }
  
      .info-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        color: #999;
      }
      
      &--email {
        font-size: 12px;
      }
      &--date {
        font-size: 12px;
      }
    }

    &__more-view {
      margin-top: 70px;
      text-align: center;

      &--btn {
        width: 130px;
        height: 40px;
        font-size: 16px;
        font-weight: 600;
        background-color: #f1f1f1;
        color: #000;
        border-radius: 4px;
        transition: all 0.3s;

        &:hover {
          background-color: #fbf845;
          /* color: #fff; */
          transform: scale(1.1);
        }
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
      position: relative;
      padding: 20px;
      border: 1px solid #999;
      border-radius: 8px;
      cursor: pointer;

      &--hover {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 15px;
        font-weight: 600;
        color: #000;
        background-color: #eee;
        border-radius: 4px;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
        opacity: 0;
        z-index: -1;
        transition: all 0.3s;
      }
      &:hover .photo__item--hover  {
        opacity: 1;
        z-index: 10;
      }

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
      z-index: 50;

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