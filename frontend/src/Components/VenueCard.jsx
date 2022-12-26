import React from "react";
import '../Styles/venuecard.css'
import image1 from '../Resources/rave1.jpg'
import image2 from '../Resources/venue-3.jpg'
import image3 from '../Resources/rave2.jpg'
import image4 from '../Resources/venue_one.jpg'
import image5 from '../Resources/venue_two.jpg'

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const VenueCard = (props) => {

    const navigate = useNavigate();
    const [cardImage, setCardImage] = useState(image1)

    const handleClick = () => {
        console.log(`Navigating to ${props.name}s summary page`)
        let venueName = props.name
        venueName = venueName.replace(/\s+/g, "-");
        navigate(`/Venue/${venueName}`)
    }

    useEffect(() => {
        let rand = Math.floor(Math.random() * 5);

        if (rand === 0){ setCardImage(image1)
        } else if (rand === 1) { setCardImage(image2)
        } else if (rand === 2) { setCardImage(image3)
        } else if (rand === 3) { setCardImage(image4)
        } else if (rand === 4) { setCardImage(image5)}

    }, [])

    return (
        <div onClick={handleClick} className="card-container">
            <div className="card-header">
                <h1 className="card-heading center-text">{props.city}</h1>
            </div>
            <div className="card-body">
                <div className="card-maintext">

                    <p className="card-text" id="venue-name">{props.name}</p>
                    <p className="location-text">Address: {props.address}</p>
                    <p className="capacity-text"> Capacity: {props.capacity}</p>

                </div>
                <div className="card-image">
                    <img className="image-styles" src={cardImage} alt="venueimage" width={150} height={200}></img>
                </div>
            </div>
            <div className="card-footer">
                <p className="footer-text">A trusted Ven-U</p>
            </div>
        </div>
    )
}

export default VenueCard;