import React from 'react'

export const Footer:React.FC = ():JSX.Element => {
    return (
        <>
            <div id="footer">
                <div className='container'>
                    <div className='row'>
                        <div className='d-flex flex-column align-items-center justify-element-center'>
                            <p className='contact-text'>Contact Us</p>
                            <div>
                                <a href="https://www.instagram.com/dtu_siam/" className='social-media-links' target="blank"><i className='fab fa-instagram'/></a>
                                <a href="https://www.facebook.com/dtusiam" className='social-media-links' target="blank"><i className='fab fa-facebook-square'/></a>
                                <a href="https://www.linkedin.com/company/dtu-siam/mycompany/" className='social-media-links' target="blank"><i className='fab fa-linkedin'/></a>
                                <a href= "mailto:siamdtu@gmail.com" className='social-media-links'><i className="far fa-envelope"/></a>  
                            </div>
                            <p className="copyright-text">&copy; SIAM DTU</p>               
                        </div>
                    </div>
                </div>
            </div>
            <div className="credits d-flex justify-content-center align-items-center">
                Designed with <i className="fa fa-heart text-danger px-1"/> and <i className="fa fa-laptop text-dark px-1"/>
            </div>
        </>
    )
}
