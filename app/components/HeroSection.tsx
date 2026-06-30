'use client';

const skills = [
	'React',
	'TypeScript',
	'Redux',
	'Java',
	'Spring Boot',
	'AWS',
	'Docker',
	'CI/CD',
];

const experience = [
	{ company: 'Freelance', role: 'Frontend Engineer', period: '2023 – present' },
	{ company: 'USAA', role: 'Software Developer', period: '2021 – 2023' },
	{ company: 'Discover', role: 'Software Developer', period: '2019 – 2021' },
	{ company: 'T-Mobile', role: 'Software Developer', period: '2018 – 2019' },
];

export default function HeroSection() {
	return (
		<section id="about" className="px-6 pb-20 pt-16 md:pt-24">
			<div className="mx-auto max-w-3xl">
				<p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Software Engineer</p>

				<h1 className="font-display text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
					Hi, I&apos;m Kiran.
				</h1>

				<p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
					I&apos;ve spent the last five-plus years building web applications — mostly Java and Spring Boot on the
					backend, React and TypeScript on the frontend, with a growing focus on performance, accessibility, and
					AI-assisted development workflows.
				</p>

				<p className="mt-4 max-w-2xl leading-relaxed text-muted">
					Since 2023 I&apos;ve been doing freelance frontend work while deepening my React and generative-AI
					skills. Before that I was at USAA, Discover Financial Services, and T-Mobile, shipping APIs, improving
					deployments, and working closely with frontend teams on integration and latency.
				</p>

				<p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
					M.S. in Computer Science, Long Island University · AWS Certified Developer · Meta Front-End Developer
					Certificate
				</p>

				<div className="mt-8 flex flex-wrap gap-2">
					{skills.map((skill) => (
						<span
							key={skill}
							className="rounded-md border border-border bg-surface px-3 py-1 text-sm text-foreground"
						>
							{skill}
						</span>
					))}
				</div>

				<div className="mt-12 border-t border-border pt-10">
					<h2 className="mb-6 text-sm font-medium uppercase tracking-wide text-muted">Where I&apos;ve worked</h2>
					<ul className="space-y-4">
						{experience.map((job) => (
							<li key={job.company} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
								<div>
									<span className="font-medium text-foreground">{job.company}</span>
									<span className="text-muted"> — {job.role}</span>
								</div>
								<span className="text-sm text-muted">{job.period}</span>
							</li>
						))}
					</ul>
				</div>

				<div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
					<div>
						<h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted">Frontend</h2>
						<p className="text-sm leading-relaxed text-foreground">
							React, Redux, TypeScript, responsive UI, and the performance and accessibility details that
							keep apps usable on real devices.
						</p>
					</div>
					<div>
						<h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted">Backend</h2>
						<p className="text-sm leading-relaxed text-foreground">
							Java, Spring Boot, REST APIs, MongoDB, and MySQL — the services and data layers behind the
							interfaces.
						</p>
					</div>
					<div>
						<h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted">Ops &amp; tools</h2>
						<p className="text-sm leading-relaxed text-foreground">
							AWS, Docker, Jenkins, OpenShift, and Vercel. I also use Cursor and LLM workflows day to day
							for prototyping, testing, and code review.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
