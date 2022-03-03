import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ClickOutside = ({children, onClickOutside }) => {
    const containerRef = useRef(null);

    const handleClick = (event) => {
        const container = containerRef.current;
        const { target } = event;
        if ((container && container === target) || (container && !container.contains(target))) {
            onClickOutside(event);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, []);

    return <div ref={containerRef}>{children}</div>;
}

ClickOutside.propTypes = {
    onClickOutside: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default ClickOutside;