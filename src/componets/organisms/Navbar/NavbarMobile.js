import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Button from 'componets/atoms/Button/Button';
import { NavLink } from 'react-router-dom';
import NavMark from '../../atoms/NavMark';

const StyledNavWrapper = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 10px;
    display: inline-flex;
    background: ${({ theme }) => theme.colors.secondary};
    border-top: solid 2px ${({ theme }) => theme.colors.primary};
    z-index: 999;
    transition: bottom 0.3s ease-in;

    ${({ theme }) => theme.mq.laptop} {
        display: none;
    }

    ${({ hidden }) =>
        hidden
            ? css`
                  bottom: -80px;
              `
            : css`
                  bottom: 0;
              `}
`;

const StyledNavButton = styled(Button)`
    display: block;
    line-height: 2;
    margin: 20px 0;
    padding: 0;
    width: 100%;
    text-align: center;
`;

const NavbarMobile = () => {
    const navRef = useRef(null);
    const [hidden, setHidden] = useState(false);
    let scrollPos = 0;
    const handleScroll = () => {
        const { top } = document.body.getBoundingClientRect();

        setHidden(top < scrollPos);
        scrollPos = top;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <StyledNavWrapper hidden={hidden} ref={navRef}>
            <StyledNavButton as={NavLink} to="/home" activeclass="active">
                home
            </StyledNavButton>
            <StyledNavButton as={NavLink} to="/articles" activeclass="active">
                artykuły
            </StyledNavButton>
            <StyledNavButton as={NavLink} to="/about" activeclass="active">
                o mnie
            </StyledNavButton>
            <NavMark navRef={navRef}/>
        </StyledNavWrapper>
    );
};

export default NavbarMobile;
