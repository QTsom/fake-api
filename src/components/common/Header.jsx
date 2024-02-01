import { Link } from "react-router-dom";
import styled from "styled-components";
import DrawerImg from "assets/img/icon_drawer.svg"

const Header = () => {
    return (
        <HeaderContainer>
            <div className="header-inner">
                <h1 className="title">
                    <Link to="/">fake API 사용해 호출</Link>
                </h1>

                <nav className="navigation">
                    <Link to="/Page" className="navigation--link">
                        페이지로 이동
                    </Link>
                </nav>

                <button type="button" className="drawer-button">
                    <img src={DrawerImg} alt="" />
                </button>
            </div>
        </HeaderContainer>
    )
}


const HeaderContainer = styled.header `
    background-color: #333;
    border-bottom: 3px solid #f1f1f1;
    
    .title {
        font-size: 30px;
        flex-shrink: 0;
    }

    .header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 100px;
        max-width: 1240px;
        width: 100%;
        padding: 40px 20px;
        margin: 0 auto;
        color: #fff;
    }
    .navigation {
        width: 100%;

        &--link {
            font-size: 18px;
        }
    }

    .drawer-button {
        flex-shrink: 0;
        width: 35px;
        height: 35px;
        padding: 5px;
        filter: invert(100);
    }
`


export default Header;