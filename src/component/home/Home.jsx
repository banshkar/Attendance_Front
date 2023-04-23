import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import Login from '../Login/Login'
import Register from '../register/Register'
import img from '../header/img.jpg'
import './Home.css'
import ViewReport from '../viewreport/ViewReport'
import SignButton from '../button/SignButton'
import SignOutButton from '../button/SignOutButton'
import { getDetailsUser, getTest } from '../service/UserServices'

const Home = () => {
  const[userInfo,setUserInfo]=useState()
  useEffect(()=>{
    getDetails()
  },[])
 
  const getDetails =()=>{
       getDetailsUser().then((response)=>{
        setUserInfo(response.data.result)
       }).catch((error)=>{
       })
  }
  // console.log(userInfo.username)
  return (
    <>
    <Header />
    <section className='form'>
         <h2 className='home-header'>WelCome Sir</h2>
       <div className="form_fild">
           <div className="container">
            <div className="left items" ><p>9:25:2584.1154</p></div>
            <div className="right items"><p>23:25:2584.1154</p></div>
            <SignButton/>
           </div>
         </div>
    </section>
    <ViewReport />
    </>
  )
}

export default Home