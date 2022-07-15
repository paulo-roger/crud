import React from 'react'
import "./card.css";

export default function Card(props) {

    return (
        <div className='card-container'>
            <h1>Usuário ID: {props.id}</h1>
            <p>{props.name}</p>
            <p>{props.surname}</p>
        </div>
    )
}