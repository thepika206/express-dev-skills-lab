// import the skills data
import { Skill } from '../models/skill.js'

function index (req, res) {
  Skill.find({})
  .then(skills => {//skills rep the result of the query
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error => {//if there's an error console.log it and redirect home
    console.log(error)
    res.redirect('/')
  })
}

export {
  index
}

console.log('controllers/skill.js connected');