import React  from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyled';
import { theme } from 'theme/Theme';
import Navbar from 'componets/organisms/Navbar/Navbar';
import Footer from 'componets/organisms/Footer/Footer';
import NavbarMobile from 'componets/organisms/Navbar/NavbarMobile';

const MainTemplateContainer = styled.div`
  position: relative;
`;

const MainTemplate = ({ children }) => (
    <MainTemplateContainer>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <>
                <Navbar />
                {children}
                <NavbarMobile />
                <Footer />
            </>
        </ThemeProvider>
    </MainTemplateContainer>
);

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
};

export default MainTemplate;
