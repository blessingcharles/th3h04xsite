import React from 'react'

export default function TopSection() {
    return (
        <section className="bg-dark pt-5 text-light text-center vh-100 text-sm-start">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <div className="text-container allignment textSize diplay-inline">
                        <h1 className="display-inline">T</h1>
                        <h1 className="display-inline">H</h1>
                        <h1 className="display-inline">3</h1>
                        <h1 className="display-inline">H</h1>
                        <h1 className="display-inline">0</h1>
                        <h1 className="display-inline">4</h1>
                        <h1 className="display-inline">X</h1>
                    </div>
                        <p className="lead my-4">
                            Hi , I'm Blessing Charles here . I'm a developer , security enthusiast , automation lover , release series of security related
                            automated stuffs under ThomasTheCat . A hardcore Linux Lover.  
                            <p><i className="h5">" I love to make things to break things "</i></p>
                            <img className="icon-xyz" src={require('../../images/witchandcat.svg').default} width="100" alt="" />

                        </p>
                        <button className="btn btn-primary btn-lg">Wizards Blog</button>

                    </div>
                    <img src={require("../../images/cat777.svg").default} 
                        className="img-fluid d-none d-sm-block"
                        alt=""
                        />
                    
                </div>
            </div>
        </section>
    )
}
