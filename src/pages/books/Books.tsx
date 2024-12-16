import React from 'react';
import { useNavigate } from 'react-router-dom';
import { books } from '../../data/books';
import BookCard from '../../components/card/BookCard';
import './books.scss';

const Books: React.FC = () => {
	const navigate = useNavigate();

	const handleClick = (bookId: string) => {
		navigate(`/book/${bookId}`);
	};

	return (
		<div className="books">
			<h1 className="books__title">Available Books</h1>
			<div className="books__box">
				{books.slice(0, 10).map((book) => (
					<div
						key={book.id}
						className="books__item"
						onClick={() => handleClick(book.id)}
					>
						<BookCard book={book} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Books;
