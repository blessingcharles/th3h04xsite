import React from 'react'
import { Link } from 'react-router-dom'



export default function Cards({title , description , imgsrc ,lastElementRef, linkHref , date }) {
    return (
        <div className="card mb-3"  ref={lastElementRef} key={title}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imgsrc} className="img-fluid rounded-start" alt="..." />
                </div>

                <div className="col-md-8">
                <div className="card-body container">
                    <h3 className="card-title myfire-small" ref={lastElementRef}>{title}</h3>
                    <p className="card-text">{description}</p>
                    <Link to={linkHref} className="btn btn-primary">Read More</Link>
                    <p className="card-text"><small className="text-muted">{date}</small></p>
                </div>
                </div>
             </div>
     </div>
    )
}
