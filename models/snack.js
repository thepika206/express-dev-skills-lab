import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
	
const snackSchema = new Schema({
  description: String,
  quantity: Number,
})

// Compile the schema into a model and export it

const Snack = mongoose.model('Snack', snackSchema)

export {
  Snack
}