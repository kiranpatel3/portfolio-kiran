'use client';

const projects = [
	{
		title: 'Moodboard.ai',
		description:
			'An AI storytelling app I built end to end — from scoping through deployment. Users pick a mood or genre and get visual and text-based story prompts powered by the Google Gemini API. I used Cursor and LLM-assisted workflows heavily for prototyping, debugging, and testing.',
		details: [
			'React, Redux, TypeScript',
			'Google Gemini API integration',
			'Deployed on Vercel',
		],
		href: 'https://moodboard-ai-eight.vercel.app/',
		image: '/moodboard.ai.png',
		imageAlt: 'Moodboard.ai — AI-powered storytelling app built with React, TypeScript, Redux, and Gemini API',
	},
	{
		title: 'Path-Finder',
		description:
			'A visualizer I built to actually understand pathfinding. You can drop obstacles on a grid and watch A* and Dijkstra work through the maze in real time.',
		details: ['React', 'Canvas-based grid', 'A* & Dijkstra algorithms'],
		href: 'https://kiranpatel3.github.io/path-finder/',
		image: '/path-finder.png',
		imageAlt: 'Screenshot of the Path-Finder application',
	},
];

export default function ProjectsSection() {
	return (
		<section id="projects" className="border-t border-border px-6 py-20">
			<div className="mx-auto max-w-3xl">
				<h2 className="font-display text-3xl tracking-tight text-foreground">Things I&apos;ve built</h2>
				<p className="mt-3 max-w-xl text-muted">
					Featured projects from freelance work and side experiments — shipped, deployed, and maintained by me.
				</p>

				<div className="mt-12 space-y-10">
					{projects.map((project) => (
						<article
							key={project.title}
							className="overflow-hidden rounded-xl border border-border bg-surface"
						>
							<div className="grid gap-0 md:grid-cols-2 md:items-stretch">
								<div className="p-6 md:p-8">
									<h3 className="font-display text-2xl text-foreground">{project.title}</h3>
									<p className="mt-3 leading-relaxed text-muted">{project.description}</p>

									<ul className="mt-5 space-y-1.5 text-sm text-muted">
										{project.details.map((detail) => (
											<li key={detail}>{detail}</li>
										))}
									</ul>

									<a
										href={project.href}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:opacity-80"
									>
										See it live
										<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</a>
								</div>

								<div className="flex h-full min-h-[220px] items-center justify-center border-t border-border bg-accent-muted/30 p-4 md:min-h-0 md:border-l md:border-t-0 md:p-6">
									{project.image ? (
										<img
											src={project.image}
											alt={project.imageAlt}
											className="h-full w-full rounded-lg object-contain"
										/>
									) : (
										<div className="flex h-full min-h-[180px] w-full items-center justify-center rounded-lg border border-dashed border-border bg-surface/50 p-8 text-center">
											<p className="text-sm text-muted">Screenshot coming soon</p>
										</div>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
