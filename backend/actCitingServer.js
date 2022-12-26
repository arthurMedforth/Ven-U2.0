const express = require('express')
const app = express()
const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allows same-site origin - for use locally with following FETCH session
app.use(function(request, response, next) {
    if (request.headers.origin) {
        response.header('Access-Control-Allow-Origin', '*')
        response.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization')
        response.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE')
        if (request.method === 'OPTIONS') return response.sendStatus(200)
    }
    next()
})

app.post('/New-Venue', async (req, res) => {
    console.log('Server handling request...')

    const venue_data = {
        venue_name: req.body.name,
        venue_city: req.body.city,
        venue_address: req.body.address,
        venue_postcode: req.body.postcode,
        venue_capacity: req.body.capacity,
        venue_email: req.body.email,
        venue_start_date: req.body.start_date,
        venue_end_date: req.body.end_date,
        venue_imageURL: req.body.image
    }

    console.log(venue_data.venue_start_date)
    
    await fetch("http://localhost:8080/venues", {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(venue_data)
    })
    .then(response => {
        if (response.status !== 200) {
            console.log(`Something went wrong: http-status=${response.status}`)
            return
        } 
        response.text()
            .then(venueId => {
                console.log(venueId)
                res.send(venueId)
            })
    }, error => {
        console.log(`There was an error: error=${error}`)
    })

})

app.get('/View-Venue/:VenueName', async (req, res) => {
    // Retrieve venue from DB based on venue name
    const venueName = req.params.VenueName
    await fetch("http://localhost:8080/venues/" + venueName, {
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
         response.json()
             .then(venueData => {
                 console.log(`This is the data on ${venueData}`)
                 res.send(venueData)
             })
     }, error => {
         console.log(`There was an error: error=${error}`)
     })

})

app.get('/All-Venues', async (req, res) => {

    console.log("Fetching all venues")
    
    await fetch("http://localhost:8080/venues", {
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
         response.json()
             .then(allVenueData => {
                console.log(allVenueData)
                res.json(allVenueData)
             })
     }, error => {
         console.log(`There was an error: error=${error}`)
     })
   
})

//////////////// Server API requests to PostgresSQL from beyond this point //////////////
function storeVenueDataChecker() {
    return "Success"
}

function retrieveVenueDataChecker() {
    return "Success"
}


function storeVenueData(venueData) {
    const storeInSQL = venueData
    return storeInSQL
    // Fetch (POST) request to PostgresSQL to store venue data
    // Fetch request will be a post with the venue data stored in the body
}

function retrieveVenueData(venueNameDB) {
    let sqlDataBase = [
        {
            venueName: "The 100 Club",
            capacity: "100",
            address: "Century House, 100 Oxford St, London W1D 1LL",
            geoLocation: "Oxford Street",
            imageUrl: "https://lh3.googleusercontent.com/p/AF1QipP3PbNE2MaqPy1BhUneqQGxDXnqtqyX1D-GW5VE=s1360-w1360-h1020",
            email: "blanksondaniel@yahoo.com",
            fromDate: "041022",
            endDate: "010123"
        },
        {
            venueName: "The 200 Club",
            capacity: "200",
            address: "Century House, 200 Oxford St, London W1D 1LL",
            geoLocation: "Oxford Street",
            imageUrl: "https://lh3.googleusercontent.com/p/AF1QipP3PbNE2MaqPy1BhUneqQGxDXnqtqyX1D-GW5VE=s1360-w1360-h1020",
            email: "blanksondaniel@yahoo.com",
            fromDate: "041022",
            endDate: "010123"
        }
        ]

    for (let i = 0; i < sqlDataBase.length; i++) {
        if (sqlDataBase[i].venueName === venueNameDB) {
            return JSON.stringify(sqlDataBase[i])
        }
    }
    // return sqlDataBase

    // Fetch (GET) request to PostgresSQL to retrieve specific venue data
    // Fetch request will be a get 
}




const PORT = 3001
app.listen(PORT, () => {
    console.log(`Express server up on port ${PORT}`)
})
