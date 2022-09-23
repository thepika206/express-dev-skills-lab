import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'


const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)

// GET new skill form /skills/new
router.get('/new', skillsCtrl.new)

// GET details of skill 
router.get('/:id', skillsCtrl.show)

// POST create skill /skills/create
router.post('/', skillsCtrl.create)

// POST override to DELETE
router.delete('/:id', skillsCtrl.delete)

// GET edit details
router.get('/:id/edit', skillsCtrl.edit)

//PUT
router.put('/:id', skillsCtrl.update)

export {
  router
}

