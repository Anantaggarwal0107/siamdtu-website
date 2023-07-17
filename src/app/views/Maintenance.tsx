import React from 'react'
import bugImg from '../assets/bugs.svg';
import logo from '../assets/logo.png';

export const Maintenance:React.FC = ():JSX.Element => {
    return (
        <section className="vh-100 container">
            <div className="py-3 d-flex justify-content-between fixed-top container align-items-center">
                <img src={logo} style={{height:'60px'}} alt="SIAM DTU logo"/>
                <a href="https://www.instagram.com/dtu_siam/" className="text-muted p-0">Contact us</a>
            </div>

            <div className="d-flex align-items-center h-100 flex-column justify-content-center">
                <img src={bugImg} style={{maxHeight:'350px'}} className="m-5 px-5 img-fluid" alt="yoursthatsenior is under maintenance."/>
                <h1>Coming soon in january...</h1>
                <h5>Currently Under Development :{")"}</h5>
            </div>
        </section>
    )
}
