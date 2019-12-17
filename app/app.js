const file = './news.json';
const fs = require('fs');
const util = require('util');
const express = require('express');
const app = express();
const port = 3000;

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

app.get('/error', (req, res) => {
    throw new Error('error occurs while running route handlers')
})

app.get('/', (req, res, next) => {
    fs.readFile('file-does-not-exist', (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    })
})

app.get('/news', (req, res) => {
    readFileAsync(file)
        .then(content => res.send(content))
        .catch(err => { console.error(err) });

});

app.get('/news/:id', (req, res) => {
    readFileAsync(file)
        .then(content => {
            const articles = JSON.parse(content);
            res.send(articles.articles[req.params.id])
        }
        )
        .catch(err => { console.error(err) });

});

app.use(express.json());

app.post('/news/', (req, res) => {
    const el = req.body;
    readFileAsync(file)
        .then(content => {
            const result = JSON.parse(content);
            result.articles.push(el);
            res.status(201).send();
            return writeFileAsync(file, JSON.stringify(result));
        })
        .then(() => { console.log("new item was added successfully") })
        .catch(err => { console.error(err) });

});

app.put('/news/:id', (req, res) => {
    const el = req.body;
    readFileAsync(file)
        .then(content => {
            const result = JSON.parse(content);
            result.articles[req.params.id] = el;
            res.status(201).send();
            return writeFileAsync(file, JSON.stringify(result));
        })
        .then(() => { console.log("item was modified successfully") })
        .catch(err => { console.error(err) });

});

app.delete('/news/:id', (req, res) => {
    readFileAsync(file)
        .then(content => {
            const result = JSON.parse(content);
            result.articles = result.articles.filter(item => item.id !== req.params.id);
            res.status(201).send();
            return writeFileAsync(file, JSON.stringify(result));
        })
        .then(() => { console.log("item was deleted successfully") })
        .catch(err => { console.error(err) });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use((req, res) => {
    app.render('index', { title: 'Error occurs wthile file reading' },
        (err, html) => {
            console.log(html);
            res.send(html);
        })
})
