import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import hooks from react-router-dom
import { books } from '../../data/books';
import BookCard from '../card/BookCard';
import Search from '../../assets/loupe.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

const SearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredBooks, setFilteredBooks] = useState<any[]>([]);
	const [error, setError] = useState('');

	const navigate = useNavigate();
	const location = useLocation();

	// Extract the search term from the URL on component mount
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const query = params.get('search');
		if (query) {
			setSearchTerm(query);
			searchBooks(query);
		}
	}, [location.search]);

	// Handle search input change
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		setError(''); // Clear error message when user starts typing
	};

	// Display a toast notification
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

	// Filter books by title or author
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
			showToast(noBooksMessage); // Display the toast notification
		} else {
			setError('');
		}
	};

	// Handle book search
	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();

		// Validate that the search term is not empty
		if (!searchTerm.trim()) {
			const errorMessage = 'Please type something to search.';
			setError(errorMessage);
			setFilteredBooks([]); // Clear the results if input is empty
			showToast(errorMessage); // Display the toast notification
			return;
		}

		// Update the URL with the search term
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

			<ToastContainer />

			{filteredBooks.length > 0 && (
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
