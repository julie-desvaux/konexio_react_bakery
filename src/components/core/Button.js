import React from 'react';
import './Button.css';

const Button = ({ children, isSelected, onClick }) => {
    const btnClasses = ['btn'];
    btnClasses.push(isSelected ? 'btn-primary' : 'btn-outline-primary');
    return (
        <button 
            type="button" 
            className={btnClasses.join(' ')} 
            onClick={onClick}>
                {children}
        </button>
    );
}

export default Button;