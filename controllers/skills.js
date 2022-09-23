// import the skills data
import { Skill } from '../models/skill.js'

function index (req, res) {
  Skill.find({})
  .then(skills => {//skills rep the result of the query
    console.log(skills)
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/')
  })
}
function newSkill (req, res) {
  res.render('skills/new')
}

function create (req,res){
  req.body.acquired = !!req.body.acquired //this sets the aquired property to false as a "default", my new skill submission page doesn't mention it.
  console.log(req.body)
  Skill.create(req.body)
  .then(skill =>{
    res.redirect('/skills')
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req,res){
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res){
  Skill.findByIdAndDelete(req.params.id)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/skills')
  })
}

function edit(req, res){
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/edit', {
      skill: skill
    })
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/skills')
  })
}

function update(req,res){
  console.log(req.body, 'test body')
  req.body.acquired = !!req.body.acquired
  Skill.findByIdAndUpdate(req.params.id, req.body, 
  {new: true})
  .then(skill => {
    res.redirect(`/skills/${skill._id}`)
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
  edit,
  update
}
