import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <div className="image">
                <img src={props.item.imageUrl} alt="pic" />
            </div>
            <div className="info">
            <span className="location">{props.item.location}</span>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            <h2>{props.item.title}</h2>
            <span className="date">{props.item.startDate} -</span>
            <span className="date">{props.item.endDate} </span>
            <p className="description">{props.item.description} </p>
            </div>
            
        </div>
    )
}