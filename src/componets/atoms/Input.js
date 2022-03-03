import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/icons/magnifier.svg';

const Input = styled.input`
    padding: 15px 30px;
    font-size: 1.2rem;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: none;
    border-radius: 50px;
    color: ${({ theme }) => theme.colors.accent};

    ::placeholder {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.colors.accent};
    }
  
    :focus {
      border-radius: 50px;
    }

    ${({ search }) =>
        search &&
        css`
            padding: 10px 20px 10px 40px;
            font-size: 1.4rem;
            background-image: url(${magnifierIcon});
            background-size: 15px;
            background-position: 15px 50%;
            background-repeat: no-repeat;
        `}
`;

export default Input;