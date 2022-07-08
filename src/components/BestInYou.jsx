import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Main.scss';
import image1 from '../images/image71.svg';
import image2 from '../images/image69.svg';


const BestInYou = () => {
    return (
        <div className='bestInYou d-flex'>
            <div className='bestInYou__left'>
                <img src={image1} className="w-100 h-100" />
            </div>

            <div className='bestInYou__middle  h-100 h-100 d-flex flex-column align-items-center'>
                <h3 className=''> Bring Out The Best In You </h3>

                <p className='w-50 text-center mt-5'>Make a great first impression with a beautiful matrimonial biodata, shareable via a private link, in just a few minutes.</p>
            </div>

            <div className='bestInYou__right'>
                <img src={image2} className="w-100 h-100" />
            </div>
        </div>
    )
}

export default BestInYou;