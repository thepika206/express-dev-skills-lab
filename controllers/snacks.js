//import the data model for snacks
import { Snack } from '../models/snack.js'

//first function to view the index list of snacks, use the find method and pass the result to view as snacks
function index(req,res){
  Snack.find({})
  .then(snacks =>{
    console.log('snacks here', snacks )
    res.render('snacks/index',{
      snacks: snacks
    })
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/')
  })
}

function newSnack(req,res){
  res.render('snacks/new')
}

function create(req,res){
  Snack.create(req.body)
  .then(snack => {
    res.redirect('/snacks')
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/')
  })
}

function update(req,res){
  Snack.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(snack => {
    res.redirect(`/snacks/${snack._id}`)
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/')
  })
}

function show(req,res){
  Snack.findById(req.params.id)
  .then(snack => {
    res.render('snacks/show', {
      snack: snack
    })
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/')
  })
}

function edit(req,res){//similar to handling of show, but a new view
  Snack.findById(req.params.id)
  .then(snack => {
    res.render('snacks/edit', {
      snack: snack
    })
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/')
  })
}

function deleteSnack(req,res){
  Snack.findByIdAndDelete(req.params.id)
  .then(snack => {
    res.redirect('/snacks')
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/')
  })
}




//export functions

export {
  index,
  create,
  newSnack as new,
  show,
  deleteSnack as delete,
  edit,
  update
}