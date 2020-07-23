import React from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css'

const Slider = ({ min, max, price, onChange }) => {
    return(
        <>
            <RCSlider 
                min={min}
                max={max}
                price={price}
                onChange={onChange}
            />
        </>
    );
}

export default Slider;