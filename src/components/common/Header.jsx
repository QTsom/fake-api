import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer>
            <div className="header-inner">
                <h1>fake API 사용해 호출</h1>
            </div>
        </HeaderContainer>
    )
}


const HeaderContainer = styled.header `
    background-color: #333;
    border-bottom: 3px solid #f1f1f1;

    .header-inner {
        max-width: 1240px;
        width: 100%;
        padding: 40px 20px;
        margin: 0 auto;
        color: #fff;
    }
`


export default Header;