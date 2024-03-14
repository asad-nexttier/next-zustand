'use client';
import React from 'react'

interface buttonProps {
    title: string;
    onClick: () => void;
};

const Button = ({ title, onClick }: buttonProps) => {

    const clickHandler = () => {
        onClick();
    }

    return (
        <button onClick={clickHandler} className='bg-primary rounded text-white px-[20px] py-[7px] text-center'>
            {title}
        </button>
    )
}

export default Button