<script lang="ts">
	import { Copy, Check, Coffee } from 'lucide-svelte';
	import { banks, paypalLinks, getQRUrl } from '$lib/data/banks';

	let copiedId = '';

	async function copyAccount(bank: typeof banks[0]) {
		try {
			await navigator.clipboard.writeText(bank.accountNumber);
			copiedId = bank.id;
			setTimeout(() => copiedId = '', 2000);
		} catch {
			copiedId = bank.id;
			setTimeout(() => copiedId = '', 2000);
		}
	}
</script>

<svelte:head>
	<title>Donate — TTVD</title>
	<meta name="description" content="Support TTVD development with a small donation via Vietcombank or Techcombank." />
</svelte:head>

<div class="donate-page">

	<!-- Header card — same style as about-hero -->
	<div class="donate-header">
		<div class="donate-header-text">
			<div class="donate-icon">
				<Coffee size={24} />
			</div>
			<h1 class="donate-title">support ttvd</h1>
			<p class="donate-desc">
				ttvd is free, ad-free, and open.
				if it saved you time, buy the dev a coffee.
				every bit helps keep it running.
			</p>
		</div>
		<div class="donate-mascot">
			<!-- Bank card stack illustration -->
			<svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
				<!-- Back card -->
				<rect x="10" y="22" width="88" height="54" rx="8" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.25"/>
				<!-- Mid card -->
				<rect x="6" y="18" width="88" height="54" rx="8" fill="var(--bg-elevated)" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
				<!-- Front card -->
				<rect x="2" y="14" width="88" height="54" rx="8" fill="var(--bg-elevated)" stroke="currentColor" stroke-width="1.5"/>
				<!-- Stripe -->
				<rect x="2" y="26" width="88" height="12" fill="currentColor" opacity="0.12"/>
				<!-- Chip -->
				<rect x="12" y="38" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.2" opacity="0.7"/>
				<line x1="19" y1="38" x2="19" y2="48" stroke="currentColor" stroke-width="1" opacity="0.5"/>
				<line x1="12" y1="43" x2="26" y2="43" stroke="currentColor" stroke-width="1" opacity="0.5"/>
				<!-- Dots (card number) -->
				<circle cx="12" cy="56" r="2" fill="currentColor" opacity="0.5"/>
				<circle cx="20" cy="56" r="2" fill="currentColor" opacity="0.5"/>
				<circle cx="28" cy="56" r="2" fill="currentColor" opacity="0.5"/>
				<circle cx="36" cy="56" r="2" fill="currentColor" opacity="0.5"/>
				<!-- Coin drop -->
				<circle cx="96" cy="20" r="14" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.8"/>
				<text x="96" y="25" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.8" font-family="monospace" font-weight="700">₫</text>
				<!-- Motion lines -->
				<line x1="96" y1="37" x2="96" y2="44" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
				<line x1="92" y1="39" x2="90" y2="46" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.25"/>
				<line x1="100" y1="39" x2="102" y2="46" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.25"/>
			</svg>
		</div>
	</div>

	<!-- Bank QR cards -->
	<p class="section-label">bank transfer</p>
	<div class="bank-cards">
		{#each banks as bank}
			<div class="bank-card">
				<!-- Card header -->
				<div class="bank-header">
					<div class="bank-logo">
						<img src={bank.logoSrc} alt={bank.name} />
					</div>
					<div class="bank-info">
						<span class="bank-name">{bank.name}</span>
						<span class="bank-short">{bank.shortName}</span>
					</div>
				</div>

				<!-- QR Code -->
				<div class="qr-wrap">
					<img
						src={getQRUrl(bank)}
						alt="QR {bank.name}"
						class="qr-img"
						loading="lazy"
					/>
					<p class="qr-hint">scan and enter amount in your bank app</p>
				</div>

				<!-- Account details -->
				<div class="account-details">
					<div class="account-row">
						<span class="account-label">account</span>
						<div class="account-value-row">
							<span class="account-number">{bank.accountNumber}</span>
							<button
								class="copy-btn"
								on:click={() => copyAccount(bank)}
								title="Copy account number"
							>
								{#if copiedId === bank.id}
									<Check size={13} />
								{:else}
									<Copy size={13} />
								{/if}
							</button>
						</div>
					</div>
					<div class="account-row">
						<span class="account-label">name</span>
						<span class="account-name-text">{bank.accountName}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- PayPal links -->
	<div class="paypal-section">
		<p class="section-label">or via paypal</p>
		<div class="paypal-row">
			{#each paypalLinks as pp}
				<a href={pp.url} target="_blank" rel="noopener" class="paypal-card">
					<span class="paypal-icon">
						<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<path d="M7.144 19.532l1.049-5.751c.11-.606.691-1.002 1.304-.948 2.155.192 6.877.1 8.818-4.002 2.554-5.397-.59-7.769-6.295-7.769H7.43a1.97 1.97 0 0 0-1.944 1.655L2.77 19.507a1.482 1.482 0 0 0 1.46 1.731h1.484a1.482 1.482 0 0 0 1.43-1.706z"/>
							<path d="M10.217 19.532l1.049-5.751c.11-.606.691-1.002 1.304-.948 2.155.192 6.877.1 8.818-4.002 2.554-5.397-.59-7.769-6.295-7.769"/>
						</svg>
					</span>
					<div class="paypal-info">
						<span class="paypal-name">PayPal — {pp.name}</span>
						<span class="paypal-url">paypal.me/{pp.name}</span>
					</div>
					<span class="paypal-arrow">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
					</span>
				</a>
			{/each}
		</div>
	</div>

	<!-- Footer note -->
	<p class="donate-footer">
		no middleman. 100% goes to the dev.
	</p>
</div>

<style>
	.donate-page {
		max-width: 680px;
		margin: 0 auto;
		padding: 48px 24px 64px;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	/* ── Header card (matches about-hero) ── */
	.donate-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 32px;
		padding: 32px;
		background: var(--bg-elevated);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		animation: fadeUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
	}

	.donate-header-text {
		display: flex;
		flex-direction: column;
	}

	.donate-icon {
		color: var(--text-muted);
		margin-bottom: 14px;
	}

	.donate-title {
		font-size: clamp(22px, 3.5vw, 32px);
		font-weight: 600;
		letter-spacing: -0.02em;
		line-height: 1.2;
		color: var(--text);
		margin-bottom: 12px;
	}

	.donate-desc {
		font-size: 13px;
		color: var(--text-muted);
		line-height: 1.7;
	}

	.donate-mascot {
		width: 120px;
		flex-shrink: 0;
		opacity: 0.85;
	}

	/* ── Amount ── */
	.section-label {
		font-size: 11px;
		color: var(--text-dim);
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	/* ── Bank cards ── */
	.bank-cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
		animation: fadeUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.14s both;
	}

	.bank-card {
		background: var(--bg-elevated);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 18px;
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.bank-card:hover {
		border-color: var(--border-strong);
		box-shadow: var(--shadow-md);
	}

	.bank-header {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.bank-logo {
		width: 40px;
		height: 40px;
		flex-shrink: 0;
	}

	.bank-logo img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: contain;
	}

	.bank-info {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.bank-name {
		font-size: 14px;
		font-weight: 600;
		color: var(--text);
		letter-spacing: -0.01em;
	}

	.bank-short {
		font-size: 10px;
		color: var(--text-dim);
		letter-spacing: 0.05em;
	}

	/* ── QR ── */
	.qr-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.qr-img {
		width: 100%;
		max-width: 200px;
		aspect-ratio: 1;
		border-radius: var(--radius);
		background: #fff;
		padding: 8px;
		display: block;
	}

	.qr-hint {
		font-size: 10px;
		color: var(--text-dim);
		text-align: center;
		letter-spacing: 0.02em;
	}

	/* ── Account details ── */
	.account-details {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding-top: 14px;
		border-top: 1px solid var(--border);
	}

	.account-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 8px;
	}

	.account-label {
		font-size: 10px;
		color: var(--text-dim);
		letter-spacing: 0.04em;
		text-transform: uppercase;
		flex-shrink: 0;
	}

	.account-value-row {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.account-number {
		font-size: 13px;
		font-weight: 600;
		color: var(--text);
		letter-spacing: 0.03em;
	}

	.account-name-text {
		font-size: 11px;
		color: var(--text-muted);
		text-align: right;
	}

	.copy-btn {
		background: none;
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 4px 6px;
		color: var(--text-muted);
		cursor: pointer;
		display: flex;
		align-items: center;
		transition: all 0.15s ease;
		font-family: var(--font);
	}

	.copy-btn:hover {
		color: var(--text);
		border-color: var(--border-strong);
		background: var(--bg-hover);
	}

	/* ── PayPal ── */
	.paypal-section {
		display: flex;
		flex-direction: column;
		gap: 10px;
		animation: fadeUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
	}

	.paypal-row {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.paypal-card {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 14px 16px;
		background: var(--bg-elevated);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		text-decoration: none;
		color: var(--text-muted);
		font-family: var(--font);
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
	}

	.paypal-card:hover {
		border-color: var(--border-strong);
		color: var(--text);
		background: var(--bg-hover);
	}

	.paypal-icon {
		display: flex;
		align-items: center;
		color: inherit;
		flex-shrink: 0;
	}

	.paypal-info {
		display: flex;
		flex-direction: column;
		gap: 2px;
		flex: 1;
		min-width: 0;
	}

	.paypal-name {
		font-size: 13px;
		font-weight: 500;
		color: var(--text);
	}

	.paypal-url {
		font-size: 10px;
		color: var(--text-dim);
		letter-spacing: 0.02em;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.paypal-arrow {
		display: flex;
		align-items: center;
		color: var(--text-dim);
		flex-shrink: 0;
		transition: transform 0.2s ease;
	}

	.paypal-card:hover .paypal-arrow {
		transform: translate(2px, -2px);
	}

	/* ── Footer ── */
	.donate-footer {
		text-align: center;
		font-size: 11px;
		color: var(--text-dim);
		animation: fadeUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
	}

	/* ── Responsive ── */
	@media (max-width: 560px) {
		.donate-header {
			flex-direction: column;
			padding: 24px;
		}
		.donate-mascot {
			width: 80px;
			align-self: center;
		}
		.bank-cards {
			grid-template-columns: 1fr;
		}
	}
</style>
