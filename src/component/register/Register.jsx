import React, { useState } from 'react'
import Login from '../Login/Login.css'
import { imass, registration } from '../service/UserServices'
import './Register.css'
import { useNavigate ,Link} from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify'
const Register = () => {
  const [userData, setUserData]= useState({username:"",email:"",password:"",phoneNumber:""})
  const[file,setFile]=useState();
 const navigate =useNavigate()
  const onChangehandler =(e)=>{
      const name =e.target.name
      const value =e.target.value
     setUserData({...userData,[name]:value})
  }
  console.log(userData)

  const onSubmithandler =(e)=>{
    e.preventDefault()
     registration(userData).then((responce)=>{
      console.log(responce.data.message)
      toast(responce.data.message,
      {position: toast.POSITION.TOP_CENTER})
     }).catch((error)=>{
      console.log(error.response.data)
      toast.error(error.response.data,
        {position: toast.POSITION.TOP_RIGHT})
    
     })
  }
  const onFileHandle=(e)=>{
     console.log(e.target.files)
        setFile(URL.createObjectURL(e.target.files[0]))
  }
  const su =(e)=>{
    e.preventDefault();
    imass(file).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
     <section className='form'>
         <h2 className='heading'>Register User Here</h2>
       <div className="form_fild">
           <form>
           <div className="item">
           <label htmlfor="username">UserName</label>
            <input className='input' type="text" name="username" id="username" placeholder='Enter UserName Here'  onChange={ onChangehandler}></input>
           </div>
           <div className="item">
           <label htmlfor="email">email</label>
            <input className='input' type="email" name="email" id="email" placeholder='Enter email Here'  onChange={ onChangehandler}></input>
           </div>
           <div className="item">
           <label htmlfor="password">Password</label>
            <input  className='input' type="password" name="password" id="password" placeholder='Enter Password Here'  onChange={ onChangehandler}></input>   </div>
           <div className="item">
           <label htmlfor="phoneNumber">Mobile</label>
            <input  className='input' type="phone" name="phoneNumber" id="phoneNumber" placeholder='Enter phone Number Here'  onChange={ onChangehandler}></input>
           </div>
           <button type='sumbit' className='btn' onClick={onSubmithandler}>Submit</button>
           <button type='reset' className='btn2'>Reset</button>
           <Link to="/login">Click for Login</Link>
            </form>
     </div>  
     <ToastContainer/>
    </section>
         <label htmlfor="phoneNumber">Image</label>
            <input type="file" name="file" id="file"   onChange={onFileHandle}></input>
            <button onClick={su}>submit</button>
    </>
  )
}

export default Register