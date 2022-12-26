

-- INSERT INTO venues(venue_name, street_address, city, postcode, email, capacity, from_date, end_date, img_url) 
--     VALUES ('AO Arena', 'Victoria Station Approach', 'Manchester', 'M31AR', 'contactus@ao-arena.com', 21000, '2023-01-01', '2024-01-01', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Manchester_Arena_exterior%2C_%283%29_May19.jpg/1920px-Manchester_Arena_exterior%2C_%283%29_May19.jpg');


-- INSERT INTO venues(venue_name, street_address, city, postcode, email, capacity, from_date, end_date, img_url) 
--     VALUES ('The 02', 'Peninsula Square', 'London', 'SE100DX', 'test@test.com', 20000, '2023-02-02', '2024-02-02', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/O2_Arena.jpg/1280px-O2_Arena.jpg');

INSERT INTO venues(venue_name, venue_city, venue_address, venue_postcode, venue_capacity, venue_email, venue_start_date, venue_end_date, venue_imageurl)
    VALUES ('The 02', 'Peninsula Square', 'London', 'SE100DX',  20000, 'test@test.com', '2023-02-02', '2024-02-02', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/O2_Arena.jpg/1280px-O2_Arena.jpg');

INSERT INTO venue_owners(owner_name, phone_number, email) 
    VALUES ('Bob', '+447435628664', 'bobby.b@bob.com');

INSERT INTO venue_owners(owner_name, phone_number, email) 
    VALUES ('Pob', '+447849573857', 'pobby.p@pob.com');


/*
INSERT INTO venues(venue_owner_id, venue_name, street_address, city, postcode, capacity) 
    VALUES (1, 'Arena 1', '123 Fake Street', 'Manchester', 'M321AB', '1000');


INSERT INTO venues(venue_owner_id, venue_name, street_address, city, postcode, capacity) 
    VALUES (2, 'Arena 2', '321 Fake Street', 'London', 'M214AB', '5000');


INSERT INTO venue_owners(venue_id, owner_name, phone_number, email) 
    VALUES (1, 'Bob', '+447435628664', 'bobby.b@bob.com');

INSERT INTO venue_owners(venue_id, owner_name, phone_number, email) 
    VALUES (2, 'Pob', '+447849573857', 'pobby.p@pob.com');
*/