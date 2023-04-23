import React from 'react'
import img from '../header/img.jpg'
import { Link } from 'react-router-dom'
import './ViewReport.css'
const ViewReport = () => {
  //  console.log(props.getDetais)

  return (
 <>
  <div className="leftSideMenu">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="temp">
          <span className='userName'>Mr.</span>
          </div>
          <div className="viewList">
           <p className='center'><Link className='view'>View Report</Link></p>
          </div>
          <div className="viewList">
           <p className='center'><Link className='view'>View Details</Link></p>
          </div>
          <div className="viewList">
           <p className='center'><Link className='view' to='/update'>View Update </Link></p>
          </div>
    
         </div>
 </>
  )
}

export default ViewReport