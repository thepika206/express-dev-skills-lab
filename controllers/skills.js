// import the skills data
import { Skill } from '../models/skill.js'

function index (req, res) {
  Skill.find({})
  .then(skills => {//skills rep the result of the query
    res.render('skills/index', {
      skills: skills, title: 'Express Dev Skills'
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
  Skill.create(req.body)
  .then(skill =>{
    res.redirect('/skills')
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
}
