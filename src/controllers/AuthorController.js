import AuthorService from '../services/AuthorService'

class AuthorController {
  
  static async addNew(req, res) {
    if (!req.body.firstname || !req.body.lastname) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide complete information'
      })
    }
    try {
      let newAuthor = req.body
      newAuthor = await AuthorService.addNew(newAuthor)
      return res.status(201).json({
        status: 'success',
        message: 'Author created',
        data: newAuthor
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
      const authors = await AuthorService.getAll()
      if (authors && authors.length > 0) {
        return res.status(200).json({
          status: 'success',
          message: 'Authors retrieved',
          data: authors
        })
      } else {
        return res.status(200).json({
          status: 'success',
          message: 'There are no authors to retrieve'
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
      const author = await AuthorService.getOne(id)
      if (!author) {
        return res.status(404).json({
          status: 'error',
          message: `Cannot find author with id: ${id}`
        })
      } else {
        return res.status(200).json({
          status: 'success',
          message: 'Author found',
          data: author
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
      let author = req.body
      author = await AuthorService.update(id, author)
      if (!author) {
        return res.status(404).json({
          status: 'error',
          message: `Cannot update author with id: ${id}`
        })
      } else {
        return res.status(200).json({
          status: 'success',
          message: 'Author updated',
          data: author
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
      const deletedAuthor = await AuthorService.delete(id)
      if (deletedAuthor) {
        return res.status(200).json({
          status: 'success',
          message: 'Author deleted'
        })
      } else {
        return res.status(404).json({
          status: 'error',
          message: `Cannot delete author with id: ${id}`
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

export default AuthorController;