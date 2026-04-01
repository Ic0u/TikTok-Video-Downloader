<script lang="ts">
	import { X } from 'lucide-svelte';
	import CorgiMascot from './CorgiMascot.svelte';

	export let onClose: () => void;

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
		<!-- Close -->
		<button class="modal-close-btn" on:click={onClose} title="Close">
			<X size={18} />
		</button>

		<!-- Mascot -->
		<div class="modal-mascot">
			<CorgiMascot width={110} />
		</div>

		<!-- Title -->
		<h2 class="modal-title">coming soon</h2>
		<p class="modal-subtitle">we're working on this feature — stay tuned!</p>

		<!-- Done -->
		<button class="modal-done-btn" on:click={onClose}>
			got it
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
		padding: 24px 20px 20px;
		width: 100%;
		max-width: 320px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		box-shadow: 0 32px 100px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05);
		animation: modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	.modal-close-btn {
		position: absolute;
		top: 10px;
		right: 10px;
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

	.modal-mascot {
		margin-bottom: 16px;
	}
	
	.modal-mascot :global(svg) {
		width: 80px;
		height: auto;
	}

	.modal-title {
		font-size: 16px;
		font-weight: 600;
		color: var(--text);
		margin-bottom: 6px;
	}

	.modal-subtitle {
		font-size: 11px;
		color: var(--text-muted);
		margin-bottom: 20px;
		line-height: 1.4;
	}

	.modal-done-btn {
		width: 100%;
		padding: 10px;
		background: var(--text);
		color: var(--bg);
		border: none;
		border-radius: var(--radius);
		font-family: var(--font);
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.25s ease;
	}

	.modal-done-btn:hover {
		opacity: 0.85;
		transform: translateY(-2px);
		box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
	}

	.modal-done-btn:active {
		transform: translateY(0);
	}

	@keyframes backdropIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes modalIn {
		from {
			opacity: 0;
			transform: scale(0.95) translateY(10px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	@media (max-width: 520px) {
		.modal-backdrop {
			padding: 0;
			align-items: flex-end;
		}
		.modal-container {
			max-width: 100%;
			border-radius: var(--radius-lg) var(--radius-lg) 0 0;
			padding: 32px 20px 24px;
			animation: modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		}
	}

	@keyframes modalSlideUp {
		from { opacity: 0; transform: translateY(100%); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>
