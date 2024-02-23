import { createSlice } from '@reduxjs/toolkit'

import * as ACTION from '../actions/bookActions'
import { Book } from '@/models';

interface BookState {
    books: Book[];
    isLoading: boolean;
    error: string | null | undefined;
}

const initialState: BookState = {
    books: [],
    isLoading: false,
    error: null,
};


export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(ACTION.getAllBooks.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(ACTION.getAllBooks.fulfilled, (state, action) => {
            state.isLoading = false
            state.books = action.payload
        })
        builder.addCase(ACTION.getAllBooks.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        builder.addCase(ACTION.getBookById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(ACTION.getBookById.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(ACTION.getBookById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        builder.addCase(ACTION.addBook.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(ACTION.addBook.fulfilled, (state, action) => {
            state.isLoading = false
            state.books = [...state.books, action.payload]
        })
        builder.addCase(ACTION.addBook.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        builder.addCase(ACTION.deleteBookById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(ACTION.deleteBookById.fulfilled, (state, action) => {
            state.isLoading = false
            state.books = state.books.filter(book => book.id !== action.payload)
        })
        builder.addCase(ACTION.deleteBookById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

        builder.addCase(ACTION.updateBookById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(ACTION.updateBookById.fulfilled, (state, action) => {
            state.isLoading = false
            state.books = state.books.map(book => book.id === action.payload.id ? action.payload : book)
        })
        builder.addCase(ACTION.updateBookById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })


        builder.addCase(ACTION.updateBookImageById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(ACTION.updateBookImageById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.books = state.books.map(book => book.id === action.payload.id ? action.payload : book)
        })
        builder.addCase(ACTION.updateBookImageById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default bookSlice.reducer