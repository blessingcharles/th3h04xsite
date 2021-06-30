import React from 'react'

export default function TopSection() {

    return (

        <section className="bg-dark pt-3 text-light text-center vh-100 text-sm-start">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1 className="myfire font-effect-fire-animation pt-3 pb-3">WriteuPs</h1>
                
                    <p className="lead my-4">
                        Walkthroughs are available in my github , posted here also soon . Enjoy Your stay
                        
                    </p>
                    <img className="icon-xyz" src={require('../../images/witchandcat.svg').default} width="100" alt="" /><br/>
                    <a className="btn btn-primary btn-lg" href="https://github.com/blessingcharles">Github Link</a>

                </div>
                <img src={require("../../images/Kitten.svg").default} 
                    className="img-fluid d-none d-sm-block"
                    alt=""
                    />
                
            </div>
        </div>
</section>
        
    )


}
