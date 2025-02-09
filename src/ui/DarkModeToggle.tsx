import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

import { useDarkMode } from '../context/DarkModeContext';
import './scss/dark-mode.scss';

const DarkModeToggle: React.FC = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<button onClick={toggleDarkMode} className="mode">
			{isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
		</button>
	);
};

export default DarkModeToggle;
