import React, { forwardRef } from 'react'

function Input({
    label,
    className = '',
    type = "text",
    ...props
}, ref) {
  return (
    <div className='flex flex-col gap-1'>
        {label &&<label htmlFor={label} className='font-semibold'>{label}</label> }
        <input ref={ref} type={type} placeholder="Type here" className={`input input-bordered input-md w-full max-w-xs ${className}`} {...props} />
    </div>
  )
}

export default forwardRef(Input)
