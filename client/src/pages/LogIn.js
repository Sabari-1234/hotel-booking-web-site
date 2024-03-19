import React from 'react'
import '../SCSS/login/Login.scss'
import Forms from '../components/login/Forms'


function LogIn() {
  return (
    <div className=' d-flex flex-column align-items-center background'>
      <h1 className=' text-danger  rounded bg-white mt-5 login  d-flex align-items-center justify-content-center'>TOURATO</h1>
      <Forms/>
    </div>
  )
}

export default LogIn