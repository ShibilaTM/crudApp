import React, { useEffect, useState } from 'react'
import '../addUser/Add.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Edit = () => {

    const {id} = useParams();
    const [user,setUser] = useState({
      fname:'',
      lname:'',
      email:''
    })
    const navigate = useNavigate();

    const inputChangeHandler = (e)=>{
      setUser({...user,[e.target.name]:e.target.value})
      console.log(user)
    }

    useEffect(()=>{
      axios.get(`http://localhost:8000/api/getone/${id}`)
      .then((response)=>{
        setUser(response.data)
      }).catch((error)=>{
          console.log(error)
      })
    },[id])

    const submitForm = async(e)=>{
      e.preventDefault()
      await axios.put(`http://localhost:8000/api/update/${id}`,user)
      .then((response)=>{
        toast.success(response.data.message,{position:'top-right'})
        navigate('/')
      }
      )
    }

  return (
    <div className='addUser'>
    <Link to={'/'}>Back</Link>
    <h3>Update User</h3>
    <form className='addUserForm' onSubmit={submitForm}>
      <div className='inputGroup'>
          <label htmlFor='fname'>First Name</label>
          <input type="text" id='fname' value={user.fname} onChange={inputChangeHandler} name='fname' autoComplete='off' placeholder='First Name'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor="lname">Last Name</label>
          <input type='text' id='lname' value={user.lname} onChange={inputChangeHandler} name='lname' autoComplete='off' placeholder='Last Nmae'/>
      </div>
      <div className='inputGroup'>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' value={user.email} onChange={inputChangeHandler} name='email' autoComplete='off' placeholder='Email'/>
      </div>
     
      <div className='inputGroup'>
         <button type='submit'>Update User</button>
      </div>
    </form>
  </div>
  )
}

export default Edit
