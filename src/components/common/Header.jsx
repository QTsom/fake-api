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
    background-color: #000;
    .header-inner {
        max-width: 1240px;
        width: 100%;
        padding: 30px 20px;
        margin: 0 auto;
        color: #fff;
    }
`


export default Header;