import { pool } from '../utils/db.js';

const serverUrl = 'http://localhost:2000'

class BookService {
    async getAllBooks() {
        try {
            const allBooks = await pool.query('SELECT * FROM books ORDER BY id ASC');
            return allBooks.rows;
        } catch (err) {
            console.log(err);
            throw new Error('Failed to fetch books');
        }
    }

    async getBookById(bookId) {
        try {
            const query = 'SELECT * FROM books WHERE id = $1';
            const book = await pool.query(query, [bookId]);
            return book.rows[0];
        } catch (err) {
            console.log(err);
            throw new Error('Failed to fetch book by ID');
        }
    }

    async addBook(newBookData) {
        try {
            const { name, author, category, description, production_year } = newBookData;
            const query = 'INSERT INTO books (name, author, category, description, production_year) VALUES ($1, $2, $3, $4, $5) RETURNING *';

            const newBook = await pool.query(query, [name, author, category, description, production_year ? production_year : null]);
            return newBook.rows[0];
        } catch (err) {
            console.log(err);
            throw new Error('Failed to add new book');
        }
    }

    async updateBookById(bookId, updatedBookData) {
        try {
            const { name, author, category, description, production_year } = updatedBookData;
            const query = 'UPDATE books SET name = $1, author = $2, category = $3, description = $4, production_year = $5 WHERE id = $6 RETURNING *';

            const updatedBook = await pool.query(query, [name, author, category, description, production_year ? production_year : null, bookId]);
            return updatedBook.rows[0];
        } catch (err) {
            console.log(err);
            throw new Error('Failed to update book by ID');
        }
    }

    async deleteBookById(bookId) {
        try {
            const query = 'DELETE FROM books WHERE id = $1 RETURNING *';

            const deletedBook = await pool.query(query, [bookId]);
            return deletedBook.rows[0];
        } catch (err) {
            console.log(err);
            throw new Error('Failed to delete book by ID');
        }
    }

    async updateBookImageById(bookId, file) {
        try {
            const result = await pool.query('SELECT image_url FROM books WHERE id = $1', [bookId]);
            const existingImageUrl = result.rows[0]?.image_url;

            if (existingImageUrl) {
                await pool.query('UPDATE books SET image_url = null WHERE id = $1', [bookId]);
            }

            const imageUrl = `${serverUrl}/${file.filename}`;

            await pool.query('UPDATE books SET image_url = $1 WHERE id = $2', [imageUrl, bookId]);

            const updatedBook = await this.getBookById(bookId);

            return updatedBook;
        } catch (err) {
            console.log(err);
            throw new Error('Failed to update image by ID');
        }
    }
}

export default BookService;
