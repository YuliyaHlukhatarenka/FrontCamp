const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	id: String,
	source: Object,
	author: String,
	title: String,
	description: String,
	url: String,
	urlToImage: String,
	publishedAt: String,
	content: String,
});

const News = mongoose.model("news", schema);

module.exports = News;