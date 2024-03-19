import React, { useId, useState } from 'react'
import Form from './Form'

function General() {
    const id4=useId()
    const [step, setstep] = useState(1)
  return (
    <div>
      
         <div className=' border shadow rounded p-3 mb-3'>
        <div className=' mx-3'>
        <h4>Profile</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, sequi </p>
        </div>
        
        <Form text1={'Full name'} text2={'Username'} label1={'Profession'} label2={'Location'} label3={'Bio'} stepValue={1}/>
    </div>
    <div className=' border shadow rounded p-3 General2BG mb-5'>
        <div className=' container-fluid mb-5'>
            <div className=' row'>
                <div className=' col-3'>
                <input type="text" placeholder='INTEREST' className=' form-control  rounded-pill'/>
                </div>
            
            <div className=' col offset-3 '>
            <input type="checkbox" id={`${id4}skip`} className=' form-check-input' />
            <label htmlFor={`${id4}skip`} className=' form-check-label ms-2'> SKIP</label>
            </div>
            
            </div>
        

        </div>

        <Form text1={'Season'} text2={'Culture'} label1={'Language'} label2={'Place'} label3={'Mode of transport'} step={step} setstep={setstep} stepValue={2}/>

    </div>
    </div>
    
  )
}

export default General