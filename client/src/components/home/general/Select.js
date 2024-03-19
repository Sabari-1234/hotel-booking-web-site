import React, { useId } from 'react'

function Select({label}) {
    const id1=useId()
  return (
    <div className=' mx-3 mb-3'>
        <label htmlFor={`${id1}${label}`} className=' form-label fw-bold'>{label}</label>
        <select id={`${id1}${label}`} name={label} className=' form-select rounded-pill'>
            <option value="volvo">-Select your title-</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
        </select>
    </div>
  )
}

export default Select