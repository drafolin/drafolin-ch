import Baselfurs from "@/assets/img/baselfurs.png";

export type Project = {
	name: string;
	url: URL;
	description: string;
	image?: string;
};

export const projects = [
	{
		name: "BaselFurs Website",
		url: new URL("https://baselfurs.ch/"),
		description: "This website is used for the furry community in the Basel region, to list events and to register to them!",
		image: Baselfurs
	},
] as Project[];

export default projects;
