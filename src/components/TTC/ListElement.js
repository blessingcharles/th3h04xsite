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
                Do you have any idea add to it and help me to finish the todo
            </p>

            <small><i>TODO : </i>{props.todo}</small>

        </a>
    )
}
