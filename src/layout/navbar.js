import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Gurukul Collage Of Engineering </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <Link class="btn btn-outline-light" to="/addstudent">AddStudent</Link>
    
    
  </div>
  
</nav>


    </div>
  )
}
