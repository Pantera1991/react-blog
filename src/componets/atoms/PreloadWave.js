import styled, { keyframes } from 'styled-components';

const PreloadWaveAnimation = keyframes`
  0% {
    transform: scale(0, 0);
    opacity: .5;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
`;

const PreloadWave = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;

    ::before,
    ::after {
        position: absolute;
        display: inline-block;
        width: 60px;
        height: 60px;
        content: '';
        animation: ${PreloadWaveAnimation} 1.6s linear infinite;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.accent};
    }

    ::after {
        animation-delay: -0.8s;
    }
`;

export default PreloadWave;
