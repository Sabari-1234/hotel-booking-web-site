import React, { useId } from 'react'


function TextBox({text}) {
    const id=useId()
  return (
    <div>
        <label htmlFor={`${id}text`} className=' form-label fw-bold'>{text}</label>
        <input type="text" placeholder={`your ${text}`} id={`${id}text`} className=' form-control rounded-pill '/>
    </div>
  )
}

export default TextBox