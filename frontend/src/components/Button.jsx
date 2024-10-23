import React from 'react'

function Button({
    children,
    className,
    type = "submit",
    ...props
}) {
    return (
        <div 
            data-theme="emerald"
        >
            <button 
                className={`btn btn-secondary btn-md w-full ${className}`} 
                type={type}
                {...props} 
            >{children}</button>
        </div>
    )
}

export default Button