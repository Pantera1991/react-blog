import styled from 'styled-components';

const ButtonAction = styled.button`
    position: relative;
    color: ${({ theme }) => theme.colors.textColor4};
    padding: 10px 15px;
    font-family: 'DroidSerif', Georgia, serif;
    font-weight: 700;
    height: 35px;
    text-decoration: none;
    transition: color 0.3s ease-in, transform 0.3s ease-in-out;
    border-radius: 24px;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.accent};

    &.active {
        color: ${({ theme }) => theme.colors.textColorButtonActive};
    }
`;


export default ButtonAction;