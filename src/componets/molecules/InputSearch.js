import React, { useCallback, useContext, useState } from 'react';
import debounce from 'lodash.debounce';
import Input from 'componets/atoms/Input';
import BlogContext from 'context/blogContext';

const InputSearch = () => {
    const blogContext = useContext(BlogContext);
    const { filterArticles  } = blogContext;
    const [value, setValue] = useState('');

    const debouncedSearch = useCallback(
        debounce((val) => {
            filterArticles(val);
        }, 750),
        [],
    );

    const handleChange = useCallback(
        (e) => {
            setValue(e.target.value);
            debouncedSearch(e.target.value);
        },
        [debouncedSearch],
    );

    return <Input type="text"
        placeholder="Wpisz tytuł"
        aria-labelledby="Wpisz tytuł"
        onChange={handleChange} value={value}
        search/>;
};

export default InputSearch;