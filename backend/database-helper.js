const Pool = require('pg').Pool
require('dotenv').config();

console.log('Create pool with defaults');
const pool = new Pool({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    max: 10,
    idleTimeoutMillis: 60000,
    connectionTimeoutMillis: 10000,
})

const getVenues = (request, response) => {
    console.log('getVenues')
    pool.query(
        'SELECT * FROM venues ORDER BY venue_id ASC',
        (error, results) => {
            if (error) {
                console.error('getVenues error:', error)
                response.status(500).json(error)
            }
            else {
                response.status(200).json(results.rows)
            }
        }
    )
};

const getVenueById = (request, response) => {
    const venue_id = parseInt(request.params.id)
    console.log(`getVenueById: venue_id=${venue_id}`)

    pool.query(
        'SELECT * FROM venues WHERE venue_id = $1',
        [venue_id], (error, results) => {
            if (error) {
                console.error('getVenueById error:', error)
                response.status(500).json(error)
            } else {
                response.status(200).json(results.rows)
            }
        }
    )
};

const getVenueByName = (request, response) => {
    let venue_name = request.params.venue_name
    venue_name = venue_name.replace(/-/g, ' ')
    console.log(`getVenueByName: venue_name=${venue_name}`)

    pool.query(
        'SELECT * FROM venues WHERE venue_name = $1',
        [venue_name], (error, results) => {
            if (error) {
                console.error('getVenueByName error:', error)
                response.status(500).json(error)
            } else {
                response.status(200).json(results.rows)
            }
        }
    )
};

const createVenue = (request, response) => {
    console.log('made it here')
    const { venue_name, venue_city, venue_address, venue_postcode, venue_capacity, venue_email, venue_start_date, venue_end_date, venue_imageURL } = request.body
    console.log(`createVenue: venue_name=${venue_name}, venue_address=${venue_address}, venue_city=${venue_city},
    venue_postcode=${venue_postcode}, venue_email=${venue_email}, venue_capacity=${venue_capacity}, venue_start_date=${venue_start_date}, venue_end_date=${venue_end_date}, venue_imageURL=${venue_imageURL}`)

    pool.query(
        'INSERT INTO venues (venue_name, venue_city, venue_address, venue_postcode, venue_capacity, venue_email, venue_start_date, venue_end_date, venue_imageURL) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING venue_id',
        [venue_name, venue_city, venue_address, venue_postcode, venue_capacity, venue_email, venue_start_date, venue_end_date, venue_imageURL ],
        (error, results) => {
            if (error) {
                console.error('createVenue error:', error)
                response.status(500).json(error)
            } else {
                // const message = `createVenue: Venue added with ID: ${results.rows[0].venue_id}`;
                const message = "createVenue: Venue added";
                console.log(message)
                response.status(200).send(JSON.stringify(message))
            }
        }
    )
};

const updateVenue = (request, response) => {
    const venue_id = parseInt(request.params.id)
    const { venue_name, street_address, city, postcode, email, capacity, from_date, end_date, img_url } = request.body
    console.log(`updateVenue: venue_id=${venue_id}`)

    pool.query(
        'UPDATE venues SET venue_name = $1, street_address = $2, city =$3, postcode = $4, email = $5, capacity = $6, from_date = $7 , end_date = $8 , img_url = $9 WHERE venue_id = $10',
        [venue_name, street_address, city, postcode, email, capacity, from_date, end_date, img_url],
        (error, results) => {
            if (error) {
                console.error('updateVenue error:', error)
                response.status(500).json(error)
            } else {
                const message = `updateVenue: modified with ID: ${venue_id}`
                console.log(message)
                response.status(200).send(message)
            }
        }
    )
};

const deleteVenue = (request, response) => {
    const venue_id = parseInt(request.params.id)
    console.log(`deleteVenue: venue_id=${venue_id}`)

    pool.query(
        'DELETE FROM venues WHERE venue_id = $1',
        [venue_id],
        (error, results) => {
            if (error) {
                console.error('deleteVenue error:', error)
                response.status(500).json(error)
            } else {
                const message = `deleteVenue: Venue deleted with ID: ${venue_id}`
                console.log(message)
                response.status(200).send(message)
            }
        }
    )
};

const getVenueOwners = (request, response) => {
    console.log('getVenueOwners')
    pool.query(
        'SELECT * FROM venue_owners ORDER BY venue_owner_id ASC',
        (error, results) => {
            if (error) {
                console.error('getVenueOwners error:', error)
                response.status(500).json(error)
            }
            else {
                response.status(200).json(results.rows)
            }
        }
    )
};
const getVenueOwnerById = (request, response) => {
    const venue_owner_id = parseInt(request.params.id)
    console.log(`getVenueOwnerById: venue_owner_id=${venue_owner_id}`)

    pool.query(
        'SELECT * FROM venue_owners WHERE venue_owner_id = $1',
        [venue_owner_id], (error, results) => {
            if (error) {
                console.error('getVenueOwnerById error:', error)
                response.status(500).json(error)
            } else {
                response.status(200).json(results.rows)
            }
        }
    )
};

const createVenueOwner = (request, response) => {
    const { owner_name, phone_number, email } = request.body
    console.log(`createVenueOwner: owner_name=${owner_name}, phone_number=${phone_number}, 
    email=${email}}`)

    pool.query(
        'INSERT INTO venue_owners (owner_name, phone_number, email) VALUES ($1, $2, $3) RETURNING venue_owner_id',
        [owner_name, phone_number, email],
        (error, results) => {
            if (error) {
                console.error('createVenueOwner error:', error)
                response.status(500).json(error)
            } else {
                const message = `createVenueOwner: venue_owner added with ID: ${results.rows[0].venue_owner_id}`
                console.log(message)
                response.status(201).send(message)
            }
        }
    )
};

const updateVenueOwner = (request, response) => {
    const venue_owner_id = parseInt(request.params.id)
    const { owner_name, phone_number, email } = request.body
    console.log(`updateVenue: venue_owner_id=${venue_owner_id}`)

    pool.query(
        'UPDATE venue_owners SET owner_name = $1, phone_number = $2, email = $3 WHERE venue_owner_id = $4',
        [owner_name, phone_number, email, venue_owner_id],
        (error, results) => {
            if (error) {
                console.error('updateVenueOwner error:', error)
                response.status(500).json(error)
            } else {
                const message = `updateVenueOwner: modified with ID: ${venue_owner_id}`
                console.log(message)
                response.status(200).send(message)
            }
        }
    )
};

const deleteVenueOwner = (request, response) => {
    const venue_owner_id = parseInt(request.params.id)
    console.log(`deleteVenueOwner: venue_owner_id=${venue_owner_id}`)

    pool.query(
        'DELETE FROM venue_owners WHERE venue_owner_id = $1',
        [venue_owner_id],
        (error, results) => {
            if (error) {
                console.error('deleteVenueOwner error:', error)
                response.status(500).json(error)
            } else {
                const message = `deleteVenueOwner: venue_owner deleted with ID: ${venue_owner_id}`
                console.log(message)
                response.status(200).send(message)
            }
        }
    )
};

module.exports = {
    getVenues,
    createVenue,
    getVenueById,
    updateVenue,
    deleteVenue,
    getVenueOwners,
    createVenueOwner,
    getVenueOwnerById,
    updateVenueOwner,
    deleteVenueOwner,
    getVenueByName
};
