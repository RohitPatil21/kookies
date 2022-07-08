import React from 'react'
import BestInYou from './BestInYou';
import Concept from './Concept';
import Navbar from './Navbar';
import Strategy from './Strategy';
import TopInfo from './TopInfo';
import WeWorkOn from './WeWorkOn';
import Design from './Design';


const Main = () => {
  return (
    <div className='main'>
        <Navbar />

        <TopInfo />
        <WeWorkOn />
        <BestInYou />
        <Strategy />
        <Concept />
        <Design />
    </div>
  )
}

export default Main