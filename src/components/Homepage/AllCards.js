import React from 'react'
import Cards from './Cards'

export default function AllCards() {
    return (
        <section class="p-5" id="th3h04x-projects">
                <div class="container">
                    <div class="row text-center g-4">
                
                        {<Cards
                            title="Thomas the cat"
                            cardText="                                    
                            Available Tools : 
                                    BountyCat , 
                                    DevBloopers ,
                                     Jodom , 
                                     GraphqlInjector , 
                                     noSqlInjector , 
                                     Wifihackcat  ,
                                     goXss"

                            link="/ttc"
                            linkText="Read More"
                            logo = "bi bi-tools"
                        />}
                    <div class="row text-center g-4"></div>
                        {<Cards
                                title="Source Code"
                                cardText="Get the source code of all of my tools and projects "
                                link="https://github.com/blessingcharles"
                                linkText="github link"
                                logo = "bi bi-laptop"
                            />}

                        {<Cards
                            title="Writeups"
                            cardText="Available for : tryhackme , bandit , natas"
                            link="/writeups"
                            linkText="Read More"
                            logo = "bi bi-pencil-square"
                        />}
                    
                    </div>
                </div>
            </section>
    )
}
