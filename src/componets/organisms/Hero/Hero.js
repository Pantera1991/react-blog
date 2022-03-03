import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { theme } from 'theme/Theme';
import {
    StyledClip,
    StyledHeroContainer,
    StyledHeroImage,
    StyledHeroText,
    StyledWrapper,
    StylingImageWrapper,
} from './Hero.styled';

const Hero = () => {
    const imageRef = useRef(null);
    const imageWrapperRef = useRef(null);
    const imageClipRef = useRef(null);
    const textRef = useRef(null);

    const handleMouseEvent = (event) => {
        const { clientX, clientY } = event;

        const textElements = imageRef.current;

        const xPos = clientX / document.body.offsetWidth - 0.5;
        const yPos = clientY / document.body.offsetHeight - 0.5;

        gsap.to(textElements, {
            rotationX: xPos * 50,
            rotationY: yPos * 50,
            ease: 'power3.easeInOut',
        });
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // document.addEventListener('mousemove', handleMouseEvent);
        const imageWrapper = imageWrapperRef.current;
        const imageClip = imageClipRef.current;
        const image = imageRef.current;
        const words = textRef.current.children;

        gsap.set(words, { autoAlpha: 1 });

        const tl2 = gsap.timeline({
            defaults: {
                ease: 'power3.inOut',
            },
        });

        tl2.addLabel('intro')
            .fromTo(words, { opacity: 0, x: -15 }, { opacity: 1, x: 0, stagger: 0.1 }, 'intro')
            .fromTo(imageClip, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left right' }, 'intro')
            .to(image, { duration: 0, opacity: 1 })
            .to(imageWrapper, { duration: 0, backgroundColor: theme.colors.accent })
            .fromTo(imageClip, { duration: 0, scaleX: 1 }, { scaleX: 0, transformOrigin: 'right left' });

        return () => {
            document.removeEventListener('mousemove', handleMouseEvent);
        };
    }, []);

    return (
        <StyledHeroContainer>
            <StyledWrapper>
                <StyledHeroText ref={textRef}>
                    <span>Marzycielka.</span>
                    <span>Barmanka.</span>
                    <span>Kucharz amator.</span>
                    <span>Marketingowiec.</span>
                    <span>Pracoholiczka.</span>
                    <span>Fanka crossfitu.</span>
                    <span>Stara.</span>
                    <span>Rasowy Multitask.</span>
                </StyledHeroText>
                <StylingImageWrapper ref={imageWrapperRef}>
                    <StyledClip ref={imageClipRef} />
                    <StyledHeroImage ref={imageRef} />
                </StylingImageWrapper>
            </StyledWrapper>
        </StyledHeroContainer>
    );
};

export default Hero;
