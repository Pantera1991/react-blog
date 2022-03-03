import React from 'react';
import Container from 'componets/atoms/Container';
import Card from 'componets/molecules/Card/Card';
import PreloadWave from 'componets/atoms/PreloadWave';
import CategorySelect from 'componets/molecules/CategorySelect';
import ErrorFetch from 'componets/molecules/ErrorFetch';
import useArticlesApi from 'hooks/useArticlesApi';
import InputSearch from 'componets/molecules/InputSearch';
import { StyledFiltering, StyledGrid, StyledHeader, StyledHeaderTitle } from './Articles.styled';

const Articles = () => {
    const [state] = useArticlesApi();
    const { isLoading, isError, articles, filteredArticles, categories } = state;

    return (
        <Container>
            {isError && <ErrorFetch text="Ups coś poszło nie tak spróbuj ponownie..." />}

            {isLoading && (
                <Container>
                    <PreloadWave />
                </Container>
            )}

            {articles && articles.length > 0 && (
                <>
                    <StyledHeader>
                        <StyledHeaderTitle>Artykuły</StyledHeaderTitle>
                    </StyledHeader>
                    <StyledFiltering>
                        <InputSearch />
                        <CategorySelect data={categories} firstElement="Wrzystkie"/>
                    </StyledFiltering>
                    <StyledGrid>
                        {filteredArticles !== null
                            ? filteredArticles.map((item) => (
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    createdOn={item.created_on}
                                    excerpt={item.excerpt}
                                    imageHash={item.image.private_hash}
                                />
                            ))
                            : articles.map((item) => (
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    createdOn={item.created_on}
                                    excerpt={item.excerpt}
                                    imageHash={item.image.private_hash}
                                />
                            ))}
                        {/* {articles.map((item) => ( */}
                        {/*    <Card */}
                        {/*        key={item.id} */}
                        {/*        id={item.id} */}
                        {/*        title={item.title} */}
                        {/*        createdOn={item.created_on} */}
                        {/*        excerpt={item.excerpt} */}
                        {/*        imageHash={item.image.private_hash} */}
                        {/*    /> */}
                        {/* ))} */}
                    </StyledGrid>
                </>
            )}
        </Container>
    );
};
export default Articles;
