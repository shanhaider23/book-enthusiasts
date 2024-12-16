import React, { useEffect, useState } from 'react';

import { books } from '../../data/books';
import SearchBar from '../../components/search/SearchBar';
import './landing-page.scss';
import BookCard from '../../components/card/BookCard';

const LandingPage: React.FC = () => {
	const [latestBooks, setLatestBooks] = useState<any[]>([]);

	useEffect(() => {
		const sortedBooks = [...books].sort(
			(a, b) => b.published_year - a.published_year
		);
		setLatestBooks(sortedBooks.slice(0, 3));
	}, []);

	return (
		<div className="landing-page">
			<h1>Welcome to Book Enthusiasts</h1>
			<SearchBar />
			<h2>Latest Books</h2>
			<div className="landing-page__latest-books">
				{latestBooks.map((book) => (
					<BookCard key={book.id} book={book} />
				))}
			</div>
		</div>
	);
};

export default LandingPage;