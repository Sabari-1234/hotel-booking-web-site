import React from 'react'
import NavbarIcons from './NavbarIcons'

function Navbar() {
  return (
     
        <nav class="navbar navbar-expand-sm  border-bottom shadow">
    <div className="container-fluid">
    <a className="navbar-brand bg-black text-primary fw-bold px-2 rounded  mx-3 " href="javascript:void(0)">TOURATO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a class="nav-link me-3" href="">Home</a>
        </li>
        <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle me-3" href="#" role="button" data-bs-toggle="dropdown">Places</a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item " href="#">Link</a></li>
    <li><a class="dropdown-item" href="#">Another link</a></li>
    <li><a class="dropdown-item" href="#">A third link</a></li>
  </ul>
</li>
        <li className="nav-item">
          <a className="nav-link me-3" href="">Foods</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-3" href="">Transport</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-3" href="">Culture</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-3" href="">Timming</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-3" href="">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-3" href="">Contact</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-4 rounded-pill" type="text" placeholder="Search"/>
        
      </form>
      
      <NavbarIcons icon={"fa-solid fa-message"}/>
      <NavbarIcons icon={"fa-solid fa-gear"}/>
      <NavbarIcons icon={"fa-solid fa-bell"}/>
      
      
    </div>
  </div>
  <img src="https://www.shutterstock.com/image-vector/lets-travel-world-tour-vector-260nw-1973329529.jpg" alt="" className=' profile rounded-circle me-4'/>
</nav>
     
  )
}

export default Navbar