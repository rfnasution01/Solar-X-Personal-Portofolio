import { reasons } from "@/data/reasons";

export function WhyWorkMeSection() {
	return (
		<section id="reasons" className="relative py-24 md:py-32 bg-white">
			<div className="max-w-6xl mx-auto px-6 md:px-12">
				{/* Heading */}
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
							{reasons?.title}
						</h2>
						<p className="mt-6 text-lg text-gray-600 leading-relaxed">
							{reasons?.description}
						</p>
					</div>

					{/* Checklist */}
					<div className="space-y-6">
						{reasons?.items?.map((item, idx) => (
							<div key={idx} className="flex items-start gap-4">
								<div className="w-6 h-6 mt-1 rounded-full bg-[#4b49ac]/20 flex items-center justify-center">
									<div className="w-2.5 h-2.5 rounded-full bg-[#4b49ac]" />
								</div>
								<p className="text-gray-700 text-lg">{item}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
