<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# BABC project conventions

- Use the App Router and Server Components by default. Add `"use client"` only to the smallest interactive boundary that needs browser APIs.
- Keep campaign destinations explicit and centralized when they are reused.
- Preserve semantic heading order, visible focus states, responsive behavior, and reduced-motion preferences.
- External CTA links open in a new tab with `noopener noreferrer`; in-site anchor navigation remains in the current tab.
- GA4 is optional through `NEXT_PUBLIC_GA_ID`; never hard-code measurement IDs or secrets.
- Do not change scholarship dates, eligibility, award amounts, gala details, sponsorship benefits, donation destinations, or board roles without grounding the change in an authoritative source.
- Before opening a PR, run lint and a production build. If the execution environment prevents either, state the limitation and rely on CI/Vercel checks before merge.
