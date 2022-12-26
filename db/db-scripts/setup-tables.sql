-- ADDING TABLES

CREATE TABLE venues(
   venue_id INTEGER GENERATED ALWAYS AS IDENTITY,
   venue_name VARCHAR(255) NOT NULL,
   venue_city VARCHAR(255) NOT NULL,
   venue_address VARCHAR(255) NOT NULL,
   venue_postcode VARCHAR(10) NOT NULL,
   venue_capacity INT NOT NULL,
   venue_email VARCHAR(225) NOT NULL,
   venue_start_date DATE,
   venue_end_date DATE,
   venue_imageURL VARCHAR(255) NULL,
   PRIMARY KEY(venue_id)
);

CREATE TABLE venue_owners(
   venue_owner_id INTEGER GENERATED ALWAYS AS IDENTITY,
   owner_name VARCHAR(255) NOT NULL,
   phone_number VARCHAR(20) NULL,
   email VARCHAR(255) NULL,
   PRIMARY KEY(venue_owner_id)
);

-- ADDING FOREING KEY CONSTRAINTS 

-- Venues

ALTER TABLE venues
ADD CONSTRAINT fk_owner_id
FOREIGN KEY (venue_owner_id)
REFERENCES venue_owners(venue_owner_id)
ON UPDATE CASCADE
ON DELETE CASCADE;

/*
ALTER TABLE venues
ADD CONSTRAINT fk_venue_owner_id 
FOREIGN KEY (venue_owner_id)
REFERENCES venue_owners(venue_owner_id);

ALTER TABLE venue_owners
ADD CONSTRAINT fk_venue_id
FOREIGN KEY (venue_id)
REFERENCES venues(venue_id);
*/
