import type { JSX } from "react";
import { FaHome } from "react-icons/fa";
import { FaBriefcase, FaGraduationCap, FaPhone } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";

export type MenuType = {
	nama: string;
	url: string;
	icon: JSX.Element;
};

export const Menu: MenuType[] = [
	{
		nama: "Home",
		url: "#home",
		icon: <FaHome size={20} />,
	},
	{
		nama: "About Me",
		url: "#about-me",
		icon: <FaGraduationCap size={20} />,
	},
	{
		nama: "Skills",
		url: "#skills",
		icon: <GrPersonalComputer size={20} />,
	},
	{
		nama: "Portfolio",
		url: "#portfolio",
		icon: <FaBriefcase size={20} />,
	},

	{
		nama: "Contact",
		url: "#contact",
		icon: <FaPhone size={20} />,
	},
];
