import React from 'react';
import img73 from '../images/image73.png';

const Design = () => {
  return (
    <div className='design'>
        <h3 className='design__heading'> Design </h3>

        <div className='design__container d-flex justify-content-center'>
            
            <div className='design__imageDiv'>
                <img src={img73} className="h-100 w-100" />
            </div>

            <div className='design__subContainer'>

            </div>
        </div>
        
    </div>
  )
}

export default Design