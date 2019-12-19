1. How many records does each airline class have? Use $project to show result as { class: "Z", total: 999 } 

db.airlines.aggregate([{$group: {_id: "$class", total: {$sum : 1}}}, { $project: { _id: 0, "class": "$_id", "total": "$total" }}])
Result:
{ "class" : "L", "total" : 23123 }
{ "class" : "G", "total" : 17499 }
{ "class" : "F", "total" : 140343 }
{ "class" : "P", "total" : 5683 }

2. What are the top 3 destination cities outside of the United States (destCountry field, not included) with the highest average passengers count? Show result as { "avgPassengers" : 2312.380, "city" : "Minsk, Belarus" } 

db.airlines.aggregate( [ { $match: { $and: [ { originCountry: "United States" }, { destCountry: { $ne: "United States" } } ] } }, { $group: { _id: "$destCity", averagePassengers: { $avg: "$passengers"} } }, { $sort: { averagePassengers: -1 } }, { $limit: 3 }, { $project: { "city": "$_id", _id: 0, averagePassengers: 1 }} ] )

Result:
{ "averagePassengers" : 8052.380952380952, "city" : "Abu Dhabi, United Arab Emirates" }
{ "averagePassengers" : 7176.596638655462, "city" : "Dubai, United Arab Emirates" }
{ "averagePassengers" : 7103.333333333333, "city" : "Guangzhou, China" } 

3. Which carriers provide flights to Latvia (destCountry)? Show result as one document { "_id" : "Latvia", "carriers" : [ "carrier1", " carrier2", …] } 

db.airlines.aggregate([ { $match: {destCountry: "Latvia"} }, { $group: { _id: { destCountry: "$destCountry", carrier:  "$carrier"} }}, { $group: { _id: "$_id.destCountry", carriers: { $push: "$_id.carrier" } } } ])

Result:
{ "_id" : "Latvia", "carriers" : [ "Uzbekistan Airways", "JetClub AG", "Blue Jet SP Z o o" ] }

4. What are the carriers which flue the most number of passengers from the United State to either Greece, Italy or Spain? Find top 10 carriers, but provide the last 7 carriers (do not include the first 3). Show result as { "_id" : "<carrier>", "total" : 999} 

db.airlines.aggregate( [ { $match: { $and: [ { originCountry: "United States" }, { destCountry: { $in: [ "Greece", "Italy", "Spain" ] } } ] } }, { $group: { _id: "$carrier", numOfPassengers: { $sum: "$passengers"}}},{ $sort: { numOfPassengers: -1 } }, { $limit: 10 }, { $skip: 3 } ])

Result:
{ "_id" : "Compagnia Aerea Italiana", "numOfPassengers" : 280256 }
{ "_id" : "United Air Lines Inc.", "numOfPassengers" : 229936 }
{ "_id" : "Emirates", "numOfPassengers" : 100903 }
{ "_id" : "Air Europa", "numOfPassengers" : 94968 }
{ "_id" : "Meridiana S.p.A", "numOfPassengers" : 20308 }
{ "_id" : "Norwegian Air Shuttle ASA", "numOfPassengers" : 13344 }
{ "_id" : "VistaJet Limited", "numOfPassengers" : 183 }

5. Find the city (originCity) with the highest sum of passengers for each state (originState) of the United States (originCountry). Provide the city for the first 5 states ordered by state alphabetically (you should see the city for Alaska, Arizona and etc). Show result as { "totalPassengers" : 999, "location" : { "state" : "abc", "city" : "xyz" } } 

db.airlines.aggregate( [ { $match: { originCountry: "United States" } }, { $group: { _id: { city: "$originCity", state: "$originState" }, numOfPassengers: { $sum: "$passengers" } } }, { $sort: { "_id.state": 1, numOfPassengers: -1 } }, { $group: { _id: { state: "$_id.state" }, totalPassengers: { $first: "$numOfPassengers" }, city: { $first: '$_id.city' } } }, { $sort: {_id: 1} }, { $project: { _id: 0, "totalPassengers": 1, "location": { "state": "$_id.state", "city": "$city" } } }, { $limit: 5 } ] )

Result:
{ "totalPassengers" : 760120, "location" : { "state" : "Alabama", "city" : "Birmingham, AL" } }
{ "totalPassengers" : 1472404, "location" : { "state" : "Alaska", "city" : "Anchorage, AK" } }
{ "totalPassengers" : 13152753, "location" : { "state" : "Arizona", "city" : "Phoenix, AZ" } }
{ "totalPassengers" : 571452, "location" : { "state" : "Arkansas", "city" : "Little Rock, AR" } }
{ "totalPassengers" : 23701556, "location" : { "state" : "California", "city" : "Los Angeles, CA" } }
