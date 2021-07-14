import React from 'react'
import './BlogForm.css'



export default function BlogForm() {

    function handleFormSubmit(e){
        e.preventDefault()
        console.log(e.target[0].value)
    }

    return (
        <div className="container pt-5" >
            <form onSubmit={handleFormSubmit}>
                
                <div className="form-outline mb-4">
                    <input type="text" id="form4Example1" className="form-control"placeholder="title" />
                </div>

                <div className="form-outline mb-4">
                    <input type="text" id="form4Example2" className="form-control" placeholder="description" />
                    
                </div>
            
                <div className="form-outline mb-4">
                    <textarea className="form-control" id="form4Example3" rows="8" placeholder="content [React Markdown Supported]"></textarea>
                   
                </div>

            
                <button className="btn btn-primary btn-block mb-4" >Create</button>
            </form>
        </div>
    )
}
