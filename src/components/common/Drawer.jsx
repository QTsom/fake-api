import styled from "styled-components"

const Drawer = ({ isActive, toggleDrawer }) => {

    return (
        <DrawerContainer className={isActive ? "active" : ""}>
            <ul className="drawer__list">
                <li className="drawer__item first">
                    <a href="" className="drawer__item--item">
                        메뉴1
                    </a>
                </li> 
                <li className="drawer__item second">
                    <a href="" className="drawer__item--item">
                        메뉴2
                    </a>
                </li> 
                <li className="drawer__item third">
                    <a href="" className="drawer__item--item">
                        메뉴3
                    </a>
                </li> 
                <li className="drawer__item fourth">
                    <a href="" className="drawer__item--item">
                        메뉴4
                    </a>
                </li> 
            </ul>
        </DrawerContainer>
    )
}

const DrawerContainer = styled.div`
    position: absolute;
    right: -500px;
    top: -500px;
    background-color: #555;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);
    transition: all 0.7s;

    &.active {
        right: -230px;
        top: -230px;
    }

    .drawer__list {
        position: relative;
    }
    .drawer__item {
        position: absolute;
        font-size: 16px;
        font-weight: 600;

        &.first {
            top: 270px;
            left: 20px;
        }
        &.second {
            top: 340px;
            left: 40px;

        }
        &.third {
            top: 410px;
            left: 90px;
        }
        &.fourth {
            top: 460px;
            left: 170px;
        }

        &--item {
            text-shadow: 3px 3px #000;
        }
    }
`

export default Drawer;