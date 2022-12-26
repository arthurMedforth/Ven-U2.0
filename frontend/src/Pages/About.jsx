import React from "react";
import '../Styles/about.css'

const About = () => {

    return  (
        <body className="about-container">
            <h1 className="about-title"> We are Ven-U </h1>
            <div className="about-text-container">
                <p className="about-text"> Welcome to Ven-U, your music venue hosting website! 
                                            We are a one-stop platform for finding and booking live music venues across the country. </p>
                <br></br>
                <p className="about-text">Our website features a wide range of venues, 
                                            from intimate bars and clubs to larger concert halls and amphitheaters. 
                                            No matter what type of venue you would like to host, we have a site to suit your needs.</p>
                <br></br>
                <p className="about-text">In addition to providing a comprehensive directory of live music venues, 
                                            we also offer a range of tools and resources to help you manage your venue. 
                                            Our booking system allows event planners to easily compare prices, capacities, and availability, 
                                            making it easy to find the perfect venue for your event.</p>
                <br></br>
                <p className="about-text">We are passionate about supporting live music and are dedicated to helping artists and event planners 
                                            find the perfect venues for their performances and events. 
                                            Thank you for choosing us as your go-to resource for live music venue booking.</p>
                
            </div>
            
        </body>
    )
}

export default About;