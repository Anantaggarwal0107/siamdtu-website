import React from 'react'
import { Helmet } from 'react-helmet'
import { Eventhome } from '../components'
export const Events:React.FC = () => {
    return (
        <>
        <Helmet>
            <title>SIAM-DTU | Events</title>
            <meta name="keywords" content="SIAM-DTU, SIAM, journals, Delhi Technological University, DTU, Webinars, Competitions,
             Coding Contests, Hackathon, Math-A-Thon, Internships and placements guidance, Cyber Security, Viral Tweet Prediction Challenge,
             Full Stack Development Dynamic Programming, Career Launcher, Microsoft, Bitgrit, Machine Learning, 
             Artificial Intelligence, Annual Tech Fest, Maths Competitions"/>
        </Helmet>
        <Eventhome/>
         </>
    )
}
