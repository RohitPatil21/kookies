import React from 'react';
import '../styles/Main.scss';

const WorkOnCard = (props) => {
  return (
    <div className='workOnCard'>
        <img src = {props.url} className="workOnCard__image" />
        <p className="workOnCard__serviceName mt-4"> {props.serviceName} </p>
    </div>
  )
}

export default WorkOnCard;