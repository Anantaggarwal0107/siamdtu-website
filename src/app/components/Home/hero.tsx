import React from 'react';
export const Hero:React.FC = ():JSX.Element => {
    return (
        <section id="hero" className="d-flex align-items-center hero">
                <div className="container hero-container">
                    <div className="d-flex flex-column justify-content-center">
                        <h1>SIAM-DTU</h1>
                        <h2>Society For Industrial And Applied Mathematics</h2>
                        <p> Society for Industrial and Applied Mathematics (SIAM) is an international community of
                            <strong> over 14,000 individual members</strong>. Almost 500 academic, manufacturing, research and
                            development, service and consulting organizations, government, and military organizations
                            worldwide are institutional members. SIAM was <strong>incorporated in 1952</strong> as a non-profit organization to convey useful mathematical knowledge to other professionals who could 
                            implement mathematical theory for practical, industrial, or scientific use.
                        </p>
                    </div>
                </div>
        </section>
    )
}
