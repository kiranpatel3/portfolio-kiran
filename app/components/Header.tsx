'use client';

import ThemeToggle from './ThemeToggle';

const navLinks = [
	{ href: '#about', label: 'About' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#contact', label: 'Contact' },
];

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
			<div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
				<a href="#" className="font-display text-lg tracking-tight text-foreground">
					Kiran Patel
				</a>

				<div className="flex items-center gap-4">
					<nav className="hidden items-center gap-6 sm:flex" aria-label="Main">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm text-muted transition-colors hover:text-foreground"
							>
								{link.label}
							</a>
						))}
					</nav>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
