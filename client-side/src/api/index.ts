import { Book } from "@/models";

const apiUrl = 'http://localhost:2000/api'; // Replace 'your-server-url' with your actual server URL

class BookApiService {
    async getAllBooks(): Promise<Book[]> {
        const response = await fetch(`${apiUrl}/books`);
        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }
        const responseJson = await response.json();
        const data = responseJson.data;
        return data;
    }

    async getBookById(id: number): Promise<Book | null> {
        const response = await fetch(`${apiUrl}/books/${id}`);
        if (response.status === 404) {
            return null;
        }
        if (!response.ok) {
            throw new Error('Failed to fetch book');
        }

        const responseJson = await response.json();
        const data = responseJson.data;
        return data;
    }

    async addBook(bookData: Partial<Book>): Promise<Book> {
        const response = await fetch(`${apiUrl}/books/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });
        if (!response.ok) {
            throw new Error('Failed to add book');
        }

        const responseJson = await response.json();
        const data = responseJson.data;
        return data;
    }

    async updateBookById(id: number, bookData: Partial<Book>): Promise<Book> {
        const response = await fetch(`${apiUrl}/books/update/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });
        if (!response.ok) {
            throw new Error('Failed to update book');
        }

        const responseJson = await response.json();
        const data = responseJson.data;
        return data;
    }

    async deleteBookById(id: number): Promise<void> {
        const response = await fetch(`${apiUrl}/books/delete/${id}`, {
            method: 'DELETE',
        });
        if (response.status === 404) {
            throw new Error('Book not found');
        }
        if (!response.ok) {
            throw new Error('Failed to delete book');
        }
    }
    async updateBookImageById(id: number, image: any): Promise<void> {
        const formData = new FormData();
        formData.append('image', image);

        const response = await fetch(`${apiUrl}/books/update/image/${id}`, {
            method: 'PATCH',
            body: formData,
            // headers: {
            //     'Content-Type': 'multipart/form-data;'
            // }
        });

        if (response.status === 404) {
            throw new Error('Book not found');
        }
        if (!response.ok) {
            throw new Error('Failed to update image');
        }

        const responseJson = await response.json();
        const data = responseJson.data;
        return data;
    }
}

export default BookApiService;
