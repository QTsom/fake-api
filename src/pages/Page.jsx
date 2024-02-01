import styled from "styled-components";
import Layout from "components/common/Layout";
import DummyData from "components/DummyData";

const Page = () => {
    return (
        <Layout>
            <PageContainer>
                <div className="inner">
                    page입니다

                    <DummyData />
                </div>
            </PageContainer>
        </Layout>
    )
}

const PageContainer = styled.div`
    
`


export default Page;