import React from 'react'

export default function MyFooter() {
    
    return (
        <footer className="bg-dark text-center text-white myfooter">
        
            <div className="container p-4">
            
                <section className="mb-4">
                    <a href="https://twitter.com/th3h04x">
                        <i className="bi bi-twitter "></i>
                    </a>
                    <a href="https://github.com/blessingcharles">
                        <i className="bi bi-github mx-1"></i>
                    </a>
                    <a href="/">
                        <i className="bi bi-linkedin mx-1"></i>
                    </a>
                    <a href="/">
                        <i className="bi bi-instagram mx-1"></i>
                    </a>
                    <a href="/">
                        <i className="bi bi-facebook mx-1"></i>
                    </a>
                </section>
        
            <section className="mb-4">
                <p>
                    You can find all my tools sourcecode in my <a href="https://github.com/blessingcharles">github</a>
                    Feel free to check it and contribute to it You can visit my main domain <a href="https://th3h04x.ml">th3h04x</a>
                </p>
            </section>
            
        
            </div>
        
            <div className="text-center p-3">
            © 2020 Copyright:
            <a className="text-white" href="https://th3h04x.ml/">th3h04x.ml</a>
            </div>
        
        </footer>
        
    )
}
