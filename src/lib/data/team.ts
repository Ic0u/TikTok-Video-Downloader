export interface TeamLink {
	label: string;
	href: string;
	icon: 'github' | 'facebook';
}

export interface TeamMember {
	name: string;
	role: string;
	bio: string;
	avatar: string;
	/** Per-member avatar CSS overrides */
	avatarStyle?: string;
	links: TeamLink[];
}

export const teamMembers: TeamMember[] = [
	{
		name: 'Nguyễn Nam',
		role: 'software developer',
		bio: 'builds things that work. passionate about clean code, open-source tools, and making the internet a little better.',
		avatar: '/static/nam.png',
		avatarStyle: 'transform: scale(1.4); transform-origin: center 50%;',
		links: [
			{ label: 'github', href: 'https://github.com/Ic0u', icon: 'github' },
			{ label: 'facebook', href: 'https://www.facebook.com/nam.nguyen2208', icon: 'facebook' }
		]
	},
	{
		name: 'Lê Hoàng Cát',
		role: 'philosopher',
		bio: 'thinks about the big questions. interested in ethics, technology, and how tools shape the way we see the world.',
		avatar: '/static/cat.jpg',
		avatarStyle: 'transform: none; object-position: center 40%;',
		links: [
			{ label: 'github', href: 'https://github.com/Sand-Dog', icon: 'github' },
			{ label: 'facebook', href: 'https://www.facebook.com/cat.hoangle.3', icon: 'facebook' }
		]
	}
];
