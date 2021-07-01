import { Router } from 'express'
import * as controllers from '../controllers/items.js'
import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/items', restrict, controllers.getItems)
router.get('/items/:id', restrict, controllers.getItem)
router.post('/items', restrict, controllers.createItem)
router.put('/items/:id', restrict, controllers.updateItem)
router.delete('/items/:id', restrict,  controllers.deleteItem)

export default router