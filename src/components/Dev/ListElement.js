import React from 'react'

export default function ListElement(props) {
    return (
        
        <a href={props.href} class="list-group-item list-group-item-action" aria-current="true">

            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1 myfire-small">{props.heading}</h5>
            <small>{props.tag}</small>
            </div>

            <p class="mb-1">
                {props.content}
               
            </p>

            <small><i>Features : </i>{props.features}</small>

        </a>

    )
}
