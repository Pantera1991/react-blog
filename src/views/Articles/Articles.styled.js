import styled from 'styled-components';

export const StyledWrapper = styled.div``;

export const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    margin: 0 15px;
`;

export const StyledHeader = styled.div`
    margin: 30px;
`;

export const StyledHeaderTitle = styled.h1`
    color: ${({ theme }) => theme.colors.accent};
    text-align: center;

    ${({ theme }) => theme.mq.laptop} {
        text-align: left;
    }
`;

export const StyledFiltering = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 15px;

    ${({ theme }) => theme.mq.laptop} {
        flex-direction: row;
        justify-content: space-between;
    }
`;
