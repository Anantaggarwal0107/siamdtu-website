import React from 'react'
import { yearwiseEvents } from './eventData'
import { EventHero } from './eventHero'

export const Eventhome:React.FC = ():JSX.Element => {
    return (
        <>
            <section id="eventhome" className="eventhome d-flex align-items-center">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center">
                        <h1>SIAM-DTU EVENTS</h1>
                        <h2>2013-2021</h2>
                    </div>
                </div>
            </section>
            <EventHero yearwiseEvents={yearwiseEvents}/>
        </>
    )
}
