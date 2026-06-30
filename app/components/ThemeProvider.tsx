'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

type ThemeContextValue = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	resolvedTheme: 'light' | 'dark';
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): 'light' | 'dark' {
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
	const resolved = theme === 'system' ? getSystemTheme() : theme;
	document.documentElement.classList.toggle('dark', resolved === 'dark');
	return resolved;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setThemeState] = useState<Theme>('system');
	const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		const stored = localStorage.getItem('theme') as Theme | null;
		const initial = stored && ['light', 'dark', 'system'].includes(stored) ? stored : 'system';
		setThemeState(initial);
		setResolvedTheme(applyTheme(initial));
	}, []);

	useEffect(() => {
		if (theme !== 'system') return;

		const media = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = () => setResolvedTheme(applyTheme('system'));
		media.addEventListener('change', handleChange);
		return () => media.removeEventListener('change', handleChange);
	}, [theme]);

	const setTheme = useCallback((next: Theme) => {
		setThemeState(next);
		localStorage.setItem('theme', next);
		setResolvedTheme(applyTheme(next));
	}, []);

	return <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) throw new Error('useTheme must be used within ThemeProvider');
	return context;
}
