import React, { useState } from 'react'
import './Add.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Add = () => {
    const [user,setUser] = useState({
      fname:'',
      lname:'',
      email:'',
      password:''
    })
    const navigate = useNavigate()
    const inputHandler = (e)=>{
      setUser({...user,[e.target.name]:e.target.value})
      console.log(user)
    }
    
    //create route
    const submitForm =async(e)=>{
        e.preventDefault()
        await axios.post('http://127.0.0.1:8000/api/create',user)
        .then((response)=>{
          console.log(response)
          toast.success(response.data.message,{position:'top-right'})
          navigate('/')
        }).catch(error=>console.log(error))
    }


  return (
    <div className='addUser'>
      <Link to={'/'}>Back</Link>
      <h3>Add New User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
            <label htmlFor='fname'>First Name</label>
            <input type="text" id='fname' onChange={inputHandler} name='fname' autoComplete='off' placeholder='First Name'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor="lname">Last Name</label>
            <input type='text' id='lname' onChange={inputHandler}  name='lname' autoComplete='off' placeholder='Last Nmae'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' onChange={inputHandler}  name='email' autoComplete='off' placeholder='Email'/>
        </div>
        <div className='inputGroup'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={inputHandler}  name='password' autoComplete='off' placeholder='Password'/>
        </div>
        <div className='inputGroup'>
           <button type='submit'>Add User</button>
        </div>
      </form>
    </div>
  )
}

export default Add
