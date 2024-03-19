import React, { useId } from 'react'

function Input({label,placeholder,type}) {
    const id=useId()
    
  return (
    <div className=' mx-3 mb-3'>
        <label htmlFor={`${id}${type}`} className=' form-label fw-bold'>{label}</label>
        <input type={type} className=' form-control h-75 rounded-pill' id={`${id}${type}`} placeholder={placeholder}/>
        
    </div>
  )
}

export default Input