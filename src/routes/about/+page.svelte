<script lang="ts">
	import CorgiMascot from '$lib/components/CorgiMascot.svelte';
	import TeamCard from '$lib/components/TeamCard.svelte';
	import { teamMembers } from '$lib/data/team';
</script>

<svelte:head>
	<title>about — TTVD v3</title>
	<meta name="description" content="About the team behind TTVD v3." />
</svelte:head>

<div class="page-inner">
	<!-- Hero -->
	<div class="about-hero">
		<div class="about-hero-text">
			<div class="about-icon">
				<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
					<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
				</svg>
			</div>
			<h1>built with purpose,<br/>shared with love</h1>
			<p class="about-subtitle">
				TTVD is a free tool for downloading media<br/>
				Paste the link, get the file, move on.
			</p>
		</div>

		<CorgiMascot />
	</div>

	<!-- Team Cards -->
	<div class="team-section">
		<h2>the team</h2>
		<div class="team-grid">
			{#each teamMembers as member, i}
				<div style="animation-delay: {(i + 1) * 0.1}s;">
					<TeamCard {member} />
				</div>
			{/each}
		</div>
	</div>

	<!-- About Text -->
	<div class="about-text">
		<p>
			TTVD helps creators, students, and everyday users save videos they love. it's a different kind of tool — made with care, not for profit.
		</p>
		<p>
			we believe the internet should be open and accessible. that's why TTVD will never have ads, trackers, or hidden fees. everything we build is focused on simplicity and respect for the user.
		</p>
		<p>
			if you find TTVD useful, consider sharing it with a friend or starring the repo on GitHub. every bit helps.
		</p>
	</div>
</div>

<style>
	.page-inner {
		max-width: 720px;
		margin: 0 auto;
		padding: 24px 24px 48px;
	}

	/* ─── Hero ─── */
	.about-hero {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 32px;
		margin-bottom: 48px;
		padding: 32px;
		background: var(--bg-elevated);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		animation: fadeUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.about-icon {
		color: var(--text);
		margin-bottom: 16px;
	}

	.about-hero h1 {
		font-size: clamp(22px, 3.5vw, 32px);
		font-weight: 600;
		line-height: 1.2;
		letter-spacing: -0.02em;
		color: var(--text);
		margin-bottom: 12px;
	}

	.about-subtitle {
		font-size: 13px;
		color: var(--text-muted);
		line-height: 1.6;
	}

	/* ─── Team ─── */
	.team-section { margin-bottom: 48px; }

	.team-section h2 {
		font-size: 14px;
		font-weight: 500;
		color: var(--text-muted);
		margin-bottom: 16px;
		letter-spacing: 0.02em;
	}

	.team-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}

	/* ─── About Text ─── */
	.about-text {
		display: flex;
		flex-direction: column;
		gap: 16px;
		animation: fadeUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
	}

	.about-text p {
		font-size: 13px;
		color: var(--text-muted);
		line-height: 1.7;
	}

	@media (max-width: 640px) {
		.about-hero { flex-direction: column; padding: 24px; }
		.team-grid { grid-template-columns: 1fr; }
	}

	@keyframes fadeUp {
		from { opacity: 0; transform: translateY(12px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>
