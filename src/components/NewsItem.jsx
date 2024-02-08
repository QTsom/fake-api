import styled from "styled-components"

const NewsItem = ({article}) => {

    const { title, description, url, urlToImage} = article;

    return (
        <NewsItemContainer>
            {urlToImage && (
                <div className="img-wrap">
                    <a href={url} target="_blank">
                        <img src={urlToImage} alt="" />
                    </a>
                </div>
            )}

            <div className="news-content">
                <a href={url} className="news-content--link" target="_blank">
                    <h2 className="news-content--title">
                            {title}
                    </h2>
                    <p className="news-content--description">
                        {description}
                    </p>
                </a>
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
        flex-shrink: 0;
        max-width: 400px;
        width: 100%;
        aspect-ratio: 5/3;
        border-radius: 10px;
        overflow: hidden;
    }

    .news-content {
        height: 100%;

        &--link {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        &--title {
            font-size: 22px;
            color: #ff5cd3;
        }

        &--description {
            font-size: 15px;
            color: #da2fac;
            line-height: 1.4;
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 7;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }
`

export default NewsItem;