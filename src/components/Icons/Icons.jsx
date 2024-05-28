/* import React from 'react'
import './icons.css'
const Icons = () => {
  return (
    <div className='d-flex IconsContainer '>
      <div className="socialMediaIcons">
        <i className="bi bi-twitter"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-person-wheelchair"></i>
        <i className="bi bi-instagram"></i>
       
      </div>
    </div>
  )
}

export default Icons
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './icons.css'

const Icons = () => {
  return (
    <div>
      <div className="socialMediaIcons">
        <i className="bi bi-twitter mx-2"></i>
        <i className="bi bi-facebook mx-2"></i>
        <i className="bi bi-person-wheelchair mx-2"></i>
        <i className="bi bi-instagram mx-2"></i>
      </div>
    </div>
  );
}

export default Icons;
