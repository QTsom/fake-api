import styled from "styled-components";
import Layout from "components/common/Layout";
import DummyData from "components/DummyData";

const Page = () => {
    return (
        <Layout>
            <PageContainer>
                <div className="inner">
                    <h2 className="title">PAGE입니다</h2>

                    <DummyData />
                </div>
            </PageContainer>
        </Layout>
    )
}

const PageContainer = styled.div`
    .title {
        font-size: 26px;
        text-align: center;
        margin-bottom: 40px;
    }
`


export default Page;