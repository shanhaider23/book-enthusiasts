export interface Book {
	id: string;
	title: string;
	author: string;
	isbn: string;
	published_year: number;
	genres: string[];
	description: string;
	publisher: string;
	page_count: number;
	language: string;
	image_url: string;
	rating: number;
	price: number;
}
