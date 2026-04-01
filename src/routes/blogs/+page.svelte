<script lang="ts">
	import { updates } from '$lib/data/updates';
</script>

<svelte:head>
	<title>updates — TTVD v3</title>
	<meta name="description" content="TTVD v3 update log and changelog." />
</svelte:head>

<div class="page-inner">
	<h1 class="page-title">update log</h1>

	<div class="updates-list">
		{#each updates as update, i}
			<article class="update-entry" style="animation-delay: {i * 0.1}s">
				<div class="update-meta">
					<span class="version-badge">{update.version}</span>
					<span class="update-date">{update.date}</span>
				</div>

				<h2 class="update-title">{update.title}</h2>

				{#if update.image}
					<div class="update-hero">
						<img src={update.image} alt={update.title} loading="lazy" />
					</div>
				{/if}

				<p class="update-body">{update.body}</p>

				{#if update.changes.length}
					<div class="changes-list">
						{#each update.changes as change}
							<div class="change-item">
								<h3>{change.heading}</h3>
								<p>{change.text}</p>
							</div>
						{/each}
					</div>
				{/if}

				{#if i < updates.length - 1}
					<div class="update-divider"></div>
				{/if}
			</article>
		{/each}
	</div>
</div>

<style>
	.page-inner {
		max-width: 720px;
		margin: 0 auto;
		padding: 24px 24px 48px;
	}

	.page-title {
		font-size: 24px;
		font-weight: 600;
		color: var(--text);
		letter-spacing: -0.02em;
		margin-bottom: 40px;
	}

	.updates-list {
		display: flex;
		flex-direction: column;
	}

	.update-entry {
		animation: fadeUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
	}

	.update-meta {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 12px;
	}

	.version-badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 4px 12px;
		background: var(--bg-elevated);
		border: 1px solid var(--border-strong);
		border-radius: var(--radius-sm);
		font-family: var(--font);
		font-size: 13px;
		font-weight: 600;
		color: var(--text);
	}

	.update-date {
		font-size: 12px;
		color: var(--text-dim);
	}

	.update-title {
		font-size: 20px;
		font-weight: 600;
		color: var(--text);
		line-height: 1.3;
		letter-spacing: -0.01em;
		margin-bottom: 16px;
	}

	.update-hero {
		width: 100%;
		margin-bottom: 20px;
		border-radius: var(--radius);
		overflow: hidden;
		background: var(--bg-elevated);
		border: 1px solid var(--border);
	}

	.update-hero img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
		max-height: 360px;
	}

	.update-body {
		font-size: 13px;
		color: var(--text-muted);
		line-height: 1.7;
		margin-bottom: 24px;
	}

	.changes-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.change-item h3 {
		font-size: 14px;
		font-weight: 600;
		color: var(--text);
		margin-bottom: 6px;
	}

	.change-item p {
		font-size: 12px;
		color: var(--text-muted);
		line-height: 1.6;
	}

	.update-divider {
		height: 1px;
		background: var(--border);
		margin: 40px 0;
	}

	@media (max-width: 480px) {
		.page-title { font-size: 20px; }
		.update-title { font-size: 17px; }
	}

	@keyframes fadeUp {
		from { opacity: 0; transform: translateY(12px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>
