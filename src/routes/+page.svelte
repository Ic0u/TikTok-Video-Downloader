<script lang="ts">
	import { Loader2, CheckCircle2, AlertCircle, Download, Link, Clipboard } from 'lucide-svelte';
	import CorgiSitting from '$lib/components/CorgiSitting.svelte';
	import DownloadModal from '$lib/components/DownloadModal.svelte';
	import type { VideoResult } from '$lib/api/downloader';

	let tiktokUrl = '';
	let status = '';
	let loading = false;
	let statusType: 'idle' | 'loading' | 'success' | 'error' = 'idle';
	let result: VideoResult | null = null;
	let showModal = false;
	let inputEl: HTMLInputElement;
	let pasteError = false;

	async function handleDownload() {
		if (!tiktokUrl) return;
		loading = true;
		status = '';
		statusType = 'idle';
		result = null;
		showModal = false;

		try {
			const res = await fetch('/api/download', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ url: tiktokUrl })
			});

			const ct = res.headers.get('content-type') || '';
			if (!ct.includes('application/json')) {
				throw new Error('Server returned an unexpected response. Please try again.');
			}

			const data = await res.json();
			if (data.error) throw new Error(data.error);

			result = data.result;
			showModal = true;
			status = '';
			statusType = 'idle';
		} catch (e: any) {
			status = e.message || 'something went wrong';
			statusType = 'error';
		} finally {
			loading = false;
		}
	}

	function closeModal() {
		showModal = false;
	}

	async function handlePaste() {
		pasteError = false;

		if (navigator.clipboard && typeof navigator.clipboard.readText === 'function') {
			try {
				const text = await navigator.clipboard.readText();
				if (text) { tiktokUrl = text; return; }
			} catch { /* fall through */ }
		}

		const ta = document.createElement('textarea');
		ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;pointer-events:none;';
		document.body.appendChild(ta);
		ta.focus();
		const pasted = document.execCommand('paste');
		const text = ta.value;
		document.body.removeChild(ta);

		if (pasted && text) {
			tiktokUrl = text;
			return;
		}

		pasteError = true;
		setTimeout(() => pasteError = false, 3000);
	}

	function downloadVideo(url: string, filename: string = 'video.mp4') {
		const proxyUrl = `/api/download?url=${encodeURIComponent(url)}`;
		const a = document.createElement('a');
		a.href = proxyUrl;
		a.download = filename;
		a.target = '_blank';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
</script>

<svelte:head>
	<title>TTVD v3</title>
	<meta name="description" content="Download media without watermark in high quality." />
</svelte:head>

<!-- Center -->
<div class="center-area">
	<!-- Corgi Mascot -->
	<div class="mascot">
		<CorgiSitting />
	</div>

	<!-- Download Section -->
	<div class="download-input-wrap">
		<div class="input-field">
			<span class="link-icon"><Link size={16} /></span>
			<input
				bind:this={inputEl}
				type="text"
				placeholder="paste the link here"
				bind:value={tiktokUrl}
				on:keypress={(e) => e.key === 'Enter' && handleDownload()}
			/>
		</div>

		<div class="action-row">
			<button class="btn-download" disabled={loading || !tiktokUrl} on:click={handleDownload}>
				{#if loading}
					<span style="display: inline-flex; animation: spin 1s linear infinite;">
						<Loader2 size={14} />
					</span>
					processing
				{:else}
					<Download size={14} />
					download
				{/if}
			</button>

			<button class="btn-paste" on:click={handlePaste}>
				<Clipboard size={14} />
				paste
			</button>
		</div>

		{#if pasteError}
			<div class="status-text" style="color: var(--accent-spark);">
				<AlertCircle size={12} />
				allow clipboard access in browser settings, or paste manually (Ctrl+V / ⌘V)
			</div>
		{/if}

		{#if status}
			<div class="status-text">
				{#if statusType === 'loading'}
					<Loader2 size={12} class="spin" />
				{:else if statusType === 'success'}
					<CheckCircle2 size={12} />
				{:else if statusType === 'error'}
					<AlertCircle size={12} />
				{/if}
				{status}
			</div>
		{/if}
	</div>
</div>

<!-- Download Modal -->
{#if showModal && result}
	<DownloadModal
		{result}
		onClose={closeModal}
		onDownload={downloadVideo}
	/>
{/if}
