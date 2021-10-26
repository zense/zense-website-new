import React from 'react'
import '../static/Contact.css'
import {ContactPanel,ContactSocials} from './ContactPanel'
import ContactData from '../data/Contact.json'

function Contact() {
    
    let renderData = []; 

    ContactData.forEach(detail => {
        
        renderData.push(
            <div className="contact_panel" key={detail.uid} >
                <ContactSocials data={detail} />
                <ContactPanel data={detail} />
            </div>
        );
    })

    return (
        <section id="contact">
            <div className="contact_container container">
                {renderData}
            </div>
        </section>
    )
}

export default Contact
