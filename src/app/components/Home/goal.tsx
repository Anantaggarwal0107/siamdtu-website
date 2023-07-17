import React from 'react'
import goalImg from '../../assets/homeImages/goal.svg'
export const Goal:React.FC = ():JSX.Element => {
    return (
    <section id="goal" className="goal my-5 my-sm-3">
        <div className="container-fluid">
            <header className='section-header d-flex'>
                <p>Our Goals</p>
            </header>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={goalImg} alt="SIAM-DTU goal" className="img-fluid" style={{width:"80%" }}/>
                </div>
                <div className="d-flex flex-column justify-content-center col-md-6">
                    <ul>
                        <li>
                            1. To advance the application of mathematics and computational science to
                            engineering, industry, science, and society.
                        </li>
                        <li>
                            2. To promote research that will lead to effective new mathematical and computational
                            methods and techniques for science, engineering, industry, and society.
                        </li>
                        <li>
                            3.To provide media for the exchange of information and ideas among mathematicians,
                            engineers, and scientists.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}
