import BookService from '../services/BookService'

class BookController {
  static async addNew(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide complete information'
      })
    }
    try {
      let newBook = req.body
      newBook = await BookService.addNew(newBook)
      return res.status(201).json({
        status: 'success',
        message: 'Book created',
        data: newBook
      })
    } catch(error) {
      return res.status(400).json({
        status: 'error',
        message: error
      })
    }
  }

  static async getAll(req, res) {
    try {
      const books = await BookService.getAll()
      if (books && books.length > 0) {
        return res.status(200).json({
          status: 'success',
          message: 'Books retrieved',
          data: books
        })
      } else {
        return res.status(200).json({
          status: 'success',
          message: 'There are no Books to retrieve'
        })
      }
    } catch(error) {
      return res.status(400).json({
        status: 'error',
        message: error
      })
    }
  }

  static async getOne(req, res) {
    const { id } = req.params
    if (!Number(id)) { 
      return res.status(400).json({
        status: 'error',
        message: 'Please inform a numeric id value'
      })
    }
    try {
      const book = await BookService.getOne(id)
      if (!book) {
        return res.status(404).json({
          status: 'error',
          message: `Cannot find book with id: ${id}`
        })
      } else {
        return res.status(200).json({
          status: 'success',
          message: 'Book found',
          data: book
        })
      }
    } catch(error) {
      return res.status(400).json({
        status: 'error',
        message: error
      })
    }
  }

  static async update(req, res) {
    const { id } = req.params
    if (!Number(id)) {
      return res.status(400).json({
        status: 'error',
        message: 'Please inform a numeric id value'
      })
    }
    try {
      let book = req.body
      book = await BookService.update(id, book)
      if (!book) {
        return res.status(404).json({
          status: 'error',
          message: `Cannot update book with id: ${id}`
        })
      } else {
        return res.status(200).json({
          status: 'success',
          message: 'Book updated',
          data: book
        })
      }
    } catch(error) {
      return res.status(400).json({
        status: 'error',
        message: error
      })
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    if (!Number(id)) {
      return res.status(400).json({
        status: 'error',
        message: 'Please inform a numeric id value'
      })
    }
    try {
      const deletedBook = await BookService.delete(id)
      if (deletedBook) {
        return res.status(200).json({
          status: 'success',
          message: 'Book deleted'
        })
      } else {
        return res.status(404).json({
          status: 'error',
          message: `Cannot delete book with id: ${id}`
        })
      }
    } catch(error) {
      return res.status(400).json({
        status: 'error',
        message: error  
      })
    }
  }
}

export default BookController