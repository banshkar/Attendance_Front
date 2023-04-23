import React from 'react'
import './Header.css';
import image from '../header/icon.jpg'
import { Link, useNavigate } from 'react-router-dom';
import LoginButton from '../button/LoginButton';
import LogOutButton from '../button/LogOutButton';
import { logOutUser ,isCheckLogIn} from '../service/UserServices';
 
 const Header =()=>{
     const navigate =useNavigate();
   const onClickHandler =(e)=>{
     e.preventDefault();
     logOutUser().then((responce)=>{
        console.log("ghghggh",responce)
     }).catch((error)=>{
       navigate("/login")
     })
    
   }
    return (
        <>
        <div className="main">

            <section className='header'>
               
                <div className="item">
                <ul>
                    <li className='list'>
                      <Link to='/home'>Home</Link>
                      <Link to='/'>About</Link>
                      <Link to='/'>Contact</Link>
                      <Link to='/login'>   <button type='submit' className='login' onClick={onClickHandler}>LogOut</button></Link>
                    
                    
                    </li>
                </ul>
                </div>
            </section>
        </div>
        </>
    );
 }
 export default Header;