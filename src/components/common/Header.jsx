import {useState} from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";
import DrawerImg from "assets/img/icon_drawer.svg"
import Drawer from "./Drawer";

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleDrawer = () => {
        setIsActive(!isActive);
    }

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

                <button type="button" className="drawer-button" onClick={toggleDrawer}>
                    <img src={DrawerImg} alt="" />
                </button>
            </div>

            <Drawer isActive={isActive} toggleDrawer={toggleDrawer} />
        </HeaderContainer>
    )
}


const HeaderContainer = styled.header `
    position: relative;
    
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
        background-color: #333;
        border-bottom: 3px solid #f1f1f1;
    }
    
    .title {
        font-size: 30px;
        flex-shrink: 0;
    }

    .navigation {
        width: 100%;

        &--link {
            font-size: 18px;
        }
    }

    .drawer-button {
        position: relative;
        flex-shrink: 0;
        width: 35px;
        height: 35px;
        padding: 5px;
        filter: invert(100);
        z-index: 50;
    }
`


export default Header;