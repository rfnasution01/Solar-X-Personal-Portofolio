import { skills } from "@/data/skill";
import { capabilityIcons } from "../icons/skillIcons";

export function SkillSection() {
	return (
		<section
			id="skills"
			className="relative py-24 md:py-32 
                    bg-gradient-to-b from-[#0f0f1a] to-[#151434]"
		>
			<div className="max-w-6xl mx-auto px-6 md:px-12">
				{/* Heading */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-white">
						{skills?.title}
					</h2>
					<p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
						{skills?.description}
					</p>
				</div>

				{/* Skill Groups */}
				<div className="grid md:grid-cols-3 gap-12">
					{skills?.groups?.map((group, idx) => (
						<div key={idx} className="space-y-6">
							<h3 className="text-xl font-semibold text-white">
								{group?.title}
							</h3>

							<div className="space-y-4">
								{group?.items?.map((skill, i) => {
									const Icon = capabilityIcons[skill?.icon];
									return (
										<div
											key={i}
											className="flex cursor-pointer items-center gap-4 p-4 rounded-xl 
                           bg-white/5 border border-white/10
                           hover:border-[#4b49ac] hover:bg-white/10
                           transition-all duration-300"
										>
											<div
												className="w-10 h-10 rounded-lg 
                                bg-[#4b49ac]/20 text-[#4b49ac]
                                flex items-center justify-center text-lg"
											>
												<Icon />
											</div>
											<span className="text-gray-200 font-medium">
												{skill.name}
											</span>
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
