import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

// CSS
import 'react-vertical-timeline-component/style.min.css';
import '../static/Timeline.css'

// Material Icons
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import ExtensionIcon from '@material-ui/icons/Extension';

const TimelineData=[
    {
        props:{
            className: "",
            contentStyle: { opacity:0.9 },
            contentArrowStyle: { borderRight: '7px solid  rgb(0,0,0)' },
            date: "March 2020",
            dateClassName:"date",
            iconStyle: { background: 'rgb(0,0,0)', color: '#fff' },
            icon: <ExtensionIcon />,
        },
        title:'CTF',
        subtitle:'Lorem',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        github:'https://github.com/'
    },

    {
        props:{
            className: "",
            contentStyle: { opacity:0.9 },
            contentArrowStyle: { borderRight: '7px solid  rgb(0,0,0)' },
            date: "March 2020",
            dateClassName:"date",
            iconStyle: { background: 'rgb(0,0,0)', color: '#fff' },
            icon: <SchoolIcon />,
        },
        title:'CTF',
        subtitle:'Lorem',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        github:'https://github.com/'
    },

    {
        props:{
            className: "",
            contentStyle: { opacity:0.9 },
            contentArrowStyle: { borderRight: '7px solid  rgb(0,0,0)' },
            date: "March 2020",
            dateClassName:"date",
            iconStyle: { background: 'rgb(0,0,0)', color: '#fff' },
            icon: <SchoolIcon />,
        },
        title:'CTF',
        subtitle:'Lorem',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        github:'https://github.com/'
    },

    {
        props:{
            className: "",
            contentStyle: { opacity:0.9 },
            contentArrowStyle: { borderRight: '7px solid rgb(0,0,0)' },
            date: "March 2020",
            dateClassName:"date",
            iconStyle: { background: 'rgb(0,0,0)', color: '#fff' },
            icon: <SchoolIcon />,
        },
        title:'CTF',
        subtitle:'Lorem',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        github:'https://github.com/'
    },

    {
        props:{
            className: "",
            contentStyle: { opacity:0.9 },
            contentArrowStyle: { borderRight: '7px solid  rgb(0,0,0)' },
            date: "March 2020",
            dateClassName:"date",
            iconStyle: { background: 'rgb(0,0,0)', color: '#fff' },
            icon: <WorkIcon />,
        },
        title:'CTF',
        subtitle:'Lorem',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        github:'https://github.com/'
    },

]

const TimelineElement = (elements) =>
    elements.map(element=>(
        <VerticalTimelineElement {...element.props}>
            <h3 className="vertical-timeline-element-title">
                {element.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                {element.subtitle}
            </h4>
            <p>
                {element.content}
            </p>
            {/* <a href={element.github} class='links'>Github</a> */}
        </VerticalTimelineElement>
    ));


export default function Timeline(){
    return (
        <div className="timeline-main">
            <VerticalTimeline animate={false} layout="1-column-left" className="vertical-timeline-custom-line">
                
               {TimelineElement(TimelineData)}
               
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(0, 153, 0)', color: '#fff' }}
                    icon={<StarIcon />}
                />

            </VerticalTimeline>
        </div>
    )
}