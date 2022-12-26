import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VenueCard from "../Components/VenueCard";
import NavBtn from '../Components/NavBtn';
import '../Styles/account.css'

const MyAccount = (props) => {

    const navigate = useNavigate();
    const [isLoaded, setIsLoaded,] = useState(false);
    const [venues, setVenues] = useState(
        [
            { venue_city: "BRISTOL", venue_name: "Lakota", venue_address: "Temple Meads", capacity: "350" },
            { venue_city: "LONDON", venue_name: "fabric", venue_address: "Charterhouse St", capacity: "500" },

        ]
    )

    useEffect(() => {
        if (!props.token) {
            navigate(`/Login`)
        } else {
            setIsLoaded(true)
        }
    }, [])

    if (!isLoaded) {
        return <div className='loader App'></div>
    }

    return (
        <body>
            <div className='Summary'>
                <h1>My account summary</h1>


                <div class="profile-title">
                    <h2>Profile</h2>
                    <div class="profile">
                        <pr>First Name </pr>
                        <p>{props.token.first_name}</p>

                        <pr>Last Name </pr>
                        <p>{props.token.last_name}</p>

                        <pr>My Email</pr>
                        <p>{props.token.user_email}</p>

                        <pr>My ID</pr>
                        <p>{props.token.users_id}</p>

                    </div>
                </div>

                <div class="cards">
                    <h2>My Venues</h2>
                    {isLoaded &&
                        <div className="my-cards">
                            {venues.map((venue) => (
                                <VenueCard city={venue.venue_city} name={venue.venue_name} address={venue.venue_address} capacity={venue.capacity}></VenueCard>
                            ))}


                        </div>
                    }
                </div>
                <br></br>




            </div>
            <br></br>
            <br></br>
            <br></br>
            <NavBtn link={"Login"} name={"Logout"}></NavBtn>
        </body>


    )

}
export default MyAccount;