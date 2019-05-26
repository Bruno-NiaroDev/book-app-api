import { Router } from 'express'
import BookController from '../controllers/BookController'

const router = Router()

router.post('/book', BookController.addNew)
router.get('/book', BookController.getAll)
router.get('/book/:id', BookController.getOne)
router.put('/book/:id', BookController.update)
router.delete('/book/:id', BookController.delete)

export default router