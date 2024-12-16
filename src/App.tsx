import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import LandingPage from './pages/landing/LandingPage';
import Books from './pages/books/Books';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
	return (
		<DarkModeProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate replace to="home" />} />
						<Route path="home" element={<LandingPage />} />
						<Route path="/books" element={<Books />} />
					</Route>

					{/* <Route path="*" element={<PageNotFound />} /> */}
				</Routes>
			</BrowserRouter>
		</DarkModeProvider>
	);
}

export default App;
