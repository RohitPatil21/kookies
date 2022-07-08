import React from 'react'

const ConceptCard = (props) => {
    return (
        <div className='conceptCard'>

            <img src={props.number} className="pb-4" />

            <div className='conceptCard__container d-flex flex-column justify-content-between' style={{backgroundColor : props.bgColor}  }>
                
                <div className='conceptCard__imageDiv'>
                    <img src={props.url} className="h-100 w-100" />
                </div>

                <p className='conceptCard__heading'> 
                    {props.p1}
                </p>

                <p>
                    {props.p2}
                </p>

                <p>
                    {props.p3} 
                </p>

            </div>
        </div>
    )
}

export default ConceptCard