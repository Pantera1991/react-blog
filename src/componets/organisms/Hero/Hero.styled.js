import styled from 'styled-components';
import image from 'assets/img/hero-image.webp';
import Container from 'componets/atoms/Container';

export const StyledHeroContainer = styled(Container)`
    display: block;
    padding: 15px;
    border-radius: 8px;
`;

export const StyledWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column-reverse;

    ${({ theme }) => theme.mq.laptop} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 60px 0;
    }
`;

export const StyledHeroText = styled.div`
    position: absolute;
    width: 80%;
    bottom: 30px;
    right: 50%;
    transform: translateX(50%);
    border-radius: 8px;
    padding: 15px;

    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.accent};
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    z-index: 2;

    > span {
        position: relative;
        font-size: 1.8rem;
        font-family: 'DroidSerif', Georgia, serif;
        font-weight: 700;
        line-height: 1.2;
        overflow: hidden;
        color: ${({ theme }) => theme.colors.accent};
        margin: 0 5px 0 0;
    }

    ${({ theme }) => theme.mq.laptop} {
        position: unset;
        width: unset;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 30px;
        height: 100%;
        transform: translateX(0);

        > span {
            display: flex;
            flex-direction: column;
            font-size: 5.5rem;
            height: 70px;
            margin: 0;
        }
    }
`;

export const StylingImageWrapper = styled.div`
    position: relative;
    padding: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 8px;

    ${({ theme }) => theme.mq.laptop} {
        padding: 15px;
    }
`;

export const StyledClip = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 8px;
    z-index: 1;
`;

export const StyledHeroImage = styled.div`
    height: 70vh;
    border-radius: 8px;
    opacity: 0;
    position: relative;
    background-color: ${({ theme }) => theme.colors.accent};
    background-image: url(${image});
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    filter: grayscale(100%) contrast(1) blur(0px);
    mix-blend-mode: multiply;
    z-index: 0;

    ${({ theme }) => theme.mq.laptop} {
        height: 100%;
    }
`;
