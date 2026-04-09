import { projects } from "@/data/projects";
import { capabilityIcons } from "@/components/icons/skillIcons";

export function ProjectSection() {
	return (
		<section id="projects" className="relative py-24 md:py-32 bg-gray-50">
			<div className="max-w-6xl mx-auto px-6 md:px-12">
				{/* Heading */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
						{projects.title}
					</h2>
					<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
						{projects.description}
					</p>
				</div>

				{/* Project Cards */}
				<div className="grid md:grid-cols-2 gap-10">
					{projects.items.map((project, idx) => (
						<div
							key={idx}
							className="p-8 bg-white rounded-2xl border border-gray-100
              hover:shadow-xl hover:-translate-y-1
              transition-all duration-300"
						>
							<span className="text-sm font-medium text-primary">
								{project.category}
							</span>

							<h3 className="mt-2 text-2xl font-bold text-gray-900">
								{project.title}
							</h3>

							<p className="mt-4 text-gray-600 leading-relaxed">
								{project.description}
							</p>

							{/* Technologies */}
							<div className="mt-6 flex flex-wrap gap-3">
								{project.technologies.map((tech, i) => {
									const Icon = capabilityIcons[tech?.icon];

									return (
										<div
											key={i}
											className="flex items-center gap-2 px-3 py-1.5
                        text-sm rounded-full
                        bg-primary/10 text-primary"
										>
											<Icon className="text-sm" />
											<span>{tech.name}</span>
										</div>
									);
								})}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
