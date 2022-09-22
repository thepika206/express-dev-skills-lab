import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'


const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)

// GET new skill form /skills/new
router.get('/new', skillsCtrl.new)

// GET edit skill 
router.get('/:id', skillsCtrl.show)

// POST create skill /skills/create
router.post('/create', skillsCtrl.create)

// POST override to DELETE
router.delete('/:id', skillsCtrl.delete)

export {
  router
}

