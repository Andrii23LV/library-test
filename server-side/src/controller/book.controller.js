import BookService from '../service/book.service.js';

const bookService = new BookService();

class BookController {
    async getAllBooks(_req, res) {
        try {
            const allBooks = await bookService.getAllBooks();
            res.status(200).send({ status: 'ok', data: allBooks });
        } catch (err) {
            res.status(500).send({ status: 'failed', data: err.message });
        }
    }

    async getBookById(req, res) {
        try {
            const bookId = req.params.id;
            const book = await bookService.getBookById(bookId);

            if (!book) {
                res.status(404).send({ status: 'failed', message: 'Book not found' });
                return;
            }

            res.status(200).send({ status: 'ok', data: book });
        } catch (err) {
            res.status(500).send({ status: 'failed', data: err.message });
        }
    }

    async addBook(req, res) {
        try {
            const newBookData = req.body;

            if (!isValidBook(newBookData)) {
                res.status(422).send({ status: 'failed', message: 'Unprocessable entity - Invalid book data' });
                return;
            }

            const newBook = await bookService.addBook(newBookData);
            res.status(201).send({ status: 'ok', data: newBook });
        } catch (err) {
            res.status(500).send({ status: 'failed', data: err.message });
        }
    }

    async updateBookById(req, res) {
        try {
            const bookId = req.params.id;
            const updatedBookData = req.body;

            if (!isValidBook(updatedBookData)) {
                res.status(422).send({ status: 'failed', message: 'Unprocessable entity - Invalid book data' });
                return;
            }

            const updatedBook = await bookService.updateBookById(bookId, updatedBookData);

            if (!updatedBook) {
                res.status(404).send({ status: 'failed', message: 'Book not found' });
                return;
            }

            res.status(200).send({ status: 'ok', data: updatedBook });
        } catch (err) {
            res.status(500).send({ status: 'failed', data: err.message });
        }
    }

    async deleteBookById(req, res) {
        try {
            const bookId = req.params.id;
            const deletedBook = await bookService.deleteBookById(bookId);

            if (!deletedBook) {
                res.status(404).send({ status: 'failed', message: 'Book not found' });
                return;
            }

            res.status(200).send({ status: 'ok', message: 'Book deleted successfully' });
        } catch (err) {
            res.status(500).send({ status: 'failed', data: err.message });
        }
    }

    async updateBookImageById(req, res) {
        try {
            const bookId = req.params.id;
            const file = req.file;

            const bookUpdated = await bookService.updateBookImageById(bookId, file);

            res.status(200).send({ status: 'ok', data: bookUpdated });
        } catch (error) {
            console.error('Error updating image:', error);
            res.status(500).json({ message: 'Error updating image' });
        }
    }
}

function isValidBook(bookData) {
    return (
        bookData &&
        typeof bookData.name === 'string' &&
        typeof bookData.category === 'string' &&
        typeof bookData.description === 'string' &&
        Number.isInteger(bookData.production_year)
    );
}

export default BookController;
