import { useContext, useEffect } from 'react';
import BlogContext from 'context/blogContext';
import Directus8 from '../api/Directus8';

const directus = new Directus8();

const useArticlesApi = () => {

    const { state, dispatch } = useContext(BlogContext);

    useEffect(() => {
        async function fetchData() {
            dispatch({ type: 'FETCH_INIT' });

            try {
                const [articles, categories] = await Promise.all([directus.getArticles(), directus.getCategories()]);

                dispatch({ type: 'ADD_ARTICLES', payload: articles });
                dispatch({ type: 'ADD_CATEGORIES', payload: categories });
            } catch (error) {
                dispatch({ type: 'FETCH_FAILURE' });
            }
        }
        if (state.articles.length === 0) {
            fetchData();
        }
    }, []);
    

    return [state];
}

export default useArticlesApi;