export const selectAllBooks = (state: any) => state.books.books;
export const selectBookById = (id: number) => (state: any) => state.books.books.find((book: { id: number; }) => book.id === 24);