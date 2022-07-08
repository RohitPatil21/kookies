import React from 'react';
import '../styles/Main.scss';
import image1 from '../images/image1.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const TopInfo = () => {
    return (


        <div className='topInfo  d-flex flex-column gap-5 align-items-center'>
            <h2 className='text-center'>Firstep</h2>

            <div className='topInfo__infoPara text-center'>
                <p>
                    Firstep helps you create a beautiful matrimonial biodata that you can share with anyone via a private link over WhatsApp, email or even matrimonial platforms.
                </p>
            </div>


            <div className='topInfo__infoImage d-flex '>

                <div className='topInfo__left d-flex flex-column w-50'>
                    <div className='topInfo__clientDiv'>
                        <h4 className='mb-3'>Client</h4>
                        <p>Firstep</p>
                    </div>

                    <div className='topInfo__categoryDiv'>
                        <h4 className='topInfo__heading mb-3'>Category</h4>
                        <p>UX/UI Design</p>
                        <p> Website Design </p>
                    </div>

                    <button className='p-1'> Visit Now <ArrowForwardIcon className="topInfo__arrowIcon" /> </button>
                </div>

                <div className='topInfo__imageDiv'>
                    <img src={image1} />
                </div>
            </div>
        </div>
    )
}

export default TopInfo