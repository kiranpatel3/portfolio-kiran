'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Projects
				</motion.h2>

				<div className="space-y-16">
					{/* E-commerce Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Path-Finder</h3>
										<p className="text-gray-400">
										A Path-Finding visualizer which helps you visualize different algorithms such as A-Star & Dijkstra with added obstacles.
										</p>
									</div>

									<div className="grid grid-cols-1 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• React Components</li>
												<li>• Maze generation to navigate visualize paths</li>
												<li>• Visualization to understand the Algorithms</li>
											</ul>
										</div>
										<a
											href="https://kiranpatel3.github.io/path-finder/"
											target="_blank"
											className="px-8 py-3 bg-black border border-gray-800 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2">
											<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
												<path
													fillRule="evenodd"
													d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
														clipRule="evenodd"
													/>
												<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
											</svg>
											Check it out!
										</a>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<img src="/path-finder.png" alt="Path-Finder" className="w-full h-full object-cover rounded-xl" />	
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
