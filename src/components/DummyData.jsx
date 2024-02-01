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
            description: '세 번째 콘텐츠 내용',
        },
    ]

    return (
        <DummyDataContainer>
            <ul className="dummy__list">
                {dummyList.map((dummy, dummyItem) => (
                    <li className="dummy__item" key={dummyItem}>
                        <div className="dummy__item--img">
                            <img src="" alt="" />
                        </div>

                        <div className="title-box">
                            <h3>{dummy.title}</h3>
                            <p>{dummy.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </DummyDataContainer>
    )
}

const DummyDataContainer = styled.div`
    
`

export default DummyData;