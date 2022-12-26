import React from "react";
import bannergif from "../Resources/fredagain2.gif"
import '../Styles/banner.css'

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <h5 className='banner-slogan'> <span>MORE</span> <span>THAN</span> <span>JUST</span> <span>A</span> <span>TICKETING</span> <span>COMPANY.</span></h5>
        <br></br>
        <img className="banner-image" src={bannergif}></img>
        <p className="banner-text">Use Ven-U to choose the venue for you.</p>
      </div>
    </div>
  );
};

export default Banner;
