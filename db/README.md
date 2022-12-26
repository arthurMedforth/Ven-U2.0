# Database for Ven-U team

Use the feature/VenU_Database branch for up to date code

`git checkout feature/VenU_Database`

docker-compose.yaml sets up the express server and postgres db containers on Docker and runs scripts to create tables and populate with dummy data

The URL endpoints for the API team are defined in app/server.js line 20 

To initialise the multi-container in Docker run the following sequentially in the command line:

`docker compose build` <br>
`docker compose up`

If you've had previous containers running or created using the same ports may need to delete them directly in the Docker GUI and run `docker compose down`