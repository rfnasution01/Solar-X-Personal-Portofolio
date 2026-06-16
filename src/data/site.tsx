import type { IconType } from "react-icons";
import {
	FaBookOpen,
	FaBriefcase,
	FaBuilding,
	FaCompass,
	FaDraftingCompass,
	FaDrawPolygon,
	FaEnvelope,
	FaExclamationTriangle,
	FaFileAlt,
	FaGlobeAmericas,
	FaGraduationCap,
	FaHardHat,
	FaHome,
	FaLinkedin,
	FaMapMarkedAlt,
	FaMountain,
	FaPhone,
	FaShieldAlt,
	FaTools,
	FaTruckLoading,
	FaTruckMoving,
	FaWhatsapp,
} from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { SiArcgis, SiAutodesk, SiSap } from "react-icons/si";

export const SITE_DATA = {
	theme: {
		primary: "#99FF06",
		background: "#010101",
		backgroundSecondary: "#4A4A53",
	},
	menu: [
		{ name: "Home", url: "#home", icon: FaHome },
		{ name: "About Me", url: "#about-me", icon: FaGraduationCap },
		{ name: "Skills", url: "#skills", icon: GrPersonalComputer },
		{ name: "Portfolio", url: "#portfolio", icon: FaBriefcase },
		{ name: "Contact", url: "#contact", icon: FaPhone },
	] satisfies { name: string; url: string; icon: IconType }[],
	hero: {
		headlines: [
			"Alex Morgan, B.Eng.",
			"Mining Engineer",
			"Mine Planner",
			"Operations Supervisor",
		],
		title: "Driving safe, efficient, and sustainable mining operations.",
		description:
			"I optimize open-pit layouts, improve haulage productivity, and apply practical safety systems that help mining teams deliver reliable production results.",
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
		phone: "6281234567890",
	},
	about: {
		title: "About Me",
		description:
			"I am a dedicated mining engineer focused on resource optimization, site safety, and operational discipline. My work combines open-pit planning, fleet coordination, survey data, and environmental compliance to support productive and responsible mining operations.",
		education: {
			degree: "Bachelor of Engineering in Mining Engineering",
			institution: "National School of Mines",
			period: "2018 - 2022",
			gpa: "3.75",
			icon: FaHardHat,
		},
		experience: [
			{
				role: "Senior Mine Planner",
				company: "North Ridge Minerals",
				period: "Apr 2024 - Present",
				icon: FaMountain,
			},
			{
				role: "Mining Engineer",
				company: "Summit Coal Operations",
				period: "Aug 2023 - Mar 2024",
				icon: FaBuilding,
			},
			{
				role: "Operations Supervisor",
				company: "Iron Valley Resources",
				period: "Apr 2023 - Jul 2023",
				icon: FaHardHat,
			},
			{
				role: "Survey Engineer",
				company: "TerraPoint Survey Services",
				period: "Dec 2022 - Mar 2023",
				icon: FaMapMarkedAlt,
			},
		],
	},
	skills: {
		title: "Technical Skills",
		description:
			"My skill set covers mining software, production supervision, field reporting, and compliance practices required to run safe and high-yield extraction programs.",
		stats: [
			{ label: "Years Experience", value: "5+" },
			{ label: "Project Sites", value: "12+" },
			{ label: "Safety Hours", value: "10k+" },
		],
		categories: [
			{
				title: "Mining Software & Planning",
				items: [
					{ name: "Surpac", icon: FaDrawPolygon },
					{ name: "Minescape", icon: FaMountain },
					{ name: "AutoCAD", icon: SiAutodesk },
					{ name: "ArcGIS", icon: SiArcgis },
				],
			},
			{
				title: "Operational Management",
				items: [
					{ name: "Fleet Management", icon: FaTruckLoading },
					{ name: "Pit Supervision", icon: FaShieldAlt },
					{ name: "Cost Control", icon: SiSap },
					{ name: "Geological Survey", icon: FaCompass },
				],
			},
			{
				title: "Reporting & Compliance",
				items: [
					{ name: "Mine Safety", icon: FaShieldAlt },
					{ name: "Environmental Reporting", icon: FaGlobeAmericas },
					{ name: "Feasibility Studies", icon: FaFileAlt },
				],
			},
		],
	},
	portfolio: {
		title: "Mining Projects",
		description:
			"Selected planning, operations, and digital mining projects that demonstrate practical engineering, safety awareness, and measurable site improvement.",
		blogs: [
			{
				title: "Optimizing Open-Pit Slope Stability in Tropical Climates",
				url: "https://www.mining-technology.com/features/open-pit-mining-safety/",
				publishedAt: "2026-01-12",
				icon: FaBookOpen,
			},
			{
				title: "Advanced Fleet Dispatching for Lower Fuel Consumption",
				url: "https://www.caterpillar.com/en/news/caterpillarNews/customer-dealer-product/mining-technology-autonomy.html",
				publishedAt: "2025-11-05",
				icon: FaBookOpen,
			},
			{
				title: "Applying ESG Standards in Modern Mining Operations",
				url: "https://www.icmm.com/en-gb/our-principles",
				publishedAt: "2025-09-20",
				icon: FaBookOpen,
			},
		],
		projects: [
			{
				title: "Open-Pit Mine Plan - Alpha Site",
				url: "https://www.mining-technology.com/projects/",
				description: "Long-term pit sequencing and production schedule optimization.",
				icon: FaMountain,
			},
			{
				title: "Fleet Management System - Hauling",
				url: "https://www.caterpillar.com/en/brands/cat-mine-star.html",
				description: "Dispatch logic and utilization tracking for heavy equipment fleets.",
				icon: FaTruckMoving,
			},
			{
				title: "Geological Block Model Review",
				url: "https://www.seequent.com/products-solutions/geovia-surpac/",
				description: "Resource model validation and ore-grade reconciliation workflow.",
				icon: FaDraftingCompass,
			},
			{
				title: "HSE Monitoring Dashboard",
				url: "https://www.iso.org/standard/63787.html",
				description: "Safety observation tracking and corrective-action reporting.",
				icon: FaExclamationTriangle,
			},
			{
				title: "Equipment Maintenance Scheduler",
				url: "https://www.ibm.com/topics/preventive-maintenance",
				description: "Preventive maintenance planning for excavators and dump trucks.",
				icon: FaTools,
			},
		],
	},
	contact: {
		headline: "Let’s Build Something Great Together",
		description: "Open for consulting, collaboration, or a practical mining technology discussion.",
		whatsapp: "6281234567890",
		linkedin: "https://www.linkedin.com/company/society-for-mining-metallurgy-exploration-inc-sme-/",
		email: "alex.morgan@mining-engineer.example",
		channels: [
			{ type: "whatsapp", label: "WhatsApp", icon: FaWhatsapp },
			{ type: "linkedin", label: "LinkedIn", icon: FaLinkedin },
			{ type: "email", label: "Email", icon: FaEnvelope },
		],
	},
} as const;
