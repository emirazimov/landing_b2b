import React, { useEffect, useState } from 'react';

export const useMobile = (innerWidth = 768) => {
    const [mobile, setMobile] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);

            if (window.innerWidth <= innerWidth) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize, { passive: true });

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        mobile,
        width,
        height
    };
};

export const pixelToRem = (pixelValue: number) => {
    // const remValue = (pixelValue / 16).toFixed(4);

    // return `${remValue}rem`;

    return (1 / 16) * pixelValue + 'rem'
};

export const remCalc = (px: number) => {
    return (1 / 16) * px + 'rem'
}

export const doMonthWithNumber = (days = 35) => {
    let arr: number[] = []
    let i = 0
    Array.from({ length: days }).forEach((item, idx) => {
        if (idx + 1 === 32) {
            i = 0
        }
        i++
        arr.push(i)
    });

    return arr;
}