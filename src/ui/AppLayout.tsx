import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './scss/app-layout.scss';

const AppLayout: React.FC = () => {
	return (
		<>
			<Header />
			<main className="app-layout">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default AppLayout;
