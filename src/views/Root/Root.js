import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home/Home';
import Articles from 'views/Articles/Articles';
import About from 'views/About/About';
import Container from 'componets/atoms/Container';
import PreloadWave from 'componets/atoms/PreloadWave';
import ArticlePage from 'views/Article/ArticlePage';
import BlogState from '../../context/blogState';


const handleFallBack = () => (
    <Container>
        <PreloadWave />
    </Container>
);

const Root = () => (
    <Suspense fallback={handleFallBack}>
        <BlogState>
            <BrowserRouter>
                <MainTemplate>
                    <Routes>
                        <Route path="/" component={() => <Navigate to="/home" />} />
                        <Route path="/home" element={<Home/>} />
                        <Route path="/articles" element={<Articles/>} />
                        <Route path="/articles/:id" element={<ArticlePage />}/>
                        <Route path="/about" element={About} />
                    </Routes>
                </MainTemplate>
            </BrowserRouter>
        </BlogState>
    </Suspense>
)

export default Root;
