import React, { useId } from 'react'
import TextBox from './TextBox'
import Select from './Select'

function Form({text1,text2,label1,label2,label3,stepValue}) {
  
    const id2=useId()
  return (
    <div>
        <div className=' container-fluid mb-3'>
        <div className=' row'>
            <div className=' col'>
            {stepValue==1 ? <TextBox text={text1}/>:<Select label={text1} />}
            </div>
            <div className=' col'>
            {stepValue==1 ? <TextBox text={text2}/>:<Select label={text2} />}
            </div>
            
           
            
        </div>

        </div>
        <Select label={label1} />
        <Select label={label2} />
        <div className=' mx-3'>
            <label htmlFor={`${id2}${label3}`} className=' form-label fw-bold'>{label3}</label>
            <textarea name="" id={`${id2}${label3}`}  className=' form-control' placeholder='Input text' rows={3}></textarea>
        </div>
        
    </div>
  )
}

export default Form