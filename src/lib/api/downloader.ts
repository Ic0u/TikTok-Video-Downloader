const API_BASE = 'https://down-video.yagilogin.com';
const EXTRACT_TIMEOUT = 30_000; // 30 seconds

export interface DownloadLink {
	label: string;
	url: string;
	quality: string;
	filesize: number;
	ext?: string;
}

export interface AudioInfo {
	url: string;
	ext: string;
	abr: number;
	filesize: number;
}

export interface MusicInfo {
	title: string;
	author: string;
	url: string;
}

export interface VideoResult {
	platform: string;
	video_id: string;
	title: string;
	author: string;
	thumbnail: string;
	duration: number;
	statistics: { views: number; likes: number; comments: number; shares?: number };
	downloads: DownloadLink[];
	audio?: AudioInfo;
	music?: MusicInfo;
}

/** Extract video info and download links from a video URL via down-video API. */
export async function extractVideo(url: string): Promise<VideoResult> {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), EXTRACT_TIMEOUT);

	try {
		const res = await fetch(`${API_BASE}/api/extract`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ url }),
			signal: controller.signal
		});

		const contentType = res.headers.get('content-type') || '';
		if (!contentType.includes('application/json')) {
			console.error('External API returned non-JSON response:', res.status, contentType);
			throw new Error('Download server returned an unexpected response. Please try again later.');
		}

		const data = await res.json();

		if (!res.ok || data.error) {
			throw new Error(data.error || 'Video extraction failed');
		}

		return data as VideoResult;
	} catch (e: unknown) {
		if (e instanceof DOMException && e.name === 'AbortError') {
			throw new Error('Server is taking too long to respond. Please try again later.');
		}
		if (e instanceof TypeError && (e.message.includes('fetch failed') || e.message.includes('ECONNREFUSED'))) {
			throw new Error('Cannot reach the download server. It may be temporarily down.');
		}
		throw e;
	} finally {
		clearTimeout(timeout);
	}
}

/** Build a proxied download URL through our own /api/download endpoint. */
export function proxyDownloadUrl(directUrl: string): string {
	return `/api/download?url=${encodeURIComponent(directUrl)}`;
}
