import React from 'react'
import Header from '../header/Header'
import Register from '../register/Register.css'
const Update = () => {
  return (
   <>
   <Header/>
   <section className='form'>
         <h2 className='heading'>Update Details Here</h2>
       <div className="form_fild">
           <form>
           <div className="item">
           <label for="username">UserName</label>
            <input className='input' type="text" name="username" id="username" placeholder='Enter UserName Here'></input>
           </div>
           <div className="item">
           <label for="email">email</label>
            <input className='input' type="email" name="email" id="email" placeholder='Enter email Here'></input>
           </div>
           <div className="item">
           <label for="password">Password</label>
            <input  className='input' type="password" name="password" id="password" placeholder='Enter Password Here'></input>   </div>
           <div className="item">
           <label for="phoneNumber">Mobile</label>
            <input  className='input' type="phone" name="phoneNumber" id="phoneNumber" placeholder='Enter phone Number Here'></input>
           </div>
           <button type='sumbit' className='btn'>Update</button>
            </form>
     </div>  
    </section>
   </>
  )
}

export default Update