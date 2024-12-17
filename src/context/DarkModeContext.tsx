import { createContext, useContext, useEffect, ReactNode } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorage';

interface DarkModeContextType {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
	undefined
);

interface DarkModeProviderProps {
	children: ReactNode;
}

function DarkModeProvider({ children }: DarkModeProviderProps) {
	const [isDarkMode, setIsDarkMode] = useLocalStorageState(
		window.matchMedia('(prefers-color-scheme: dark)').matches,
		'isDarkMode'
	);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark-mode');
			document.documentElement.classList.remove('light-mode');
		} else {
			document.documentElement.classList.add('light-mode');
			document.documentElement.classList.remove('dark-mode');
		}
	}, [isDarkMode]);

	function toggleDarkMode() {
		setIsDarkMode((prevMode: boolean) => !prevMode);
	}

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

function useDarkMode() {
	const context = useContext(DarkModeContext);
	if (context === undefined) {
		throw new Error('useDarkMode must be used within a DarkModeProvider');
	}
	return context;
}

export { DarkModeProvider, useDarkMode };
