const express = require('express')
const app = express()
const dbHelper = require('./database-helper')
const PORT = 3001
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

// Hello-world type root url
app.get('/', (request, response) => {
    response.json({ info: 'Ven-U Postgres and Express root URL' })
})

// Send data from front-end to DB
app.post('/New-Venue', (req, res) => {
    const dbResponse =  dbHelper.createVenue(req, res)
})

// Retrieve a specific venue by sending the hyphenated venue name
// as a param to form a query DB-side
app.get('/View-Venue/:venue_name', (req, res) => {
    const dbResponse = dbHelper.getVenueByName(req, res)
})

// Retrieve all venues from DB
// Consider whether we need to truncate data send (security pov)
app.get('/All-Venues', (req, res) => {
    const dbResponse = dbHelper.getVenues(req, res)
})

// WIP adding Daniel functionality

app.listen(PORT, () => {
    console.log(`Express server up on port ${PORT}`)
})
