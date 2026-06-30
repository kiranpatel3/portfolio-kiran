'use client';

import { Theme, useTheme } from './ThemeProvider';

const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
	{
		value: 'light',
		label: 'Light',
		icon: (
			<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.75}
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				/>
			</svg>
		),
	},
	{
		value: 'dark',
		label: 'Dark',
		icon: (
			<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.75}
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				/>
			</svg>
		),
	},
	{
		value: 'system',
		label: 'System',
		icon: (
			<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.75}
					d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				/>
			</svg>
		),
	},
];

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<div
			className="inline-flex items-center rounded-full border border-border bg-surface p-1"
			role="group"
			aria-label="Color theme"
		>
			{options.map((option) => (
				<button
					key={option.value}
					type="button"
					onClick={() => setTheme(option.value)}
					className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors ${
						theme === option.value
							? 'bg-accent text-accent-foreground shadow-sm'
							: 'text-muted hover:text-foreground'
					}`}
					aria-pressed={theme === option.value}
					aria-label={`${option.label} theme`}
					title={option.label}
				>
					{option.icon}
					<span className="hidden sm:inline">{option.label}</span>
				</button>
			))}
		</div>
	);
}
