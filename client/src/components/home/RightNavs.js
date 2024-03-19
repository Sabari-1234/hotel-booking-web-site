import React from 'react'
import General from './general/General'

function RightNavs() {
  return (
<>

<ul className="nav nav-tabs mb-5">
  <li className="nav-item">
    <a className="nav-link active" data-bs-toggle="tab" href="#home">General</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="tab" href="#menu1">Notifications</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="tab" href="#menu2">Members</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="tab" href="#menu3">Billings</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="tab" href="#menu4">Language and Region</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="tab" href="#menu5">Security</a>
  </li>
</ul>


<div className="tab-content">
  <div className="tab-pane container active" id="home">
    <General/>
  </div>
  <div className="tab-pane container fade" id="menu1">...</div>
  <div className="tab-pane container fade" id="menu2">...</div>
  <div className="tab-pane container fade" id="menu3">...</div>
  <div className="tab-pane container fade" id="menu4">...</div>
  <div className="tab-pane container fade" id="menu5">...</div>

</div>
</>
  )
}

export default RightNavs