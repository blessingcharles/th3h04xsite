import React from 'react'
import {Link} from 'react-router-dom'

export default function Cards({title , cardText , link , linkText , logo}) {

   
    return (
        <div className="col-md">
                <div className="card bg-dark text-light">
                    <div className="card-body text-center">
                        <div className="h1 mb-3">
                            <i className={logo}></i>
                        </div>
                            <h3 className="card-title mb-3">{title}</h3>
                            <p className="card-text">
                                {cardText}
                            </p>                           
                            <Link to={link} className="btn btn-primary">{linkText}</Link>
                    </div>
                </div>
        </div>
    )
}
