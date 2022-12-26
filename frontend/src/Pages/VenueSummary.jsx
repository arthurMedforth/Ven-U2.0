/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import methods from "../Lib/actCitingClient.js"
import '../Styles/venuesummary.css'
    
const VenueSummary = () => {

    let {id} = useParams();

    const [isLoaded,setisLoaded] = useState(true)  // turned this true as the text in the venue summary was not loading 

    const [dummyData, setdummyData] = useState({
        venue_name: "Lakota",
        venue_city: "Bristol",
        venue_address: "Address: Temple Meads,Upper York Street, BS2 8QN",
        // venue_postcode:"BS2 8QN",
        venue_capacity: "Capacity:350",
        venue_email: "Contact: bookings@lakota.com",
        venue_start_date: " Available from: 17/12/22-17/02/23",
        // venue_end_date: "17/02/23",
        venue_description: "One of Bristol’s oldest venues is open for hire. If you need a city centre location, chest-rattling sound system and iconic setting, we have three individual spaces each with their own incredible story.     Arts, entertainment, music – you name it, we’ll host it.",
        venue_email: "Contact: venue-bookings@lakota.com",
        venue_imageURL: "",
        event_notification: "Venue Booking Request Notification (2) ",
        event_name: "Tom's Tour 2022",
        event_artist:"Artist: Tom and the Front End",
        event_date:"Event Date: 18/12/22",
        event_capacity:"Attendee's: 200",



    })
    useEffect(() => {
        // // Fetch the data for this venue based on the id in the url 
        // console.log("Fetch venue from database...")
        // const getSpecificVenueData = async() => {
        //     const venueData = await methods.retrieveVenue(id)
        //     console.log('Here is the returned JSON of')
        //     console.log(venueData)
        //     setdummyData(venueData[0])
        //     setisLoaded(true)
        // }
        // getSpecificVenueData()

    }, [])

    return (
        
        <div className="flex-container content-container">
            {isLoaded &&
            <div>
                <div className="event-notification-container">
                    <div className="event-header">
                        <h1>{dummyData.event_notification}</h1>
                        </div>
            </div>
            <div className="event-body">
                    <div className= "event_artist">{dummyData.event_artist}</div>
                    <div className= "event_name">{dummyData.event_name}</div>
                    <div className= "event_date">{dummyData.event_date}</div>
                    <div className= "event_capacity">{dummyData.event_capacity}</div>
                    <button className="accept-button">Accept</button>
                    <button className="reject-button">Reject</button>
                </div>   
            <div className="summary-container">
                <div className="summary-header">
                    <h2> {dummyData.venue_city}</h2>
                </div>
                <div className="summary-body">
                    <div className= "venue-name">{dummyData.venue_name}</div>
                    {/* <div className= "venue-city">{dummyData.venue_city}</div> */}
                    <div className= "venue-address">{dummyData.venue_address}</div>
                    {/* <div className= "venue-postcode">{dummyData.venue_postcode}</div> */}
                    <div className= "venue-capacity">{dummyData.venue_capacity}</div>
                    <div className= "venue-description">{dummyData.venue_description}</div>
                    <div className= "venue-email">{dummyData.venue_email}</div>
                    <div className= "venue-start-date">{dummyData.venue_start_date}</div>
                    <div className= "venue-end-date">{dummyData.venue_end_date}</div>
                    <p>{dummyData.venue_imageURL}</p>
                </div>
                <div className="summary-footer">
                    <button className="edit-venue">Edit Venue</button>
                    <button className="delete-venue">Delete Venue</button>
                </div>
            </div>
            </div>
        }
        </div>
        
    )
}

export default VenueSummary;