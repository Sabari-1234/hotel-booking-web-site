import React from 'react'
import Sigin from './Sigin'
import Seperator from './Seperator'
import Input from './Input'

function Forms() {
   
  return (
     <form action="" className=' bg-white form rounded my-5 '>
        <h2 className=' mb-4 text-center mt-3 signinText'>Sign in</h2>
        <Sigin company={'Google'}/>
        <Sigin company={'Facebook'}/>
        <Sigin company={'Apple'}/>
        <div className=' d-flex'>
        <Seperator/>
         <p className=' mt-1'>OR</p>
        <Seperator/>
        </div>
        <Input label={'Email'} placeholder={'Enter your email'} type={'email'}/>
        <Input label={'Password'} placeholder={'Enter your password'} type={'password'}/>
        <div className=' d-flex justify-content-between mx-3'>
         <div>
         <input type="checkbox" id='check' className=' form-check-input'/><label htmlFor="check" className=' form-check-label ms-2'>Remember me</label>
         </div>
        
        <a href="" className=' text-decoration-none'>Forgot password?</a>

        </div>
        <div className=' w-100 d-flex justify-content-center p-3'>
        <a href="" className=' btn btn-primary w-100 rounded-pill'>Sign in</a>
        </div>
        <p className=' text-center '>Don't have an account? <a href="" className=' text-decoration-none'>Sign up</a></p>
       
        
     </form>
  )
}

export default Forms