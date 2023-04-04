import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Params, useParams } from 'react-router-dom';

export default function Home() {
  
  const[users,setUsers]=useState([])

  const {id}=useParams()

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers=async()=>{
    const result= await axios.get("http://localhost:8080/users")
    setUsers(result.data);
  }

  const deleteUser=async (id)=>{
    const result = await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers()
  }

  return (
    <div class="container bg-color-light">
        <div class="py-4"></div>
        <table class="table border shadow table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user,index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
        <Link
            className="btn btn-primary mx-2"
             to={`/viewuser/${user.id}`}
              >
            View
                      </Link>
          <Link class="btn btn-outline-primary mx-2"
            to={`/edituser/${user.id}`}
           >Edit</Link>
          <button class="btn btn-danger mx-2"
          onClick={()=>deleteUser(user.id)}
          >delete</button>

        </td>
      </tr>
      ))
    }
   
     </tbody>
</table>
    </div>
  )
}
