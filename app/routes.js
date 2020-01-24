const News = require("./shema");
const generateUniqueId = require("generate-unique-id");

module.exports = function (app) {
    app.get('/', (req, res) => {
        News.find({})
            .then(() => res.redirect("/news"))
            .catch(err => console.log(err))
    });

    app.get('/news', (req, res) => {
        console.log("news");
        News.find({})
            .then(data => res.send(data))
            .catch(err => console.log(err))
    });

    app.get('/news/:id', (req, res) => {
        const id = req.params.id;
        News.findOne({ id })
            .then(data => res.send(data))
            .catch(err => console.log(err))
    });

    app.post('/news', (req, res) => {
        if (!req.body) return res.sendStatus(400);

        const el = {
            id: generateUniqueId(),
            ...req.body
        }
        News.create(el)
            .then(() => console.log(`News with id ${el.id} was posted successfully`))
            .catch(err => console.log(err))
    });

    app.put('/news/:id', (req, res) => {
        const id = req.params.id;
        if (!req.body) return res.sendStatus(400);

        const el = {
            id,
            ...req.body
        }
        News.updateOne({ id }, el)
            .then(() => console.log(`News with id ${id} was updated successfully`))
            .catch(err => console.log(err))
    });

    app.delete('/news/:id', (req, res) => {
        const id = req.params.id;
        News.deleteOne({ id })
            .then(() => { console.log(`News with id ${id} was deleted successfully`) })
            .catch(err => { console.error(err) });
    });
}
