import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'


const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)

// GET new skill form /skills/new
router.get('/new', skillsCtrl.new)

export {
  router
}

