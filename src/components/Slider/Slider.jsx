import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './Slider.scss';

const propTypes = {
    items: PropTypes.array.isRequired
};

function Slider({ items }) {
    const [scrollLeft, setScrollLeft] = useState(0);
    const [sliderAttributes, setSliderAttributes] = useState({
        scrollWidth: null,
        offsetWidth: null
    });
    const sliderListRef = useRef();
    const setRef = useCallback(node => {
        if (node) {
            setScrollLeft(node.scrollLeft);
            setSliderAttributes({
                scrollWidth: node.scrollWidth,
                offsetWidth: node.offsetWidth
            });

            sliderListRef.current = node;
        }
      }, [])

    const onArrowClick = (e) => {
        const itemWidth = sliderListRef.current.scrollWidth / items.length;

        switch(e.currentTarget.dataset.direction) {
            case 'left':
                sliderListRef.current.scrollLeft -= itemWidth;
                setScrollLeft(scrollLeft - itemWidth);
                break;
            case 'right':    
                sliderListRef.current.scrollLeft += itemWidth;
                setScrollLeft(scrollLeft + itemWidth);
                break;
        }
    };

    return (
        <div className="Slider">
            <div
                className={`Slider-arrow arrow-left ${scrollLeft === 0 ? 'disabled' : ''}`}
                data-direction="left"
                onClick={onArrowClick}
            >
                <span className="arrow" />
            </div>
            <ul className="Slider-list" ref={setRef}>
                {items.map((item, index) => <li key={index} className="Slider-list-item">{index}{item}</li>)}
            </ul>
            <div
                className={`Slider-arrow arrow-right ${scrollLeft >= sliderAttributes.offsetWidth ? 'disabled' : ''}`}
                data-direction="right"
                onClick={onArrowClick}
            >
                <span className="arrow" />
            </div>
        </div>
    );
}

Slider.propTypes = propTypes;

export default Slider;