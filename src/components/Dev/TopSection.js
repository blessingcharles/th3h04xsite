import React from 'react'
import Magician from '../../images/magician.png'
export default function TopSection() {
    return (
        <section className="bg-dark pt-5 text-light text-center vh-100 text-sm-start">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <h1 className="myfire font-effect-fire-animation pt-3 pb-3">Development</h1>
                    
                        <p className="lead my-4">
                           
                            These are the projects under my deveopment category . I try to develop a vulnerable app for testing purposes ,
                            you can check it out in my github for source code
                            
                        </p>
                        <img className="icon-xyz" src={require('../../images/witchandcat.svg').default} width="100" alt="" /><br/>
                        <a className="btn btn-primary btn-lg" href="https://github.com/blessingcharles">Github Link</a>

                    </div>
                    <img src={Magician} 
                        className="img-fluid d-none d-sm-block"
                        alt=""
                        />
                    
                </div>
            </div>
            
    </section>
    )
}
