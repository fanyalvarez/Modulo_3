const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
	name:{
		type: String,
		required: true,
		trim: true,
		maxlength: 50,
		minlength: 1,
	}
})

module.exports= {
	model: mongoose.model("Category", schema),
	schema
}