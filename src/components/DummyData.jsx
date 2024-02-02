import styled from "styled-components"

const DummyData = () => {

    const dummyList = [
        {
            id: 1,
            thumbnail: "https://via.placeholder.com/600/92c952",
            title: '첫 번째 ㅌㅏ이틀',
            description: '첫 번째 아이템 설명 내용',
        },
        {
            id: 2,
            thumbnail: "https://via.placeholder.com/150/d32776",
            title: '두 번째 타이틀',
            description: '두 번쨰 디스크립션',
        },
        {
            id: 3,
            thumbnail: "https://via.placeholder.com/150/56a8c2",
            title: '세 번째 타이틀',
            description: '세 번째 콘텐츠 내용',
        },
        {
            id: 4,
            thumbnail: "https://via.placeholder.com/150/24f355",
            title: '세 번째 타이틀',
            description: '4번째 4번째4번째4번째4번째4번째4번째 4번째4번째 4번째4번째 4번째',
        },
        {
            id: 5,
            thumbnail: "https://via.placeholder.com/150/56a8c2",
            title: '타이틀 다섯 번째 째 쨰 다섯 번째쨰쨰쨰쨰쨰쨰ㅒ쨰',
            description: '다섯 번째 콘텐츠 내용',
        },
    ]

    return (
        <DummyDataContainer>
            <ul className="dummy__list">
                {dummyList.map((dummy, dummyItem) => (
                    <li className="dummy__item" key={dummyItem}>
                        <div className="dummy__item--img">
                            <img src={dummy.thumbnail} alt="" />
                        </div>

                        <div className="title-box">
                            <h3 className="title-box--title">{dummy.title}</h3>
                            <p className="title-box--description">{dummy.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </DummyDataContainer>
    )
}

const DummyDataContainer = styled.div`
    .dummy__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        padding: 40px;
        border: 1px solid #ccc;
        border-radius: 7px;
    }

    .dummy__item {
        &--img {
            margin-bottom: 23px;
            border-radius: 10px;
            overflow: hidden;
        }

        .title-box {
            &--title {
                font-size: 16px;
                line-height: 1.3;
                margin-bottom: 6px;
            }
            &--description {
                font-size: 14px;
                line-height: 1.3;
                color: #aaa;
            }
        }
    }
`

export default DummyData;