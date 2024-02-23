import Router from 'express';
import upload from '../multerConfig.js';
import BookController from '../controller/book.controller.js';

const bookController = new BookController();
const router = new Router();

router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.post('/books/add', bookController.addBook);
router.patch('/books/update/:id', bookController.updateBookById);
router.delete('/books/delete/:id', bookController.deleteBookById);

router.patch('/books/update/image/:id', upload, bookController.updateBookImageById);

export default router;