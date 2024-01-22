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

export default Footer;

const FooterContainer = styled.footer `
    background-color: #000;
    color: #fff;

    .footer-inner {
        max-width: 1240px;
        width: 100%;
        padding: 30px 20px;
        margin: 0 auto;
    }
`