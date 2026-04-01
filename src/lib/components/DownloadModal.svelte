<script lang="ts">
	import { Download, Music, X, Eye, Heart, MessageCircle } from 'lucide-svelte';
	import CorgiMascot from './CorgiMascot.svelte';
	import type { VideoResult } from '$lib/api/downloader';

	export let result: VideoResult;
	export let onClose: () => void;
	export let onDownload: (url: string, filename: string) => void;

	function formatFileSize(bytes: number): string {
		if (!bytes) return '';
		if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
		return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
	}

	function formatCount(n: number): string {
		if (!n) return '0';
		if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
		if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
		return n.toString();
	}

	function handleBackdrop(e: MouseEvent) {
		if (e.target === e.currentTarget) onClose();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') onClose();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="modal-backdrop" on:click={handleBackdrop}>
	<div class="modal-container">
		<!-- Close Button -->
		<button class="modal-close-btn" on:click={onClose} title="Close">
			<X size={18} />
		</button>

		<!-- Mascot -->
		<div class="modal-mascot">
			<CorgiMascot width={110} />
		</div>

		<!-- Title -->
		<h2 class="modal-title">
			<Download size={18} />
			choose how to save
		</h2>

		<!-- Video Info -->
		{#if result.title || result.author}
			<div class="modal-video-info">
				{#if result.thumbnail}
					<img src={result.thumbnail} alt="" class="modal-thumb" />
				{/if}
				<div class="modal-meta">
					<p class="modal-video-title">{result.title || 'Untitled'}</p>
					<p class="modal-video-author">@{result.author || 'unknown'} · {result.platform}</p>
					{#if result.statistics}
						<div class="modal-stats">
							<span><Eye size={11} /> {formatCount(result.statistics.views)}</span>
							<span><Heart size={11} /> {formatCount(result.statistics.likes)}</span>
							<span><MessageCircle size={11} /> {formatCount(result.statistics.comments)}</span>
						</div>
					{/if}
				</div>
			</div>
		{/if}

		<!-- Download Options -->
		<div class="modal-options">
			{#each result.downloads as dl, i}
				<button
					class="modal-option-btn"
					style="animation-delay: {0.08 + i * 0.06}s"
					on:click={() => onDownload(dl.url, `${result.author || 'video'}_${dl.quality}.${dl.ext || 'mp4'}`)}
				>
					<Download size={15} />
					<span class="option-label">{dl.label}</span>
					{#if dl.filesize}
						<span class="option-size">{formatFileSize(dl.filesize)}</span>
					{/if}
				</button>
			{/each}

			{#if result.audio}
				<button
					class="modal-option-btn audio"
					style="animation-delay: {0.08 + result.downloads.length * 0.06}s"
					on:click={() => onDownload(result.audio?.url || '', `${result.author || 'audio'}.${result.audio?.ext || 'mp3'}`)}
				>
					<Music size={15} />
					<span class="option-label">audio only</span>
					{#if result.audio.filesize}
						<span class="option-size">{formatFileSize(result.audio.filesize)}</span>
					{/if}
				</button>
			{/if}
		</div>

		<!-- Done button -->
		<button class="modal-done-btn" on:click={onClose}>
			done
		</button>
	</div>
</div>

<style>
	.modal-backdrop {
		position: fixed;
		inset: 0;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		animation: backdropIn 0.3s ease forwards;
		padding: 20px;
	}

	.modal-container {
		position: relative;
		background: var(--bg-elevated);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: 36px 32px 28px;
		width: 100%;
		max-width: 480px;
		max-height: 85vh;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		box-shadow: 0 32px 100px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05);
		animation: modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		scrollbar-width: none;
	}

	.modal-container::-webkit-scrollbar {
		display: none;
	}

	/* Close Button */
	.modal-close-btn {
		position: absolute;
		top: 14px;
		right: 14px;
		background: none;
		border: none;
		color: var(--text-dim);
		cursor: pointer;
		padding: 4px;
		border-radius: var(--radius-sm);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: color 0.2s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
		z-index: 2;
	}

	.modal-close-btn:hover {
		color: var(--text);
		transform: rotate(90deg);
	}



	/* Mascot */
	.modal-mascot {
		margin-bottom: 18px;
		opacity: 0;
		animation: mascotBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s forwards;
	}

	/* Title */
	.modal-title {
		font-size: 16px;
		font-weight: 600;
		color: var(--text);
		margin-bottom: 18px;
		display: flex;
		align-items: center;
		gap: 10px;
		opacity: 0;
		animation: fadeUp 0.4s ease 0.25s forwards;
	}

	/* Video Info */
	.modal-video-info {
		display: flex;
		gap: 14px;
		width: 100%;
		padding: 14px 16px;
		background: var(--bg);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		margin-bottom: 20px;
		text-align: left;
		opacity: 0;
		animation: fadeUp 0.4s ease 0.3s forwards;
	}

	.modal-thumb {
		width: 64px;
		height: 64px;
		border-radius: 8px;
		object-fit: cover;
		flex-shrink: 0;
	}

	.modal-meta {
		flex: 1;
		min-width: 0;
		overflow: hidden;
	}

	.modal-video-title {
		font-size: 12px;
		font-weight: 500;
		color: var(--text);
		line-height: 1.5;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.modal-video-author {
		font-size: 11px;
		color: var(--text-muted);
		margin-top: 3px;
	}

	.modal-stats {
		display: flex;
		gap: 10px;
		font-size: 10px;
		color: var(--text-dim);
		margin-top: 6px;
	}

	.modal-stats span {
		display: flex;
		align-items: center;
		gap: 3px;
	}

	/* Download Options Grid */
	.modal-options {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8px;
		width: 100%;
		margin-bottom: 20px;
	}

	.modal-option-btn {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 13px 16px;
		background: var(--bg);
		border: 1px solid var(--border-strong);
		border-radius: var(--radius);
		color: var(--text);
		font-family: var(--font);
		font-size: 12px;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
		text-align: left;
		white-space: nowrap;
		opacity: 0;
		transform: translateY(8px);
		animation: optionSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	.modal-option-btn:hover {
		border-color: rgba(255, 255, 255, 0.4);
		background: var(--bg-hover);
		transform: translateY(-2px) scale(1.02);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
	}

	.modal-option-btn:active {
		transform: translateY(0) scale(0.98);
	}

	.modal-option-btn.audio {
		grid-column: 1 / -1;
		justify-content: center;
		border-style: dashed;
	}

	.option-label {
		flex: 1;
	}

	.option-size {
		font-size: 10px;
		opacity: 0.4;
		font-weight: 400;
	}

	/* Done Button */
	.modal-done-btn {
		width: 100%;
		padding: 14px;
		background: var(--text);
		color: var(--bg);
		border: none;
		border-radius: var(--radius);
		font-family: var(--font);
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.25s ease;
		opacity: 0;
		animation: fadeUp 0.4s ease 0.5s forwards;
	}

	.modal-done-btn:hover {
		opacity: 0.85;
		transform: translateY(-2px);
		box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
	}

	.modal-done-btn:active {
		transform: translateY(0);
	}

	/* ─── Animations ─── */
	@keyframes backdropIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes modalIn {
		from {
			opacity: 0;
			transform: scale(0.88) translateY(24px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}



	@keyframes mascotBounce {
		0% {
			opacity: 0;
			transform: scale(0.7) translateY(16px);
		}
		70% {
			opacity: 0.9;
			transform: scale(1.05) translateY(-4px);
		}
		100% {
			opacity: 0.85;
			transform: scale(1) translateY(0);
		}
	}

	@keyframes fadeUp {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes optionSlideIn {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* ─── Responsive ─── */
	@media (max-width: 520px) {
		.modal-backdrop {
			padding: 0;
			align-items: flex-end;
		}

		.modal-container {
			max-width: 100%;
			max-height: 92vh;
			border-radius: var(--radius-lg) var(--radius-lg) 0 0;
			padding: 32px 20px 24px;
			animation: modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		}

		.modal-options {
			grid-template-columns: 1fr;
		}

		.modal-thumb {
			width: 52px;
			height: 52px;
		}
	}

	@media (max-width: 380px) {
		.modal-container {
			padding: 28px 16px 20px;
		}
		.modal-title {
			font-size: 14px;
		}
		.modal-option-btn {
			padding: 11px 12px;
			font-size: 11px;
		}
	}

	@keyframes modalSlideUp {
		from {
			opacity: 0;
			transform: translateY(100%);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
