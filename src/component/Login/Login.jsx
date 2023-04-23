import React, { useState } from 'react'
import Header from '../header/Header'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'
import { list, logInUser } from '../service/UserServices'
import LogOutButton from '../button/LogOutButton'
import {toast,ToastContainer} from 'react-toastify'
const Login = () => {
   const [userLogInDto, setUserLogInDto]=useState({username:"",password:""})
   const[validation,setValidation]=useState(({isError:true}))
   const navigate=useNavigate();
  const onChangehandler =(e)=>{
    const name =e.target.name
    const value =e.target.value
   
   setUserLogInDto({...userLogInDto,[name]:value})
}


const onSubmitHandler =(e)=>{
      e.preventDefault();
      logInUser(userLogInDto).then((responce)=>{
        localStorage.setItem("token",responce.data.result)
        localStorage.setItem("login",true)
        navigate("/home")
      }).catch((error)=>{
        console.log(error.response.data)
        toast.error(error.response.data,{position:'top-left'})
      })
}
  return (
    <>
    <section className='form'>
         <h2 className='heading'>LogIn User Here</h2>
       <div className="form_fild">
           <form>
           <div className="item">
           <label htmlfor="username">UserName</label>
            <input className='input' type="text" name="username" id="username" placeholder='Enter UserName Here' onChange={ onChangehandler} ></input>
            { validation.isError ? <div className="error"><p>some errordfbbnnnhmjmjmf</p></div>:''}
           </div>
           <div className="item">
           <label htmlfor="password">Password</label>
            <input  className='input' type="password" name="password" id="password" placeholder='Enter Password Here' onChange={ onChangehandler}></input>
            
           </div>
           <button type='sumbit' className='btn' onClick={onSubmitHandler}>Login In</button>
           <button type='reset' className='btn2'>Reset</button>
            <Link to="/register">Click Here For Register</Link>
            </form>
            <ToastContainer/>
     </div>  
    </section>
    </>
  )
}

export default Login