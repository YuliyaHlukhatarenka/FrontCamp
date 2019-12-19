1. db.restaurants.find({ borough: "Queens", cuisine: "Chinese" }).count()
728
2. db.restaurants.find( {}, { _id: 1 } ).sort( { "grades.score": -1  } ).limit(1)
{ "_id" : ObjectId("5dcbb1af6e5fe7a1d90eb4fb") }
3. > db.restaurants.updateMany( { borough: "Manhattan"}, { $push: { grades: { date: ISODate(), grade: "A", score: 7 } } } )
{ "acknowledged" : true, "matchedCount" : 10259, "modifiedCount" : 10259 }
4. db.restaurants.find( { "grades.8.score": { $lt: 7 } }, { _id: 0, name: 1} )
{ "name" : "Silver Krust West Indian Restaurant" }
{ "name" : "Pure Food" }
5. db.restaurants.find( { cuisine: "Seafood",  grades: { $elemMatch: { date: { $gt: ISODate("2014-02-01T00:00:00"), $lt: ISODate("2014-03-01T00:00:00")}, grade: "B"} } }, { borough: 1 } )
{ "_id" : ObjectId("5dcbb1af6e5fe7a1d90ee8f3"), "borough" : "Bronx" }
{ "_id" : ObjectId("5dcbb1af6e5fe7a1d90eeb6c"), "borough" : "Manhattan" }
