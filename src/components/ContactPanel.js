import React from 'react'
import '../static/Contact.css'


function ContactPanel(props) {
    
    const data = props.data;

    // console.log(data);

    return (
        <div className="contact_panel_data col-lg-10 col-md-12">
            <div className="contact_info col-lg-8 col-md-12">
                <h4 className="contact_title">{data.title}</h4>
                <div className="contact_text">
                    {data.text}
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <img className="contact_picture" src={data.imgsrc} alt={data.imgalt} />
            </div>
        </div>
    )
}

function ContactSocials(props) {

    let renderData = [];
    const data = props.data;
    
    data.socials.forEach(social => {

        // console.log(social.uid);

        renderData.push(<img className="contact_icon" src={social.data.imgsrc} alt={social.data.imgalt} key={social.uid} />);
    })

    return (
        <div className="contact_panel_socials col-lg-2 col-md-12">
            {renderData}
        </div>
    );
}

export {
    ContactPanel,
    ContactSocials
}
