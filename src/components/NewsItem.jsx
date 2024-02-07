import styled from "styled-components"

const NewsItem = ({article}) => {

    const { title, description, url, urlToImage} = article;

    return (
        <NewsItemContainer>
            {urlToImage && (
                <div className="img-wrap">
                    <a href={url}>
                        <img src={urlToImage} alt="" />
                    </a>
                </div>
            )}

            <div className="news-content">
                <h2 className="news-content--title">
                    <a href={url}>
                        {title}
                    </a>
                </h2>
                <p className="news-content--description">
                    {description}
                </p>
            </div>
        </NewsItemContainer>
    )
}

const NewsItemContainer = styled.article`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 20px;
    border: 1px solid #ff5cd3;
    border-radius: 10px;

    &:not(:last-of-type) {
        margin-bottom: 30px;
    }

    .img-wrap {
        max-width: 400px;
        width: 100%;
        aspect-ratio: 5/3;
        border-radius: 10px;
        overflow: hidden;
    }
`

export default NewsItem;