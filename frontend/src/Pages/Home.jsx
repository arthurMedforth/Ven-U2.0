import React, {useState} from "react";
import { useEffect } from "react";
import Banner from "../Components/Banner";
import VenueCard from "../Components/VenueCard";
import methods from "../Lib/actCitingClient.js"
import '../Styles/home.css'

const Home = () => {
    const [isLoaded, setisLoaded] = useState(true)
    const [venues, setVenues] = useState(
        [
            {venue_city: "BRISTOL", venue_name: "Lakota", venue_address: "Temple Meads", capacity: "350"},
            {venue_city: "LONDON", venue_name: "fabric", venue_address: "Charterhouse St", capacity: "500"},
            {venue_city: "LONDON", venue_name: "Phonox", venue_address: "418 Brixton Road", capacity: "350"},
            {venue_city: "BERLIN", venue_name: "Berghain", venue_address: "Wriezener", capacity: "500"},
            {venue_city: "BERLIN", venue_name: "Razzmataz", venue_address: "Almogàvers", capacity: "700"},
            {venue_city: "MADRID", venue_name: "Ochoymedio", venue_address: "Barceló", capacity: "350"},
            {venue_city: "NEW YORK", venue_name: "Exchange", venue_address: "W 41st Street", capacity: "350"},
            {venue_city: "LOS ANGELES", venue_name: "Mission", venue_address: "16th East Street", capacity: "300"},
            
        ]
    )

    useEffect(() => {
        // console.log("Fetching venues from database...")
        // const getAllVenueData = async() => {
        //     const venues = await methods.retrieveAllVenues()
        //     console.log('Here is the returned JSON')
        //     console.log(venues)
        //     setVenues(venues)
        //     setisLoaded(true)
        // }
        // getAllVenueData()

    }, [])

    
    return (
        <>
            <Banner></Banner>
            <div className="filter-container">
                <h1> Filter By</h1>
            </div>
            {isLoaded &&
            <div className="venue-cards">
                {venues.map((venue) => (       
                    <VenueCard city={venue.venue_city} name={venue.venue_name} address={venue.venue_address} capacity={venue.capacity}></VenueCard>
                ))}
            </div>
            } 
        </>
    )
}

export default Home;
