import styled from "styled-components"

const Drawer = () => {
    return (
        <DrawerContainer>
            <ul className="drawer__list">
                <li className="drawer__item">
                    <a href="" className="drawer__item--item">
                        메뉴1
                    </a>
                </li> 
                <li className="drawer__item">
                    <a href="" className="drawer__item--item">
                        메뉴2
                    </a>
                </li> 
                <li className="drawer__item">
                    <a href="" className="drawer__item--item">
                        메뉴3
                    </a>
                </li> 
                <li className="drawer__item">
                    <a href="" className="drawer__item--item">
                        메뉴4
                    </a>
                </li> 
            </ul>
        </DrawerContainer>
    )
}

const DrawerContainer = styled.div`
    position: relative;
    right: 0;
    top: 0;
`

export default Drawer;