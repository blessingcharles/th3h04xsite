import React , {useEffect} from 'react'

import { useParams } from 'react-router-dom'

require('dotenv').config()

export default function EachWriteUps() {

    const {name} = useParams();

    let content ;

    useEffect(() => {

        let url = process.env.DOMAIN_URL + `api/writeups/${name}`
        fetch(url)
        .then(r =>{
             console.log(r)
             content = r.json()
        }).catch(err =>{
            console.log(err)
        })
    }, [name])

    return (
        <div>
            <h1>{name}</h1>
            <div className="container">
                {content}
            </div>
        </div>

    )
    
}
