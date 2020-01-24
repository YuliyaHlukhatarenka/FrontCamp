rename news.json into news.json and import into local MongoDB
mongoimport --db news --collection news --file d:\temp\news.json

Run application:
node app.js

Example of PUT query:
URL: http://localhost:3000/news/5

Headers:
Content-type	application/json

Content Body: {
    "source": {
        "id": "virus",
        "name": "ABC News"
    },
    "author": "The Associated Press",
    "title": "Naval Academy probes possible 'white power' gesture at game",
    "description": "",
    "url": "",
    "urlToImage": "",
    "publishedAt": "2020-01-27T23:27:00Z",
    "content": "coronavirus attack"
}

PUT



