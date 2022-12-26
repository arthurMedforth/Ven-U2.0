const sendNewVenue = async(data) => {
    const dbResponseBool = await createNewVenue(data)
    console.log('Venue creation successful:',dbResponseBool)
}

async function createNewVenue(data) {
    const venue_data = {
        venue_name: data.name,
        venue_city: data.city,
        venue_address: data.address,
        venue_postcode: data.postcode,
        venue_capacity: data.capacity,
        venue_email: data.email,
        venue_start_date: data.start_date,
        venue_end_date: data.end_date,
        venue_imageURL: data.image
    }
    const result = await fetch("http://localhost:3001/New-Venue", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(venue_data)
    })
    .then(response => {
        if (response.status !== 200) {
            console.log(`Something went wrong: http-status=${response.status}`)
            return
        }
        const successFlag = true
        console.log(successFlag)
        return successFlag

    }, error => {
        console.log(`There was an error: error=${error}`)
    })
    return JSON.stringify(result)
}

async function retrieveVenue(venueName) {
    const result = await fetch("http://localhost:3001/View-Venue/" + venueName, {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        headers: {
            'Content-Type': 'application/json'
       }
    })
    .then(response => {
        if (response.status !== 200) {
            console.log(`Something went wrong: http-status=${response.status}`)
            return
        }
        return response.json()
        
    }, error => {
        console.log(`There was an error: error=${error}`)
    })
    return result
 }

 async function retrieveAllVenues() {
    console.log("In actCitingClient")
    const result = await fetch("http://localhost:3001/All-Venues", {
         method: 'GET',
         mode: 'cors',
         cache: 'default',
         headers: {
             'Content-Type': 'application/json'
         }
     })
     .then(response => {
        if (response.status !== 200) {
            console.log(`Something went wrong: http-status=${response.status}`)
            return
        }
        return response.json()
             
     }, error => {
         console.log(`There was an error: error=${error}`)
     })
     return result
 }

 async function loginUser(credentials) {
    return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

 const methods = {retrieveVenue, retrieveAllVenues, loginUser, sendNewVenue}

 export default methods
