import { Router } from 'express'
import AuthorController from '../controllers/AuthorController'

const router = Router()
router.post('/authors', AuthorController.addNew)
router.get('/authors', AuthorController.getAll)
router.get('/authors/:id', AuthorController.getOne)
router.put('/authors/:id', AuthorController.update)
router.delete('/authors/:id', AuthorController.delete)

export default router