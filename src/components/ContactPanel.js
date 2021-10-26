import React from 'react'
import '../static/Contact.css'


function ContactPanel(props) {
    
    const data = props.data;

    // console.log(data);

    return (
        <div className="contact_panel">
            <div className="contac_info">
                <p>{data.info}</p>
            </div>
            <div className="contact_picture">
                <img src={data.imgsrc} alt={data.imgalt} />
            </div>
        </div>
    )
}

function ContactSocials(props) {

    let renderData = [];
    const data = props.data;
    
    data.socials.forEach(social => {

        // console.log(social.uid);

        renderData.push(<img src={social.data.imgsrc} alt={social.data.imgalt} key={social.uid} />);
    })

    return (
        <div className="contac_socials">
            {renderData}
        </div>
    );
}

export {
    ContactPanel,
    ContactSocials
}
