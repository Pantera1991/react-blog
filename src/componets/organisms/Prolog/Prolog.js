import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StyledPrologContainer, StyledPrologHeader, StyledPrologParagraph, StyledPrologWrapper } from './Prolog.styled';

const Prolog = () => {
    const headerRef = useRef(null);
    const contentRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const container = containerRef.current;
        const header = headerRef.current;
        const content = contentRef.current;
        gsap.set([header, content], { autoAlpha: 0 });
        gsap.fromTo(
            [header, content],
            { y: '+=100', opacity: 0 },
            {
                ease: 'easyInOut',
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 50%',
                },
            },
        );
    }, []);

    return (
        <StyledPrologWrapper>
            <StyledPrologContainer ref={containerRef}>
                <StyledPrologHeader ref={headerRef}>Prolog</StyledPrologHeader>
                <StyledPrologParagraph ref={contentRef}>
                    <p>
                        Nie chcę tu nikogo pouczać ani podawać na tacy gotowych rozwiązań. Będziesz miał okazję
                        natomiast
                        przeczytać o moich subiektywnych obserwacjach otaczającego świata.
                    </p>
                    <p>
                        Chcę, żeby to miejsce było przestrzenią dla tych, którzy potrzebują tchnąć w siebie odrobinę
                        nowych
                        inspiracji, doskonalić siebie, swoje pasje, swój biznes i swoje produkty.
                    </p>
                    <p>Znajdziesz tu treści biznesowe, lifestylowe, kulinarne, inspiracyjne oraz marketingowe.</p>
                    <p>
                        Źródłem mojej wiedzy jest własne doświadczenie w obszarach biznesowych, inspiracją do rozwoju i
                        działania - moje pasje, a motywacją do ciągłego osiągania celów są zawsze otaczający mnie
                        ludzie.
                    </p>
                    <p>
                        W dzisiejszych czasach trzeba patrzeć szeroko i … ogarniać wszystko! Chcę Cię zainspirować,
                        usprawiedliwić, zmotywować, wprawić w dobry nastrój, rozśmieszyć lub po prostu pokazać
                        gastro-biznes
                        od kuchni.
                    </p>
                </StyledPrologParagraph>
            </StyledPrologContainer>
        </StyledPrologWrapper>
    );
};

export default Prolog;
