import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Contents() {
    
    return (
        <main>
            <section className="p-3 ">
            <div className="container">
                <div className="row align-items-center  justify-content-between">
                    <div className="col-md">
                        <img src={require("../../images/computers.svg")}/>
                    </div>
                    <div className="col-md p-5">
                        <h2>What can You Expect Here?</h2>
                        <p className="lead">Read My WriteUps and Walkthroughs <NavLink to="/writeups">here</NavLink> </p>
                        <p className="lead">Learn about Our security Automation Tools Under Thomas The Cat  <NavLink to="/ttc">here</NavLink> </p>
                        <p className="lead">Read About My Educational Os  <NavLink to="/dev/tomos">here</NavLink>  </p>
                        <p className="lead">Visit MY github Page and Contribute New Features</p>
                        

                    </div>
                </div>
            </div>
            </section>

            <section className="p-3 ">
            <div className="container">
                <div className="row align-items-center  justify-content-between">
                    
                    <div className="col-md p-5">
                        <h2>Security is not a Feature to Sell</h2>
                        <p className="lead">Each and every software must be securely build .Thats why Thomas the cat tools are releaed to do blackbox testing</p>
                        <p className="lead">Need any new tools contact me via social medias</p>

                        

                    </div>
                    <div className="col-md">
                        <img src={require("../../images/Firewall.svg")}/>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
