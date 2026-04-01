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
		image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/The-Last-Supper-Restored-Da-Vinci_32x16.jpg',
		body: `migrated the entire app from vanilla HTML/JS to SvelteKit with TypeScript. integrated the Snaptik API for watermark-free downloads.`,
		changes: [
			{ heading: 'SvelteKit framework', text: 'moved to a proper component-based architecture with server-side API routes.' },
			{ heading: 'snaptik integration', text: 'backend API that handles video extraction, HD source resolution, and slideshow detection.' },
			{ heading: 'video + slideshow support', text: 'download regular TikTok videos or browse slideshow photos in a grid.' }
		]
	},
	{
		version: '2.0',
		date: 'August 22, 2022',
		title: 'the glow up',
		image: 'https://media.discordapp.net/attachments/1381493490784931952/1488375070492463265/image.png?ex=69cc8ccd&is=69cb3b4d&hm=df936e2ee1cd30a87fe23a1603c59a2e357ea0e24481ce79b1060afad9259165&=&format=webp&quality=lossless&width=1607&height=904',
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
	    image: 'https://vnrom.net/wp-content/uploads/2025/10/Douyin_TikTok_Download_API_Docs-1024x827.png',
		title: 'the learning project',
		body: `the very beginning. v1 was just a learning project built with my friend Cát. we used it as an excuse to study REST architecture, learn about backend concepts, and figure out how to call the TikTok download API.`,
		changes: [
			{ heading: 'api calling & rest', text: 'our first real deep dive into how REST APIs work post,get,hosting api microservices and how to interact with a backend.' },
			{ heading: 'tiktok download api', text: 'successfully connected to and pulled data from the tiktok download API for the first time.' },
			{ heading: 'built with Cát', text: 'a collaborative learning effort to get the hang of web development basics together.' }
		]
	}
];