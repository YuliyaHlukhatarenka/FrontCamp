const News = require("./shema");

module.exports = function(app) {
    app.get('/error', (req, res) => {
        throw new Error('error occurs while running route handlers')
    })

    app.get('/', (req, res, next) => {
        News.find(function (err, news) {
            if (err) throw err;
            res.redirect("/news");
        });
    });

    app.get('/news', (req, res) => {
        console.log("news");
       News.find({})
       .then(data => { res.send(data); console.log(data);})
       .catch(err => console.log(err))
    });



    app.get('/news/:id', (req, res) => {
        const id = req.params.id;
        News.findOne({
            id
        },
         (err, news) => {
                if (err) throw err;
                res.send(news);
                
            }
        );
    });

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
}
