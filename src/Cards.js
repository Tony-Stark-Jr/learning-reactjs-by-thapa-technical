import React from 'react'
import "./Cards.css"

function Cards(props) {
    return (
        <>
            
                <div className="cards">
                    <div className="card">
                        <img src={props.imgsrc} alt="" className="card-img" />
                        <div className="card-info">
                            <span className="card-category">{props.category}</span>
                            <h3 className="card-title">{props.seriesName}</h3>
                            <a href={props.link} target="_blank" >
                                <button>Watch Now</button>
                            </a>
                        </div>
                    </div>
                </div>

        </>
    )
}

export default Cards