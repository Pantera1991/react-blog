import { FILTER_ARTICLES } from '../types';

const BlogReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case 'ADD_ARTICLES':
            return {
                ...state,
                isLoading: false,
                isError: false,
                articles: action.payload,
            };
        case 'FETCH_SINGLE_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                article: action.payload,
            };

        case 'ADD_CATEGORIES':
            return {
                ...state,
                isLoading: false,
                isError: false,
                categories: action.payload,
            };
        case FILTER_ARTICLES:
            return {
                ...state,
                filteredArticles: state.articles.filter(
                    article => article.title.toLowerCase().includes(action.payload.toLowerCase())
                )
            }
        default:
            throw new Error();
    }
};

export default BlogReducer;