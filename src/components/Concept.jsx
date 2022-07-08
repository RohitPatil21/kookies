import React from 'react'
import ConceptCard from './ConceptCard'

import img01 from '../images/01.png';
import img02 from '../images/02.png';
import img03 from '../images/03.png';
import img04 from '../images/04.png';
import img05 from '../images/05.png';

import url1 from '../images/biodata-creation1.png';
import url2 from '../images/upload-photos1.png';
import url3 from '../images/edit-details1.png';
import url4 from '../images/share-biodata1.png';
import url5 from '../images/privacy1.png';



const Concept = () => {
    return (
        <div className='concept'>
            <h3 className='concept__heading text-center'> Concept </h3>

            <div className='concept__cardsContainer d-flex justify-content-center'>

                <ConceptCard number={img01} url={url1}
                    p1={"Guided biodata creation with essential and optional fields"}

                    p2={"Have you ever been in a situation, where you were asked by your family to create a bio data to share with a suitor and had no idea what that is? "}

                    p3={"We’ve made the process super easy and simple, so you don’t have to wonder how to create a biodata or look around for samples and templates."}

                    bgColor = {"#FFBC7D4D"}
                />






                <ConceptCard number={img02} url={url2}
                    p1={"Upload upto seven of your best photos"}

                p2 = {"A biodata with photos? It’s 2019 and high time we move away from Word and PDF biodatas that only contain text and create a more personalized experience. "}

                p3 = {"With Firstep you can upload upto 7 photos, select your featured photo, and we’ll automatically figure out the rest."} 

                bgColor = {"#7DC9FF"}
                />

                <ConceptCard number={img03} url={url3}
                    p1={"Edit details or switch photos anytime - people see your latest version"}

                    p2={"A biodata with photos? It’s 2019 and high time we move away from Word and PDF biodatas that only contain text and create a more personalized experience. "}

                    p3={"With Firstep you can upload upto 7 photos, select your featured photo, and we’ll automatically figure out the rest."}

                    bgColor = {"#A77DFF4D"}
                />
            </div>

            <div className='concept__cardsContainer d-flex justify-content-center'>
                <ConceptCard number={img04} url={url4}
                    p1={"Share via private link to anyone via WhatsApp or other platform"}

                    p2={"Once you have completed your biodata, register with your mobile number and hit the share button to get a unique and private link that is easy to access on mobile and desktops. "}

                    p3={"Parents and friends can forward along to any prospects."}

                    bgColor = {"#FF7DE2"}
                />




                <ConceptCard number={img05} url={url5}
                    p1={"Maintain your privacy - unpublish your bio data anytime"}
                    
                    p2={"We’ve built Firstep with your privacy in mind. That means we strive to give you more control of who sees your biodata and to unpublish it any time."}

                    bgColor = {"#FF7D7D"}
                />
            </div>

        </div>
    )
}

export default Concept


