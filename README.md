# TTVD — TikTok Video Downloader

A free, ad-free, open-source tool for downloading TikTok videos without watermarks.

Built with [SvelteKit](https://kit.svelte.dev) + TypeScript. Powered by the [SnapTik](https://snaptik.app) extraction API.

## Features

- **Watermark-free downloads** — video and slideshow support
- **HD quality** — automatically resolves the highest quality source
- **Clipboard paste** — one-click paste from clipboard


## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Type check
npm run check
```

## Project Structure

```
src/
├── lib/
│   └── snaptik.ts          # SnapTik API client
├── routes/
│   ├── +layout.svelte      # Sidebar + shell layout
│   ├── +page.svelte        # Home — download page
│   ├── about/              # About the team
│   ├── blogs/              # Update log / changelog
│   ├── products/           # Donate page (bank QR + PayPal)
│   └── api/download/       # POST endpoint for video extraction
├── app.css                 # Global styles + design tokens
└── app.html                # HTML shell
```

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | SvelteKit |
| Language | TypeScript |
| Styling | Vanilla CSS (custom properties) |
| Icons | Lucide Svelte |
| API | SnapTik (server-side) |
| QR Codes | VietQR API |

## License

MIT
