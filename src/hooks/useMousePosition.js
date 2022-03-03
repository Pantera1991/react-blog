import { useEffect, useState } from 'react';

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
        document.addEventListener('mousemove', setFromEvent);

        return () => {
            document.removeEventListener('mousemove', setFromEvent);
        };
    }, []);

    return position;
};

export default useMousePosition;