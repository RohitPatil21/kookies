import React from 'react';
import '../styles/Main.scss';
import WorkOnCard from './WorkOnCard';
import frame from '../images/Frame.svg';
import frame1 from '../images/Frame1.svg';
import frame2 from '../images/Frame2.svg';
import frame3 from '../images/Frame3.svg';
import frame4 from '../images/Frame4.svg';



const WeWorkOn = () => {
  return (
    <div className='work'>
        <h3 className='work__heading text-center'>What Did We Work On? </h3>

        <div className='work__container d-flex justify-content-center align-items-center'>
            <WorkOnCard url={frame} serviceName={'Webpage'} />
            <WorkOnCard url={frame1} serviceName={'UX & UI Design'} />
            <WorkOnCard url={frame2} serviceName={'App Development'} />
            <WorkOnCard url={frame3} serviceName={'Backend'} />
            <WorkOnCard url={frame4} serviceName={'QA Testing'} />
        </div>
    </div>
  )
}

export default WeWorkOn;