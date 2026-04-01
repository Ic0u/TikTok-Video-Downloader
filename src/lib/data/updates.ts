export interface UpdateChange {
	heading: string;
	text: string;
}

export interface Update {
	version: string;
	date: string;
	title: string;
	/** Optional hero image shown below the title */
	image?: string;
	body: string;
	changes: UpdateChange[];
}

export const updates: Update[] = [
	{
		version: '3.2',
		date: 'March 31, 2026',
		title: 'new UI, processing queue, and more',
		image: 'https://scontent.fsgn5-12.fna.fbcdn.net/v/t51.82787-15/647688970_17981328278976090_6554782444907282320_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGF6dxiJnZbIXMHKwxPu-KR2H1bi5wcE43YfVuLnBwTjW47MPWW-qd1vzy72qYZeIaGufj9F1mD90blC7fMNPJd&_nc_ohc=35i85hpru3IQ7kNvwHiKuGf&_nc_oc=Adr3P47IJvDhvzAGJ4z5zI_afXlvnBJY8LdVcOw6nWaw4gPb39I97vv4ObJ27Vz5lCs&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=rqO5Q0Pp-fSvf_PeM6mLtA&_nc_ss=7a3a8&oh=00_AfxXr5ck34uOIcmDexByNHPOCKhfwBp5OWCNUIvkXWYo3g&oe=69D0F1FC',
		body: `it's a fresh start! we completely redesigned TTVD from the ground up with a new interface. the whole app now uses IBM Plex Mono and a minimal dark aesthetic.`,
		changes: [
			{ heading: 'redesigned interface', text: 'new sidebar navigation, corgi mascot, and a cleaner download flow. everything feels faster and more intentional.' },
			{ heading: 'processing queue', text: 'a new panel (beta) that tracks your download history in the current session. accessible from the top-right corner.' },
			{ heading: 'supported services panel', text: 'click "+ supported services" at the top to see all platforms we support sideloading medias. more coming soon.' },
			{ heading: 'paste button', text: 'one-click paste from clipboard — no more ctrl+v fumbling.' }
		]
	},
	{
		version: '3.1',
		date: 'March 28, 2026',
		title: 'dark mode, profile images, and bug fixes',
		image: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/638993755_1646424719877301_5547838500568988536_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGhC0edn9ZqV1gzSwAblEaSNhKIqTsovIc2EoipOyi8h4rTwpgAaslmkadWu6NCTIZdvZbssRAjPc1IToZowXJb&_nc_ohc=HY7G-6A08MEQ7kNvwHZqba9&_nc_oc=AdpT3ecKWym3MREmtMem1N-sDhH2V8MkGH_pZKVFJO1N4P52fOj_bY8OaQltGMu6jvo&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=17ehvTBYlemQw171zPCBDA&_nc_ss=7a3a8&oh=00_AfxM6i7_jWc1XYD5O1a1WewbR2x1ewTHkaVedGl3AcJUXw&oe=69D0E093',
		body: `switched the entire app to dark mode by default. fixed profile image paths and added proper avatar rendering for the about section.`,
		changes: [
			{ heading: 'dark mode', text: 'full dark theme with School of Athens background painting. inverted color tokens for readability.' },
			{ heading: 'avatar rendering', text: 'fixed zoom and cropping issues for team member profile images.' }
		]
	},
	{
		version: '3.0',
		date: 'March 28, 2026',
		title: 'initial SvelteKit migration',
		image: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/65313230_2535613583117046_3905686088949170176_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f7fc3c&_nc_eui2=AeGrbhSJYokfU_kPodNWL49u8RthOdhZ_dPxG2E52Fn909vrgHIfT_qkW4VPlFY96Ah71GTld_usfoUYj299HEO4&_nc_ohc=se4ESt38vloQ7kNvwEjQFsc&_nc_oc=AdqHH8KnBA1RipTT3WMhr_MnBb2kktDTX8ENhICdTEGUy3NOgvDphxJWUiMg9NfQM5g&_nc_zt=23&_nc_ht=scontent.fsgn5-11.fna&_nc_gid=8-Np3183Hps5lJSgPAomRw&_nc_ss=7a3a8&oh=00_Af1pkrd0h6MHPG-7UzVzsjBxl4CGEvT0tSYTS2p0CQ34yA&oe=69F49066',
		body: `migrated the entire website from vanilla HTML/JS to SvelteKit with TypeScript front-end stack. Rewrite the API in Rust and hosting though my beloved m2 pro mac mini <3 `,
		changes: [
			{ heading: 'SvelteKit framework', text: 'moved to a proper component-based architecture with server-side API routes.' },
			{ heading: 'snaptik integration', text: 'backend API that handles video extraction, HD source resolution, and slideshow detection.' },
			{ heading: 'video + slideshow support', text: 'download regular TikTok videos or browse slideshow photos in a grid.' }
		]
	},
	{
		version: '2.0',
		date: 'Aug 22, 2022',
		title: 'the glow up',
		image: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/607480877_25848084131470614_6229830023363080593_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeFelPy11VfaiCQtbmKnvXKaBrymY16_pLYGvKZjXr-ktiZMkzvV2Znu1lJnVZLLVltIhRWFTZ0Uhbmti4aDG2HY&_nc_ohc=v0CXOnv4cbMQ7kNvwHmdgvu&_nc_oc=AdpJLNTO3fS2YoPj8f4zbi6qer0ljBgTky-fv2uu_1Vm7he-_zX4vIIDRClQAD7WaD0&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=UeIFZLLedeir2VPm5lylhg&_nc_ss=7a3a8&oh=00_Af1kstwW7xXdQZtZgTu-nGxSj0o-4x13Vvh88qqBZFiV0A&oe=69D2DC0E',
		body: `v2 brought much-needed visual improvements with better CSS and more streamlined presets. we also figured out how to auto-extract the direct input of the video with the best settings right out of the gate.`,
		changes: [
			{ heading: 'improved css', text: 'gave the interface a proper styling pass to make it actually look good.' },
			{ heading: 'auto-extraction', text: 'the app now automatically parses the direct input of the video, saving you an extra step.' },
			{ heading: 'better presets', text: 'dialed in the best settings by default so you get high-quality downloads immediately.' }
		]
	},
	{
		version: '1.0',
		date: 'Feb 12, 2022',
	    image: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/659075149_26729388560006829_2873762336618432374_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e06c5d&_nc_eui2=AeFyCDRAkV2eZmYjmxvqIkWQN1gkl3KAhPw3WCSXcoCE_AjDFLDdVNdbV_qhqrmC_fiLeurW0w0gRbPhrNYVMMI-&_nc_ohc=KCCPjczv8CQQ7kNvwGsq1-2&_nc_oc=AdphwqeVF6waNEB3XvFIGi4El4n_3C_8ZvXigOpo6k4EnYG4A3TK2iQIluMwlh0NUQY&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=DWmLMQJ0D04XsnGIy_irWQ&_nc_ss=7a3a8&oh=00_Af0RNbtao-cLg1bUMjwL8mKGqHKZQnPg6S3t7OcA7yJhvA&oe=69D2C967',
		title: 'the learning project',
		body: `the very beginning. v1 was just a learning project built with my friend Hoàng Cát. we used it as an excuse to study REST architecture, learn about backend concepts, and figure out how to call the TikTok API.`,
		changes: [
			{ heading: 'api calling & rest', text: 'our first real deep dive into how REST APIs work post,get,hosting api microservices and how to interact with a backend.' },
			{ heading: 'tiktok download api', text: 'successfully connected to and pulled data from the tiktok download API for the first time.' },
			{ heading: 'built with Cát', text: 'a collaborative learning effort to get the hang of web development basics together.' }
		]
	}
];