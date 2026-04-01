<script lang="ts">
	import { Github, Facebook } from 'lucide-svelte';
	import type { TeamMember } from '$lib/data/team';

	export let member: TeamMember;

	const iconMap = { github: Github, facebook: Facebook } as const;
</script>

<div class="team-card">
	<div class="team-avatar">
		<img src={member.avatar} alt={member.name} style={member.avatarStyle ?? ''} />
	</div>
	<div class="team-info">
		<h3>{member.name}</h3>
		<span class="team-role">{member.role}</span>
		<p class="team-bio">{member.bio}</p>
		<div class="team-links">
			{#each member.links as link}
				<a href={link.href} target="_blank" rel="noopener" class="team-link-btn">
					<svelte:component this={iconMap[link.icon]} size={14} />
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.team-card {
		background: var(--bg-elevated);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: 28px 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
		text-align: center;
		transition: border-color 0.25s ease;
		animation: fadeUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
	}

	.team-card:hover { border-color: var(--border-strong); }

	.team-avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid var(--border-strong);
		background: var(--bg);
	}

	.team-avatar img { width: 100%; height: 100%; object-fit: cover; }

	.team-info h3 {
		font-size: 16px;
		font-weight: 600;
		color: var(--text);
		margin-bottom: 2px;
	}

	.team-role {
		font-size: 11px;
		color: var(--text-dim);
		display: block;
		margin-bottom: 10px;
	}

	.team-bio {
		font-size: 12px;
		color: var(--text-muted);
		line-height: 1.6;
		margin-bottom: 14px;
	}

	.team-links { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }

	.team-link-btn {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 6px 14px;
		background: var(--bg);
		border: 1px solid var(--border-strong);
		border-radius: var(--radius-sm);
		color: var(--text-muted);
		font-family: var(--font);
		font-size: 11px;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.team-link-btn:hover {
		color: var(--text);
		border-color: rgba(255, 255, 255, 0.3);
		background: var(--bg-hover);
	}

	@keyframes fadeUp {
		from { opacity: 0; transform: translateY(12px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>
