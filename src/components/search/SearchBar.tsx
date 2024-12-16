import React, { useState } from 'react';
import { books } from '../../data/books';
import BookCard from '../card/BookCard';
import Search from '../../assets/loupe.png';

const SearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredBooks, setFilteredBooks] = useState<any[]>([]);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		setIsSubmitted(false);
		setError('');
	};

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitted(true);

		if (!searchTerm.trim()) {
			setError('Please type something to search.');
			setFilteredBooks([]);
			return;
		}

		const results = books.filter(
			(book) =>
				book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				book.author.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setFilteredBooks(results);

		if (results.length === 0) {
			setError('No books found matching your search.');
		} else {
			setError('');
		}
	};

	return (
		<div className="landing-page__search">
			{error && <p className="landing-page__error">{error}</p>}
			<form className="landing-page__search-form" onSubmit={handleSearch}>
				<input
					type="text"
					placeholder="Search for books..."
					value={searchTerm}
					onChange={handleInputChange}
				/>
				<button type="submit">
					<img
						src={Search}
						alt="Search"
						className="landing-page__search-image"
					/>
				</button>
			</form>

			{isSubmitted && filteredBooks.length > 0 && (
				<div className="landing-page__search-results">
					<h2>Search Results</h2>
					{filteredBooks.map((book) => (
						<BookCard key={book.id} book={book} />
					))}
				</div>
			)}
		</div>
	);
};

export default SearchBar;
