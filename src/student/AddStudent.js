import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

let navigate=useNavigate()

const[user,setUser]=useState({
    name:"",
    username:"",
    email:""
    })

    const{name,username,email}=user

    const onInputChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value});
    };

    const onSubmit=async(event)=>{
        event.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/");
    };
  return (
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 class="text-center m-4"><b>Register Student</b></h2>
                <form onSubmit={(event)=>onSubmit(event)}>
                <div class="mb-3">
                    <label html="Name" class="form-label text-start">
                        Name
                    </label>
                    <input 
                    type={"text"}
                    class="form-control"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    onChange={(event)=>onInputChange(event)}
                    />
                    </div>
                    <div class="mb-3">
                    <label html="usernanme" class="form-label text-start">
                       username
                    </label>
                    <input 
                    type={"text"}
                    class="form-control"
                    placeholder="Enter your username"
                    name="username"
                    value={username}
                    onChange={(event)=>onInputChange(event)}/>
                    </div>
                    <div class="mb-3">
                    <label html="email" class="form-label text-start">
                        E-mail
                    </label>
                    <input 
                    type={"text"}
                    class="form-control"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={(event)=>onInputChange(event)}/>
                    </div>
                    <button class="btn btn-outline-primary">Submit</button>
                    <Link class="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                    </form>
                    </div>
             </div>
         </div>
  );
}
