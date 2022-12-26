import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import image1 from '../Resources/venue_one.jpg'
import image2 from '../Resources/venue_two.jpg'
import methods from "../Lib/actCitingClient.js"
import '../Styles/form.css'

const AddNewVenue = (props) => {

  const defaultData = {
    name: "",
    city: "",
    address: "",
    postcode: "",
    start_date: "",
    end_date: "",
    capacity: "",
    cost: "",
    email: "",
  };

  const { register, watch, handleSubmit, formState: { errors } } = useForm(defaultData);
  const [data, setData] = useState();

  const submitForm = (data) => {
    setData(data);
    const dbResult = methods.sendNewVenue(data)
    if (dbResult){
      alert('You have submitted a new venue!');
    }else{
      alert("Submission failed")
    }
  }

  useEffect(() => {
    console.log("data", data)
      
  }, [data])


  const watchOwnImage = watch("OwnImage", false);
  const watchDefaultImages = watch("DefaultImages", false);
  const watchSelectedImages = watch(["DefaultImages", "image"]);

  const renderselectedImage = () => {
    if (watchSelectedImages[1] === '../Resources/venue_one.jpg') {
      return <img src={image1} alt="venueimage" width={130} height={150}></img>
    }
    else if (watchSelectedImages[1] === '../Resources/venue_two.jpg') {
      return <img src={image2} alt="venueimage" width={130} height={150}></img>
    }
    else {
      return
    }
  }

  if (!props.token) {
    return (
    <body>
      <h1> Please log in before adding a venue </h1>
      <p> Navigate to the my account page to log in </p>
    </body>
    )
  } 

  return (
    <div className='content-container'>
      <form onSubmit={handleSubmit((data) => {submitForm(data)})}>

        <div className='form'>
          <h1 className='orange-gradient'>Add New Venue</h1>
          <br />

          <input {...register('name', { required: "Name is required!", maxLength: { value: 30, message: 'Maximum length: 30 characters' } })} placeholder="Venue Name*" />
          <ErrorMessage errors={errors} name="name" as="alert" />
          <br />

          <input {...register('city', { required: "City is required!", maxLength: { value: 30, message: 'Maximum length: 30 characters' } })} placeholder="Venue City*" />
          <ErrorMessage errors={errors} name="city" as="alert" />
          <br />

          <input {...register('address', { required: "Address is required!", maxLength: { value: 100, message: 'Maximum length: 100 characters' } })} placeholder="Venue Address*" />
          <ErrorMessage errors={errors} name="address" as="alert" />
          <br />

          <input {...register('postcode', { required: "Postcode is required!", pattern: { value: /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/, message: 'Please enter the correct format' } })} placeholder="Postcode*" as="alert" />
          <ErrorMessage errors={errors} name="postcode" as="alert" />
          <br />

          <input {...register('email', { required: "Email is required!", pattern: { value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Please enter the correct format' } })} placeholder="Email*" />
          <ErrorMessage errors={errors} name="email" as="alert" />
          <br />

          <input {...register('capacity', { required: "Capacity is required!", pattern: { value: /^\d+$/, message: 'Please enter a number' } })} placeholder="Capacity*" />
          <ErrorMessage errors={errors} name="capacity" as="alert" />
          <br />

          <input {...register('cost', { required: "Cost is required!", pattern: { value: /^\d+$/, message: 'Please enter a number' } })} placeholder="Price*" />
          <ErrorMessage errors={errors} name="cost" as="alert" />
          <br />

          <input {...register('start_date', { valueAsDate: true })} placeholder="Start Date: yyyy/mm/dd" />
          <br />

          <input {...register('end_date', { valueAsDate: true })} placeholder="End Date: yyyy/mm/dd" />
          <br />

          <br />
          <label className='label'>Upload image</label>
          <input className="checkbox" type="checkbox" {...register("OwnImage")} />
          {watchOwnImage && (
            <>
              <input {...register("image", { required: "URL is required!" })} placeholder="URL" />
              <ErrorMessage errors={errors} name="image" />
            </>
          )}

          <label className='label'>Default image</label>
          <br />
          <input className="checkbox" type="checkbox" {...register("DefaultImages")} />
          {watchDefaultImages && (
            <>
              <select className='select' {...register("image")}>
                <option className='option' value='../Resources/venue_one.jpg'>Image 1</option>
                <option className='option' value='../Resources/venue_two.jpg'>Image 2</option>
              </select>
              <br />
              <br />
              {renderselectedImage()}
            </>
          )}

          <br />
          <input className="form-submit-btn" type="submit" value="Submit" />
        </div>
      </form>
    </div >
  )
}
export default AddNewVenue;