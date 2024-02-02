import Layout from "components/common/Layout";
import styled from "styled-components";

const Menu1 = () => {
    return (
        <Layout>
            <Menu1Container>
                <div className="inner">
                    <h2 className="content-title">첫 번째 메뉴</h2>
                </div>
            </Menu1Container>
        </Layout>
    )
}

const Menu1Container = styled.div`
    
`

export default Menu1;