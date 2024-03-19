import React from 'react'

function Sigin({company}) {
  return (
    <div  className= {`rounded sigin d-flex align-items-center justify-content-between mb-4  ${company} rounded-pill`}>
        <a href="" className='text-decoration-none text-white '><i class={`fa-brands fa-${company.toLowerCase()} ms-3`}></i><span className='   ms-5'>Sign in with</span> {company}</a>
    </div>
  )
}

export default Sigin