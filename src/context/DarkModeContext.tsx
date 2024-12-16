import { createContext, useContext, useEffect, ReactNode } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorage';

// Define the context type
interface DarkModeContextType {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}

// Create the context with a default value of `undefined`
const DarkModeContext = createContext<DarkModeContextType | undefined>(
	undefined
);

interface DarkModeProviderProps {
	children: ReactNode;
}

function DarkModeProvider({ children }: DarkModeProviderProps) {
	// Initialize the state with useLocalStorageState hook
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

	// Toggle function to change the dark mode state
	function toggleDarkMode() {
		setIsDarkMode((prevMode: boolean) => !prevMode);
	}

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

// Custom hook to use the DarkModeContext
function useDarkMode() {
	const context = useContext(DarkModeContext);
	if (context === undefined) {
		throw new Error('useDarkMode must be used within a DarkModeProvider');
	}
	return context;
}

export { DarkModeProvider, useDarkMode };
