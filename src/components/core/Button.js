import React from 'react';
import './Button.css';

const Button = ({ children, isSelected, onClick, className }) => {
    return (
        <button 
            type="button" 
            className={className} 
            onClick={onClick}>
                {children}
        </button>
    );
}

export default Button;