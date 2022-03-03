import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import BlogContext from './blogContext';
import BlogReducer from './reducers/blogReducer';
import { FILTER_ARTICLES } from './types';

export const initialState = {
    isLoading: false,
    isError: false,
    articles: [],
    article: null,
    categories: [],
    filters: {
        category: -1,
        title: ''
    },
    filteredArticles: null
};

const BlogState = ({ children }) => {
    const [state, dispatch] = useReducer(BlogReducer, initialState);

    const filterArticles = (title) => {
        dispatch({ type: FILTER_ARTICLES, payload: title });
    };

    return (
        <BlogContext.Provider
            value={{
                state,
                dispatch,
                filterArticles
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

BlogState.propTypes = {
    children: PropTypes.node.isRequired
}

export default BlogState;