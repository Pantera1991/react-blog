import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const StyledNavMark = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    width: ${({ width }) => `${width}px` ?? '0'};
    height: 3px;
    background: ${({ theme }) => theme.colors.accent3};
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${({ left }) => `${left}px` ?? '0'});
`;

const NavMark = ({ navRef }) => {
    const [mark, setMark] = useState({ width: 0, left: 0 });

    const setPositionMark = (pathName) => {
        const activeItem = navRef.current.querySelector(`a[href="${pathName}"]`);
        setMark({ width: activeItem?.offsetWidth, left: activeItem?.offsetLeft });
    };
    const handleNavChange = (event) => {
        const { target } = event;

        if (target.href) {
            const lastSegment = target.href.split('/');
            setPositionMark(`/${lastSegment.pop()}`);
        }
    };

    const { pathname } = useLocation();

    useEffect(() => {
        setPositionMark(pathname);
        navRef.current.addEventListener('click', handleNavChange);
    }, []);

    return <StyledNavMark width={mark.width} left={mark.left} />;
};

NavMark.propTypes = {
    navRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default NavMark;
