import React, { useContext, useEffect } from 'react';
import Directus8 from 'api/Directus8';
import Container from 'componets/atoms/Container';
import PreloadWave from 'componets/atoms/PreloadWave';
import LazyImage from 'componets/atoms/LazyImage';
import ErrorFetch from 'componets/molecules/ErrorFetch';
import { useParams } from 'react-router-dom';
import BlogContext from '../../context/blogContext';
import { ArticleContent, ArticleContentWrapper, ArticleImage, ArticleTitle } from './ArticlePage.styled';

const ArticlePage = () => {
    const params = useParams();
    const { id } = params;
    const { state, dispatch } = useContext(BlogContext);
    const { isLoading, isError, articles, article } = state;

    useEffect(async () => {
        dispatch({ type: 'FETCH_INIT' });

        if (articles.length) {
            const articleById = state.articles.filter((item) => item.id === parseInt(id, 10));
            dispatch({ type: 'FETCH_SINGLE_SUCCESS', payload: articleById ? articleById[0] : null });
        } else {
            try {
                const directus = new Directus8();
                const fetchArticle = await directus.getArticle(id);
                fetchArticle.image = await directus.getFile(fetchArticle.hero_image);

                dispatch({ type: 'FETCH_SINGLE_SUCCESS', payload: fetchArticle });
            } catch (error) {
                console.error(error);
                dispatch({ type: 'FETCH_FAILURE' });
            }
        }
    }, []);

    return (
        <>
            {isError && <ErrorFetch text="Ups coś poszło nie tak spróbuj ponownie..."/>}

            {isLoading && (
                <Container>
                    <PreloadWave />
                </Container>
            )}

            {article && (
                <>
                    <ArticleImage>
                        <LazyImage imageKey="hero" imageId={article.image.private_hash} />
                    </ArticleImage>
                    <Container>
                        <ArticleContentWrapper>
                            <ArticleTitle>{article.title}</ArticleTitle>
                            <ArticleContent dangerouslySetInnerHTML={{ __html: article.content }} />
                        </ArticleContentWrapper>
                    </Container>
                </>
            )}
        </>
    );
};

export default ArticlePage;
