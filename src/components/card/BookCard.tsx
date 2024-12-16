import React from 'react';
import './book-card.scss';

interface BookProps {
	book: {
		id: number;
		title: string;
		author: string;
		price: number;
		image_url: string;
	};
}

const BookCard: React.FC<BookProps> = ({ book }) => {
	return (
		<div className="book-card">
			<img src={book.image_url} alt={book.title} className="book-card__image" />
			<div className="book-card__content">
				<h3 className="book-card__title">{book.title}</h3>
				<p className="book-card__author">{book.author}</p>
				<p className="book-card__price">${book.price.toFixed(2)}</p>
			</div>
		</div>
	);
};

export default BookCard;
