import React from 'react';
import '../styles/Main.scss';
import image72 from '../images/image72.svg';

const Strategy = () => {
    return (
        <div className='strategy'>
            <h3 className='strategy__heading'> Strategy </h3>

            <div className='strategy__container d-flex justify-content-center'>
                <div className='strategy__subContainer bg-white  d-flex'>
                    <div className='strategy__left'>
                        <p className='strategy__textHighlight'>The Challenge</p>

                        <p> People share their biodata using different formats. Some people share doc file, some share excel sheets, some share PDFs, some people share their photos separately. </p>
                             
                        <p> Secondly, many people don’t even know what to write in the biodata. </p>
                        
                        <p> Another problem is you cannot edit your biodata once you have shared and also you do not have any control over whom to share your biodata with. </p>

                        <p> Firstep aims at solving this problem. It helps you create beautiful biodata which is easy to edit and share.</p>  

                            
                    </div>

                    <div className='strategy__right'>
                            <img src={image72} className="h-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strategy;