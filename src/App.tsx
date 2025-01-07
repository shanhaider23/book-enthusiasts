import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import LandingPage from './pages/landing/LandingPage';
import Books from './pages/books/Books';
import { DarkModeProvider } from './context/DarkModeContext';
import BookDetails from './pages/details/BookDetails';
import PageNotFound from './pages/notFound/PageNotFound';

const App: React.FC = () => {
	return (
		<DarkModeProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate replace to="home" />} />
						<Route path="home" element={<LandingPage />} />
						<Route path="/book" element={<Books />} />
						<Route path="/book/:id" element={<BookDetails />} />
					</Route>

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</DarkModeProvider>
	);
};

export default App;
