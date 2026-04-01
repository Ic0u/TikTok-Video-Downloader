import { json } from '@sveltejs/kit';
import { extractVideo } from '$lib/api/downloader';

const API_BASE = 'https://down-video.yagilogin.com';

export async function POST({ request }) {
	try {
		const { url } = await request.json();
		if (!url) return json({ error: 'URL is required' }, { status: 400 });

		const result = await extractVideo(url);
		return json({ result });
	} catch (e: unknown) {
		const message = e instanceof Error ? e.message : 'Internal server error';
		console.error('Download error:', e);
		return json({ error: message }, { status: 500 });
	}
}


export async function GET({ url: requestUrl }) {
	const videoUrl = requestUrl.searchParams.get('url');
	if (!videoUrl) {
		return json({ error: 'Missing url parameter' }, { status: 400 });
	}

	try {
		const proxyUrl = `${API_BASE}/api/download?url=${encodeURIComponent(videoUrl)}`;
		const res = await fetch(proxyUrl);

		if (!res.ok) {
			return json({ error: 'Download failed' }, { status: res.status });
		}

		return new Response(res.body, {
			headers: {
				'Content-Type': res.headers.get('Content-Type') || 'video/mp4',
				'Content-Disposition': res.headers.get('Content-Disposition') || 'attachment; filename="video.mp4"',
				...(res.headers.get('Content-Length') ? { 'Content-Length': res.headers.get('Content-Length')! } : {})
			}
		});
	} catch (e: unknown) {
		const message = e instanceof Error ? e.message : 'Proxy download failed';
		console.error('Proxy error:', e);
		return json({ error: message }, { status: 500 });
	}
}
