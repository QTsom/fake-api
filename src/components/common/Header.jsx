import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer>
            <div className="header-inner">
                <h1 className="title">
                    <a href="">fake API 사용해 호출</a>
                </h1>

                <nav className="navigation">
                    <Link to="/Page" className="navigation--link">
                        페이지로 이동
                    </Link>
                </nav>
            </div>
        </HeaderContainer>
    )
}


const HeaderContainer = styled.header `
    background-color: #333;
    border-bottom: 3px solid #f1f1f1;

    .header-inner {
        display: flex;
        align-items: center;
        gap: 100px;
        max-width: 1240px;
        width: 100%;
        padding: 40px 20px;
        margin: 0 auto;
        color: #fff;
    }
    .navigation {
        &--link {
            font-size: 18px;
        }
    }
`


export default Header;