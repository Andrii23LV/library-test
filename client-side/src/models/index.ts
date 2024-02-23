export interface Book {
    id: number;
    name: string;
    category: string;
    description: string;
    author: string;
    production_year: number;
    image_url?: string;
}