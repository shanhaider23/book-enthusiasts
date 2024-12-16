import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { books } from '../../data/books';
import BookCard from '../card/BookCard';
import Search from '../../assets/loupe.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Book } from '../../types/bookTypes';

const SearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
	const [error, setError] = useState('');
	const [searchTriggered, setSearchTriggered] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const query = params.get('search');
		if (query) {
			setSearchTerm(query);
			searchBooks(query);
		}
	}, [location.search]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		setError('');
	};

	const showToast = (message: string) => {
		toast.error(message, {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	const searchBooks = (query: string) => {
		const results = books.filter(
			(book) =>
				book.title.toLowerCase().includes(query.toLowerCase()) ||
				book.author.toLowerCase().includes(query.toLowerCase())
		);

		setFilteredBooks(results);

		if (results.length === 0) {
			const noBooksMessage = 'No books found matching your search.';
			setError(noBooksMessage);
			showToast(noBooksMessage);
		} else {
			setError('');
		}
	};

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();

		if (!searchTerm.trim()) {
			const errorMessage = 'Please type something to search.';
			setError(errorMessage);
			setFilteredBooks([]);
			setSearchTriggered(false);
			showToast(errorMessage);
			return;
		}

		searchBooks(searchTerm);
		setSearchTriggered(true);
		navigate(`?search=${encodeURIComponent(searchTerm)}`);
	};

	return (
		<div className="landing-page__search">
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
			{error && <p className="landing-page__error">{error}</p>}
			<ToastContainer />

			{searchTriggered && (
				<>
					<h1>Search Results</h1>
					{filteredBooks.length > 0 && (
						<div className="landing-page__search-results">
							{filteredBooks.map((book) => (
								<BookCard key={book.id} book={book} />
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default SearchBar;
