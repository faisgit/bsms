import React, { forwardRef } from 'react'

function Input({
    label,
    className = '',
    type = "text",
    ...props
}) {
  return (
    <div className='flex flex-col gap-1'>
        {label &&<label htmlFor={label} className='font-semibold'>{label}</label> }
        <input type={type} placeholder="Type here" className={`input input-bordered w-full max-w-xs ${className}`} {...props} />
    </div>
  )
}

export default Input