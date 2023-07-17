import React from 'react'
import { Goal, Hero, Mission} from '../components/Home';
export const Home:React.FC = () => {
    return (
        <>
            <Hero/>
            <Goal/>
            <Mission/>
        </>

    )
}
