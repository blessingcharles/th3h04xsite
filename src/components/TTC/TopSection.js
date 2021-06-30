import React from 'react'

export default function TopSection() {
    return (
        <section className="bg-dark pt-3 text-light text-center vh-100 text-sm-start">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <h1 className="myfire font-effect-fire-animation pt-3 pb-3">THOMAS THE CAT</h1>
                    
                        <p className="lead my-4">
                            These are the series of security related automated dont use against targets you dont have permissions
                            Try on your localsite or any ctf challenges . Don't be Script kiddie always ,try build your own 
                            
                        </p>
                        <img className="icon-xyz" src={require('../../images/witchandcat.svg').default} width="100" alt="" /><br/>
                        <a className="btn btn-primary btn-lg" href="https://github.com/blessingcharles">Github Link</a>

                    </div>
                    <img src={require("../../images/alley.svg").default} 
                        className="img-fluid d-none d-sm-block"
                        alt=""
                        />
                    
                </div>
            </div>
    </section>
    )
}
