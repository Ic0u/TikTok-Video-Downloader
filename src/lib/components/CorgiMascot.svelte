<script lang="ts">
	export let width: number = 140;
</script>

<div class="mascot" style="width: {width}px;">
	<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
		<!-- Back Left Leg -->
		<path d="M 40 75 L 45 92 A 4 4 0 0 0 52 88 L 45 70" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="var(--bg-elevated)"/>
		<!-- Paw pads left -->
		<circle cx="45" cy="88" r="1" fill="currentColor"/>
		<circle cx="49" cy="86" r="1" fill="currentColor"/>
		<circle cx="42" cy="85" r="1" fill="currentColor"/>
		<ellipse cx="46" cy="82" rx="1.5" ry="2" transform="rotate(-20 46 82)" fill="currentColor"/>

		<!-- Back Right Leg -->
		<path d="M 60 70 L 78 72 A 4 4 0 0 0 78 64 L 62 60" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="var(--bg-elevated)"/>
		<!-- Paw pads right -->
		<circle cx="74" cy="66" r="1" fill="currentColor"/>
		<circle cx="70" cy="64" r="1" fill="currentColor"/>
		<circle cx="74" cy="70" r="1" fill="currentColor"/>
		<ellipse cx="68" cy="68" rx="1.5" ry="2" transform="rotate(-60 68 68)" fill="currentColor"/>

		<!-- Torso -->
		<path d="M 35 40 C 20 60, 30 80, 50 78 C 65 76, 70 60, 60 40 C 55 30, 45 25, 35 40 Z" stroke="currentColor" stroke-width="2" fill="var(--bg-elevated)"/>

		<!-- Tail Fluff -->
		<path d="M 45 70 Q 48 62, 53 65 Q 56 60, 60 66 Q 65 65, 62 72 Q 60 78, 55 75 Q 48 80, 46 72 Q 40 72, 45 70 Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="var(--bg-elevated)"/>

		<!-- Front Left Paw (Tucked) -->
		<path d="M 28 42 C 18 45, 18 55, 28 52" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>

		<!-- Right Ear -->
		<path d="M 40 25 L 48 8 C 55 10, 55 15, 48 25" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="var(--bg-elevated)"/>
		<path d="M 44 24 L 48 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>

		<!-- Left Ear -->
		<path d="M 30 20 L 25 5 C 32 2, 38 8, 38 18" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="var(--bg-elevated)"/>
		<path d="M 32 20 L 30 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>

		<!-- Head -->
		<path d="M 45 25 C 50 35, 45 42, 35 40 C 28 38, 20 38, 18 30 C 16 22, 25 18, 35 20 C 40 21, 42 22, 45 25 Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="var(--bg-elevated)"/>

		<!-- Snout line -->
		<path d="M 18 30 C 25 32, 28 35, 35 32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>

		<!-- Nose -->
		<circle cx="17" cy="28" r="2.5" fill="currentColor"/>

		<!-- Eye -->
		<path d="M 26 25 Q 29 27, 32 25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
		<circle cx="29" cy="26" r="1.5" fill="currentColor"/>

		<!-- Collar detail -->
		<path d="M 35 40 C 40 38, 45 35, 52 35" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
	</svg>
</div>

<style>
	.mascot {
		flex-shrink: 0;
		opacity: 0.8;
		color: var(--text-muted);
	}
	.mascot svg {
		width: 100%;
		height: auto;
	}
</style>
