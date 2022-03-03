import styled from 'styled-components';

const Button = styled.button`
    position: relative;
    color: ${({ theme }) => theme.colors.textColor4};
    padding: 10px 15px;
    font-family: 'DroidSerif', Georgia, serif;
    font-weight: 700;
    height: 35px;
    text-decoration: none;
    transition: color 0.3s ease-in, transform 0.3s ease-in-out;

    :hover {
        color: ${({ theme }) => theme.colors.white};
    }
  
    :active, :focus {
      background: transparent;
    }

    &.active {
        color: ${({ theme }) => theme.colors.textColorButtonActive};
    }
`;

export default Button;
