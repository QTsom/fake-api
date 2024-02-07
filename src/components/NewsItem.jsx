import styled from "styled-components"

const NewsItem = ({article}) => {

    const { title, description, url, urlToImage} = article;

    return (
        <NewsItemContainer>
            {urlToImage && (
                <div>
                    <a href={url}>
                        <img src={urlToImage} alt="" />
                    </a>
                </div>
            )}

            <div className="contents">
                <h2>
                    <a href={url}>
                        {title}
                    </a>
                </h2>
                <p>
                    {description}
                </p>
            </div>
        </NewsItemContainer>
    )
}

const NewsItemContainer = styled.article`
    
`

export default NewsItem;