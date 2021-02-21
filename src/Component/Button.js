import React from 'react';
import '../Styles/Button.css'

function Button({
    children,
    onClick,
    btnStyle
}) {

    const STYLE =[
        "btn-nav",
        "btn-option-nav",
        "btn-default",
        "btn-default1",
        "btn-bookmark",
        "btn-inactive",
        "btn-pledgecard"
    ]

    return (
        <>
            <button className={` btn ${btnStyle} `} onClick={onClick} type="button">
                <p>
                    {children}
                </p> 
            </button>
        </>
    )
}

export default Button
