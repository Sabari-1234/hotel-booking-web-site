import React from 'react'
import Navbar from '../components/home/Navbar'
import '../SCSS/home/Home.scss'
import Left from '../components/home/Left'
import Right from '../components/home/Right'

function Home() {
  return (
    <div>
      <Navbar/>
      <div className=' container'>
      <div className=' row mt-5 '>
        <div className=' col-4'>
          <Left/>

        </div>
        <div className=' col'>
          <Right/>

        </div>

      </div>
    </div>
      </div>
   
    
  )
}

export default Home
