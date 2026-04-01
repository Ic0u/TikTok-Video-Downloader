<script lang="ts">
	/** A happy sitting corgi with a wagging tail — used on the main download page. */
	export let width: number = 120;
</script>

<div class="corgi-sitting" style="width: {width}px;">
	<svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
		<!-- Tail (wagging) -->
		<path d="M 72 52 Q 85 35, 82 25 Q 80 20, 76 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" class="wag"/>

		<!-- Back body -->
		<path d="M 38 55 C 30 60, 28 75, 35 82 C 40 87, 55 90, 65 85 C 75 80, 75 60, 68 52" stroke="currentColor" stroke-width="2" fill="var(--bg-elevated)"/>

		<!-- Front legs -->
		<path d="M 40 82 L 38 98 Q 37 102, 42 102 L 46 102" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="var(--bg-elevated)"/>
		<path d="M 55 84 L 54 98 Q 53 102, 58 102 L 62 102" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="var(--bg-elevated)"/>
		<!-- Paw pads -->
		<circle cx="42" cy="100" r="1" fill="currentColor" opacity="0.5"/>
		<circle cx="45" cy="100" r="1" fill="currentColor" opacity="0.5"/>
		<circle cx="58" cy="100" r="1" fill="currentColor" opacity="0.5"/>
		<circle cx="61" cy="100" r="1" fill="currentColor" opacity="0.5"/>

		<!-- Hind leg (visible) -->
		<path d="M 65 78 C 72 82, 72 92, 68 98 Q 67 102, 72 102 L 76 102" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="var(--bg-elevated)"/>
		<circle cx="72" cy="100" r="1" fill="currentColor" opacity="0.5"/>
		<circle cx="75" cy="100" r="1" fill="currentColor" opacity="0.5"/>

		<!-- Chest fluff -->
		<path d="M 38 55 C 35 58, 34 65, 38 68" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>

		<!-- Neck -->
		<path d="M 42 52 C 45 48, 50 45, 55 44" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>

		<!-- Left Ear -->
		<path d="M 38 28 L 30 10 C 25 8, 22 14, 28 22 L 35 32" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="var(--bg-elevated)"/>
		<path d="M 33 26 L 30 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>

		<!-- Right Ear -->
		<path d="M 52 26 L 58 8 C 63 6, 66 12, 60 22 L 55 30" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="var(--bg-elevated)"/>
		<path d="M 55 24 L 58 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>

		<!-- Head -->
		<path d="M 55 30 C 60 38, 58 48, 50 50 C 44 52, 36 50, 32 45 C 28 40, 28 32, 35 28 C 40 25, 50 24, 55 30 Z" stroke="currentColor" stroke-width="2" fill="var(--bg-elevated)"/>

		<!-- Snout -->
		<path d="M 32 44 C 28 42, 24 40, 22 36 C 20 32, 22 28, 28 30" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="var(--bg-elevated)"/>
		<path d="M 28 36 C 32 38, 35 40, 38 38" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>

		<!-- Nose -->
		<circle cx="22" cy="34" r="2.5" fill="currentColor"/>

		<!-- Eyes -->
		<circle cx="38" cy="34" r="2" fill="currentColor"/>
		<circle cx="48" cy="33" r="2" fill="currentColor"/>
		<!-- Eye shine -->
		<circle cx="39" cy="33" r="0.8" fill="var(--bg-elevated)"/>
		<circle cx="49" cy="32" r="0.8" fill="var(--bg-elevated)"/>

		<!-- Eyebrows (happy) -->
		<path d="M 35 30 Q 38 28, 41 30" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"/>
		<path d="M 45 29 Q 48 27, 51 29" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"/>

		<!-- Tongue -->
		<path d="M 28 40 C 26 42, 26 46, 28 46 C 30 46, 30 42, 28 40" stroke="currentColor" stroke-width="1.2" fill="var(--bg-elevated)"/>

		<!-- Collar -->
		<path d="M 38 50 C 42 52, 50 51, 55 48" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
		<!-- Collar tag -->
		<circle cx="46" cy="53" r="3" stroke="currentColor" stroke-width="1.5" fill="var(--bg-elevated)"/>
		<text x="46" y="55.5" text-anchor="middle" font-size="4" fill="currentColor" font-weight="700">♪</text>
	</svg>
</div>

<style>
	.corgi-sitting {
		flex-shrink: 0;
		opacity: 0.85;
		color: var(--text-muted);
	}
	.corgi-sitting svg {
		width: 100%;
		height: auto;
	}
	.wag {
		transform-origin: 72px 52px;
		animation: wagTail 0.6s ease-in-out infinite alternate;
	}
	@keyframes wagTail {
		from { transform: rotate(-8deg); }
		to { transform: rotate(8deg); }
	}
</style>
