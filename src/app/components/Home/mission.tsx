import React from 'react'
import missionImage from '../../assets/homeImages/missionImg.svg';
import { useMediaQuery } from 'react-responsive';
export const Mission = () => {

    const ImageDiv:React.FC=():JSX.Element => {
        return(
            <div className="d-flex justify-content-center col-md-6">
                <img src={missionImage} alt="SIAM-DTU Mission" className="img-fluid" style={{width:"80%"}}/>
            </div>
        )
    }

    const ContentDiv:React.FC =():JSX.Element => {
        return(
            <div className="d-flex flex-column justify-content-center col-md-6">
                <ul>
                    <li>
                        SIAM DTU aims to provide a common platform to the students of DTU to allow them to freely discuss, 
                        brainstorm and work on various aspects of mathematics. The chapter aims to bring together students
                        from various fields of study and enable them to develop mathematical prowess as it is a field which 
                        when scraped from any aspect of this world, renders it void. 
                    </li>
                    <li>
                        Armed with support of a world community and the Department of Mathematics, DTU, the 
                        society strives to organize various events throughout the year to fulfill its aims. The society 
                        has successfully organized multiple events in the past in accordance with its mission of 
                        contributing to the community of mathematics, and strives to continue to do so.
                    </li>
                    <li>
                        The chapter looks forward to involve students in the development of their 
                        mathematical prowess and widen their horizons to facilitate analytical 
                        thinking and enhance their reasoning powers.
                    </li>
                </ul>
            </div>
        )
    }

    const isMobile = useMediaQuery({ query: `(max-width: 900px)` });

    return (
        <section id="mission" className="mission my-5 my-sm-3">
        <div className="container-fluid">
            <header className='section-header d-flex'>
                <p>Our Mission</p>
            </header>
            <div className="row">
                {isMobile? <ImageDiv/> : <ContentDiv/>}
                {isMobile? <ContentDiv/> : <ImageDiv/>}
            </div>
        </div>
    </section>
    )
}
