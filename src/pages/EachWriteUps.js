import React , {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useParams } from 'react-router-dom'
import {BASE_URL} from '../cofig'
import  dotenv from 'dotenv'

dotenv.config()


export default function EachWriteUps() {

    let {name} = useParams();
    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")
    const [content , setContent] = useState("")
    const [image , setImage] = useState("")
        
    name = name.toLowerCase()

    useEffect(() => {

        let url = BASE_URL + `/api/writeups/title?name=${name}`
        // url = "http://192.168.1.7:5000/api/writeups/title?name=dummy"
        // url = "https://jsonplaceholder.typicode.com/posts"

        const fetchData = async()=>{
            const response = await fetch(url)
            console.log(response)
            const data = await response.json()
            // console.log(data)
            if(data){
                setContent(data.content)
                setTitle(data.title)
                setDescription(data.description)
                setImage(data.image)
            }
            if(!data){
                setContent(`no data for given title : ( ${name}`)
            }
        }

        fetchData()
    }, [name])

    const markdown = `A paragraph with *emphasis* and **strong importance**.
# heading
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
    
* Lists
* [ ] todo
* [x] done
    
A table:
    
| a | b |
| - | - |
    `

    return (
        content?(
        <div className="p-3">
            <div className="container p-3">
                <h1 className="myfire">{title}</h1>
                <p className="myfire-small">{description}</p>
                <div className="container pt-5 pb-5">
                    <img src={image} alt="" className="img-fluid pb-5"></img>
                   
                </div>
            </div>
             <div className="container">
                <ReactMarkdown children={content} plugins={[gfm]}/>
             </div>
           
        </div>
        ):<h1>WriteUps Loading ...</h1>

    )
    
}
