import React from 'react'

function Left() {
  return (
    <div className="card px-3 py-4 shadow" >
        <div className='  container mt-3 '>
            <div className=' row '>
            <div className=' col-5'>
    <img className="card-img-top rounded-circle  img-fluid " src="https://www.shutterstock.com/image-vector/lets-travel-world-tour-vector-260nw-1973329529.jpg" alt="Card image" />
    </div>
   
    <div className=' col ms-3'>
    <p>Upload your photo</p>
    <a href="" className=' btn btn-outline-primary'>Choose image</a>
    </div>

            </div>
        
        </div>
    
   
    <div className="card-body">
      <h5 className="card-title">Full Name</h5>
      <h6>Professional title</h6>
      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi sit est delectus. Aut alias tenetur, iusto quae repellat quia quas</p>
      <hr />
      <h5>Profile link</h5>
      <a href='https://www.profilelink.com' className=' border border-1 border-black p-2 rounded text-decoration-none text-black'>https://www.profilelink.com</a>
    </div>
  </div>
  )
}

export default Left