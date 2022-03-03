import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import LazyImage from 'componets/atoms/LazyImage';
import { DateFormatter, TimeFormatter } from 'utils/DateFormater';

const StyledCard = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary400};
    //box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1) ;

    &:hover img {
        transform: scale(1.1);
    }
`;

const StyledCardLink = styled(NavLink)`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    text-decoration: none;
    z-index: 2;
    color: transparent;
`;

const StyledImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    img {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        transition: transform 0.3s ease-in-out;
        object-fit: cover;
        height: 100%;
    }

    &:before {
        content: '';
        border-radius: 8px;
        background-color: ${({ theme }) => theme.colors.accent};
        bottom: 0;
        height: 100%;
        left: 0;
        mix-blend-mode: multiply;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 1;
    }
`;

const StyledCreateDate = styled.span`
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
    font-family: 'DroidSerif', Georgia, serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 1.5rem;
    letter-spacing: 1px;
`;

const StyledTitle = styled.h3`
    margin-top: 10px;
    font-family: 'DroidSerif', Georgia, serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
    text-align: center;
`;

const StyledExcerpt = styled.p`
    text-align: center;
    text-transform: lowercase;
    font-size: 1.4rem;
    font-family: 'DroidSerif', Georgia, serif;
    letter-spacing: 2px;
`;

const StyledCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
`;

const Card = ({ id, title, createdOn, excerpt, imageHash }) => (
    <StyledCard>
        <StyledCardLink to={`/articles/${id}`} />
        <StyledImageWrapper>
            <LazyImage imageId={imageHash} imageKey="preview" />
        </StyledImageWrapper>
        <StyledCardContent>
            <StyledTitle>{title}</StyledTitle>
            <StyledExcerpt>{excerpt}...</StyledExcerpt>

            <StyledCreateDate>
                <DateFormatter dateString={createdOn} />
                &nbsp;
                <TimeFormatter dateString={createdOn} />
            </StyledCreateDate>
        </StyledCardContent>
    </StyledCard>
);

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    createdOn: PropTypes.string.isRequired,
    imageHash: PropTypes.string.isRequired,
};

export default Card;
