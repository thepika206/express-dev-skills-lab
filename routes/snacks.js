//import router
import { Router } from 'express'
//import * frm controller to have functions 
import * as snacksCtrl from '../controllers/snacks.js'
//setup routes for all /snacks
const router = Router()

// GET list index
router.get('/', snacksCtrl.index)

router.get('/new', snacksCtrl.new)

// POST

router.post('/', snacksCtrl.create)


//export router for server.js

export {
  router
}