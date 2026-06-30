import type { Metadata } from 'next';
import { Newsreader, Figtree } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import './globals.css';

const newsreader = Newsreader({
	variable: '--font-display',
	subsets: ['latin'],
	display: 'swap',
});

const figtree = Figtree({
	variable: '--font-body',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Kiran Patel — Software Engineer',
	description:
		'Software engineer with 5+ years of experience building scalable web applications. React, TypeScript, Java, Spring Boot, and AWS — based in the NY metro area.',
	keywords: [
		'Kiran Patel',
		'Software Engineer',
		'React',
		'TypeScript',
		'Java',
		'Spring Boot',
		'AWS',
		'Full-Stack Developer',
	],
	authors: [{ name: 'Kiran Patel' }],
	creator: 'Kiran Patel',
	openGraph: {
		title: 'Kiran Patel — Software Engineer',
		description:
			'Software engineer with 5+ years of experience building scalable web applications. React, TypeScript, Java, Spring Boot, and AWS.',
		url: 'https://patelkiran.dev',
		siteName: 'Kiran Patel',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Kiran Patel — Software Engineer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kiran Patel — Software Engineer',
		description:
			'Software engineer with 5+ years of experience building scalable web applications. React, TypeScript, Java, Spring Boot, and AWS.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
	},
};

const themeScript = `
(function () {
	try {
		var theme = localStorage.getItem('theme') || 'system';
		var dark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
		if (dark) document.documentElement.classList.add('dark');
	} catch (e) {}
})();
`;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
			</head>
			<body className={`${newsreader.variable} ${figtree.variable}`}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
