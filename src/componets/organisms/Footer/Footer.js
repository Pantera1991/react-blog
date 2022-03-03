import React from 'react';
import styled from 'styled-components';
import fbIcon from 'assets/icons/facebook.svg';
import instagramIcon from 'assets/icons/instagram.svg';
import tiktokIcon from 'assets/icons/tiktok.svg';

const StyledFooterWrapper = styled.footer`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledSocialList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const StyledSocialItem = styled.li`
    width: 20px;
    height: 20px;
    margin: 0 15px;
`;

const StyledSocialImg = styled.img`
    width: 100%;
    height: auto;
`;

const StyledFooterParagraph = styled.p`
    font-size: 1.2rem;
`;

const Footer = () => (
    <StyledFooterWrapper>
        <StyledSocialList>
            <StyledSocialItem>
                <a href="https://www.facebook.com/kamila.rutka">
                    <StyledSocialImg src={fbIcon} alt="Facebook" loading="lazy" />
                </a>
            </StyledSocialItem>
            <StyledSocialItem>
                <a href="https://www.instagram.com/k_rutka_/">
                    <StyledSocialImg src={instagramIcon} alt="Instagram" loading="lazy" />
                </a>
            </StyledSocialItem>
            <StyledSocialItem>
                <a href="https://www.tiktok.com/@k_rutyna">
                    <StyledSocialImg src={tiktokIcon} alt="TikTok" loading="lazy" />
                </a>
            </StyledSocialItem>
        </StyledSocialList>
        <StyledFooterParagraph>© {new Date().getFullYear()}, Kamila Rutka. All rights reserved</StyledFooterParagraph>
    </StyledFooterWrapper>
);

export default Footer;
