import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				muted: 'var(--muted)',
				border: 'var(--border)',
				surface: 'var(--surface)',
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)',
					muted: 'var(--accent-muted)',
				},
			},
			fontFamily: {
				sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
				display: ['var(--font-display)', 'Georgia', 'serif'],
			},
		},
	},
	plugins: [],
} satisfies Config;
