import React, {useState} from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import {CgMenuRound} from "react-icons/cg";
import {CgCloseO} from "react-icons/cg";

import dtuLogo from '../assets/dtulogo.jpg';
import logo from '../assets/logo.png';
import { NavbarTypes } from "../siam.types";

export const Header:React.FC = ():JSX.Element => {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

    const routes = [
        { title: "Home", path: "/",},
        { title: "Events", path: "/events"},
        { title: "Series", path: "/series"},
        { title: "Team", path: "/team"},
    ];
    
    const navigation:React.FC<NavbarTypes> =(navType:NavbarTypes):JSX.Element =>{
        return (
            <div className={navType} style={{backgroundColor: "white"}}>
                <nav>
                    <Link to="/">
                        <img className= "nav-brand" src={logo} style={{height: '40px'}} alt="SIAM-DTU Logo."/>
                    </Link>
                    <div>
                        {!isMobile || open? 
                            (<ul>
                                {routes.map((route, index) => (
                                    <li key={index} onClick= {()=>setOpen(false)}>
                                        <Link to={route.path}>{route.title}</Link>
                                    </li>
                                ))}
                                {/* <li>
                                    <Link to="/results"> <i className="fas fa-medal fa-lg"/> Recruitment Results</Link>
                                </li> */}
                            </ul>)
                        : null}
                        
                        {isMobile ? 
                        open ? <CgCloseO className= "menu-icon" onClick={() => setOpen(false)}/> : <CgMenuRound className="menu-icon" onClick={() => setOpen(true)}/>
                        : null}
                    </div>
                    <Link to="/">
                            <img className= "nav-dtu-logo" src={dtuLogo} style={!isMobile ? {height: '60px'} : {height: '50px', left: '26%'} } alt="DTU Logo."/>
                    </Link>
                </nav>
            </div>
        )
    }
    
    return (
        <div>
            {navigation(isMobile? 'mobile-navbar': 'navbar')}
        </div>
    )
}
