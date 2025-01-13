import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { books } from '../../data/books';
import { Book } from '../../types/bookTypes';
import Back from '../../assets/back.png';
import './book-details.scss';

const BookDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const book: Book | undefined = books.find((b) => b.id === id);

	if (!book) {
		return <p>Book not found.</p>;
	}

	return (
		<div className="book-details">
			<img
				src={book.image_url}
				alt={book.title}
				className="book-details__image"
			/>
			<div className="book-details__info">
				<h1 className="book-details__title">{book.title}</h1>
				<p className="book-details__description">{book.description}</p>
				<p className="book-details__author">By {book.author}</p>
				<p className="book-details__isbn">ISBN: {book.isbn}</p>
				<p className="book-details__publisher">Publisher: {book.publisher}</p>
				<p className="book-details__published-year">
					Published Year: {book.published_year}
				</p>
				<p className="book-details__genres">Genres: {book.genres.join(', ')}</p>
				<p className="book-details__page-count">
					Page Count: {book.page_count}
				</p>
				<p className="book-details__language">Language: {book.language}</p>
				<p className="book-details__rating">Rating: {book.rating.toFixed(1)}</p>
				<div className="book-details__price">
					<p className="book-details__price-text">
						Price: ${book.price.toFixed(2)}
					</p>
					<div className="book-details__back">
						<NavLink to="/book" className="book-details__back-link">
							<img src={Back} alt="Back" className="book-details__back-icon" />
							<span className="book-details__tooltip">Go Back</span>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookDetails;
