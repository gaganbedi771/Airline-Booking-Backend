Models: Airplane, Flight, Airport, City

Airplane can belong to many flights
Flight has only one Airplane

City has many Airports
Airport belong to one city



Airplane
-id
-model_number
-capacity

Flights
- id
-flight_number
-src_airport_id
-dest_airport_id 
-departure
-arrival
-airplane_id
-total_seats
-price

City
-id
-name

Airport
-id
-name
-city_id
-address
