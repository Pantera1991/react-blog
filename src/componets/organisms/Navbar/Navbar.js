import React, { useRef } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from 'componets/atoms/Button/Button';
import LogoLink from 'componets/atoms/LogoLink';
import NavMark from 'componets/atoms/NavMark';

const StyledWrapper = styled.div`
    width: 100%;
    height: 80px;
    background: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 15px;
`;

const StyledLinksList = styled.ul`
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;
    display: none;
    align-items: center;
    justify-content: space-around;

    ${({ theme }) => theme.mq.desktop} {
        display: flex;
    }
`;

const StyledLinksItem = styled.li`
    margin: 20px 10px;
`;

const Navbar = () => {
    const navRef = useRef(null);

    return (
        <StyledWrapper>
            <LogoLink to="/home" />
            <StyledLinksList ref={navRef}>
                <StyledLinksItem>
                    <Button as={NavLink} to="/home" activeclass="active">
                        home
                    </Button>
                </StyledLinksItem>
                <StyledLinksItem>
                    <Button as={NavLink} to="/articles" activeclass="active">
                        artykuły
                    </Button>
                </StyledLinksItem>
                <StyledLinksItem>
                    <Button as={NavLink} to="/about" activeclass="active">
                        o mnie
                    </Button>
                </StyledLinksItem>
                <NavMark navRef={navRef} />
            </StyledLinksList>
        </StyledWrapper>
    );
};

export default Navbar;
