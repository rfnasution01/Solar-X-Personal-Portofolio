import { profile } from "@/data/profile";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { FaMailBulk } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";

export function HeroSection() {
	return (
		<>
			<section
				id="hero"
				className="min-h-screen bg-neutral-950 flex items-center"
			>
				<div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* LEFT */}
						<div>
							<h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
								{profile?.headline}
								<span className="block text-[#4b49ac]">
									{profile?.subHeadline}
								</span>
							</h1>

							<p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed">
								{profile?.description}
							</p>

							<div className="mt-12 flex flex-col sm:flex-row gap-4">
								<button
									onClick={() => smoothScrollTo("projects")}
									className="px-8 flex items-center gap-2 py-4 rounded-xl bg-[#4b49ac] hover:bg-[#4b49ac]/80 text-white font-semibold text-lg transition-colors"
								>
									<FaRocket /> View My Work
								</button>

								<button
									onClick={() => smoothScrollTo("contact")}
									className="px-8 flex items-center justify-center gap-2 py-4 rounded-xl border border-white/20 hover:bg-neutral-800 text-white font-semibold text-lg transition-colors"
								>
									<FaMailBulk /> Let's Work Together
								</button>
							</div>
						</div>

						{/* RIGHT */}
						<div className="flex justify-center">
							<img
								src={profile?.image}
								className="w-[30rem] animate-float"
								alt="Hero Image"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* WAVE */}
			<div className="bg-neutral-950">
				<svg
					viewBox="0 0 1440 320"
					className="w-full h-52"
					preserveAspectRatio="none"
				>
					<path
						fill="#ffffff"
						d="M0,200 C300,260 900,80 1440,180 L1440,320 L0,320 Z"
					/>
				</svg>
			</div>
		</>
	);
}
