import React from 'react';
import Container from 'componets/atoms/Container';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ErrorImage from 'assets/img/fetch-error.svg';
import ButtonAction from 'componets/atoms/Button/ButtonAction';

const StyledErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
`;

const StyledErrorText = styled.div`
    color: ${({ theme }) => theme.colors.accent};
    margin: 30px 0;
`;

const StyledErrorImg = styled.img `
  width: 100%;
  height: auto;
  max-width: 500px;
`;

const ErrorFetch = ({ text }) => {
    const handleRefreshPage = () => {
        window.location.reload();
    };
    return (
        <Container>
            <StyledErrorWrapper>
                <StyledErrorImg src={ErrorImage} alt={text}/>
                <StyledErrorText>{text}</StyledErrorText>
                <ButtonAction onClick={handleRefreshPage}>Odśweż stronę</ButtonAction>
            </StyledErrorWrapper>
        </Container>
    );
};

ErrorFetch.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ErrorFetch;
