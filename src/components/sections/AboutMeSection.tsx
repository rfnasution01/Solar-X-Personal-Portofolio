import { aboutMe } from "@/data/about";
import { experienceIcons } from "../icons/experienceIcons";

export function AboutMeSection() {
	return (
		<section id="about-me" className="relative py-12 md:py-32 bg-white">
			<div className="max-w-6xl mx-auto px-6 md:px-12">
				{/* Section Label */}
				<div className="mb-12">
					<span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-2 rounded-full">
						{aboutMe?.title}
					</span>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
					{/* LEFT SIDE */}
					<div className="space-y-6">
						<h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
							{aboutMe?.headline?.primary} <br /> {aboutMe?.headline?.secondary}
						</h2>

						<p className="text-lg text-gray-600 leading-relaxed">
							Hi, I'm{" "}
							<span className="font-semibold text-gray-900">
								{aboutMe?.introduction?.name}
							</span>{" "}
							— {aboutMe?.introduction?.text}
						</p>

						<p className="text-lg text-gray-600 leading-relaxed">
							{aboutMe?.description}
						</p>

						<div className="pt-4">
							<p className="text-lg font-medium text-gray-900">
								{aboutMe?.mission}
							</p>
						</div>
					</div>

					{/* RIGHT SIDE */}
					<div className="grid gap-6">
						{aboutMe?.experiences?.map((item, idx) => {
							const Icon = experienceIcons[item.icon];
							return (
								<div
									key={idx}
									className="flex cursor-pointer items-center gap-4 p-6 rounded-2xl border border-gray-100 
                           hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-gray-50"
								>
									<div
										className="w-12 h-12 rounded-xl bg-primary/10 text-primary 
                                flex items-center justify-center text-xl"
									>
										<Icon />
									</div>

									<div>
										<p className="text-lg font-semibold text-gray-900">
											{item?.title}
										</p>
										<p className="text-sm text-gray-500">{item.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
