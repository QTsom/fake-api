import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer-inner">
                <h2>footer 자리임다</h2>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer `
    background-color: #333;
    
    .footer-inner {
        max-width: 1240px;
        width: 100%;
        padding: 60px 20px;
        color: #fff;
        border-top: 3px solid #f1f1f1;
        margin: 0 auto;
        
        h2 {
            font-size: 30px;
        }
    }
`

export default Footer;