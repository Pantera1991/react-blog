import styled from 'styled-components';
import Container from 'componets/atoms/Container';

export const StyledPrologContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledPrologWrapper = styled.div`
    background: ${({ theme }) => theme.colors.secondary};
`;

export const StyledPrologParagraph = styled.div`
    padding: 15px 30px;

    > p {
        position: relative;
        font-family: 'DroidSerif', Georgia, serif;
        letter-spacing: 2px;
        text-indent: 1.5em;
        font-size: 1.4rem;
        font-style: italic;
        margin: 30px 0;
    }
  
    > p:after {
      content: '';
      position: absolute;
      top: -20px;
      left: 0;
      width: 50px;
      height: 50px;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.primary};
      transform: rotate(12deg);
      z-index: -1;
    }

    ${({ theme }) => theme.mq.laptop} {
        > p {
            font-size: 1.6rem;
            margin: 60px 0;
        }
    }
`;

export const StyledPrologHeader = styled.h2`
    color: ${({ theme }) => theme.colors.accent};
    font-size: 6rem;
    font-family: 'DroidSerif', Georgia, serif;
    text-align: center;
`;
