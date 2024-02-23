import { createAsyncThunk } from '@reduxjs/toolkit';
import BookApiService from '@/api';
import { Book } from '@/models';

const bookApiService = new BookApiService();

export const getAllBooks = createAsyncThunk<Book[]>('books/getAllBooks', async () => {
    try {
        const allBooks: Book[] = await bookApiService.getAllBooks();
        return allBooks;
    } catch (error) {
        console.log('Error fetching all books:', error);
        return [];
    }
});

export const getBookById = createAsyncThunk<Book | null, number>('books/getBookById', async (id) => {
    try {
        const bookById = await bookApiService.getBookById(id);
        return bookById;
    } catch (error) {
        console.log('Error fetching book by ID:', error);
        return null;
    }
}
);
export const addBook = createAsyncThunk<Book, Partial<Book>>('books/addBook', async (bookData) => {
    try {
        const newBook = await bookApiService.addBook(bookData);
        return newBook;
    } catch (error) {
        console.error('Error adding book:', error);
        throw error;
    }
});

export const deleteBookById = createAsyncThunk<number, number>('books/deleteBookById', async (id) => {
    try {
        await bookApiService.deleteBookById(id);
        return id;
    } catch (error) {
        console.log('Error deleting book:', error);
        throw error;
    }
});

export const updateBookById = createAsyncThunk<Book, Book>('books/updateBookById', async (bookData) => {
    try {
        const { id } = bookData;
        const updatedBook = await bookApiService.updateBookById(id, bookData);
        return updatedBook;
    } catch (error) {
        console.error('Error updating book:', error);
        throw error;
    }
});


export const updateBookImageById = createAsyncThunk<any, any>('books/updateBookImageById', async (bookData) => {
    try {
        const { id } = bookData;
        const updatedBook = await bookApiService.updateBookImageById(id, bookData.image);
        
        return updatedBook;
    } catch (error) {
        console.error('Error updating book:', error);
        throw error;
    }
});
