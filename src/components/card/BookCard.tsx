import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './book-card.scss';

interface BookProps {
	book: {
		id: string;
		title: string;
		author: string;
		price: number;
		image_url: string;
	};
}

const BookCard: React.FC<BookProps> = ({ book }) => {
	return (
		<Link to={`/book/${book.id}`} className="book-card">
			{' '}
			<img src={book.image_url} alt={book.title} className="book-card__image" />
			<div className="book-card__content">
				<h3 className="book-card__title">{book.title}</h3>
				<p className="book-card__author">{book.author}</p>
				<p className="book-card__price">${book.price.toFixed(2)}</p>
			</div>
		</Link>
	);
};

export default BookCard;
