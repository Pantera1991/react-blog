import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';


const LazyImage = ({imageId, imageKey, title}) => {
    const params = `${imageId}?key=${imageKey}`;
    const url = `${process.env.REACT_APP_DIRECTUS_HOST}${process.env.REACT_APP_DIRECTUS_ASSETS8}/${params}`;
    return (
        <LazyLoadImage src={url}
            alt={title}
            width="100%"
            height="100%"
            effect="blur"
            loading="lazy"/>
    )
}

LazyImage.propTypes  = {
    imageId: PropTypes.string.isRequired,
    imageKey: PropTypes.string.isRequired,
    title: PropTypes.string
}

LazyImage.defaultProps = {
    title: ''
}

export default LazyImage;