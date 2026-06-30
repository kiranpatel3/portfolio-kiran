'use client';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function FullStackPortfolio() {
	return (
		<>
			<Header />
			<main className="min-h-screen">
				<HeroSection />
				<ProjectsSection />
				<ContactSection />
			</main>
		</>
	);
}
