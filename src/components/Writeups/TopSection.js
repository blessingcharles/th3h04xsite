import React from 'react'
import Smiley from '../../images/smiley.png'

export default function TopSection() {

    return (

        <section className="bg-dark pt-3 text-light text-center vh- text-sm-start pb-5">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1 className="myfire font-effect-fire-animation pt-">WriteuPs</h1>
                
                    <p className="lead my-4">
                        Walkthroughs and Writeups for various CTF and Security related stuffs are available here  
                        
                    </p>
                    <img className="icon-xyz" src={require('../../images/witchandcat.svg').default} width="100" alt="" /><br/>
                    {/* <a className="btn btn-primary btn-lg" href="https://github.com/blessingcharles">Github Link</a> */}

                </div>
                <img src={Smiley} 
                    className="img-fluid d-none d-sm-block"
                    alt=""
                    />
                
            </div>
        </div>
</section>
        
    )


}
