# BABC Scholarship Foundation Website

Modern rebuild of [babcsf.com](https://www.babcsf.com/) for the Believe and Achieve Book Club Scholarship Foundation.

## Goals

- Make scholarship applications and gala participation easy to find and complete.
- Present measurable community impact with clearer hierarchy and stronger sponsor value.
- Consolidate the legacy Weebly information architecture into a focused, maintainable experience.
- Preserve current application, donation, sponsor packet, and gala destinations during migration.
- Provide a strong SEO, accessibility, responsive-design, and analytics baseline.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel-ready deployment

## Analytics

Set `NEXT_PUBLIC_GA_ID` in the deployment environment to enable GA4. Primary CTA links emit a `cta_click` event with `link_url` and `link_text` parameters.

## Content sources

The first-pass content is grounded in the current public BABCSF website, the current 2026 scholarship application, the 2026 gala campaign, and the BABC project proposal maintained in Google Drive.

## Launch checklist

- Confirm all public-facing copy, board roles, and 2026 campaign details with Jade.
- Confirm `NEXT_PUBLIC_GA_ID` in Vercel.
- Verify the Vercel preview, mobile layout, keyboard navigation, and external checkout/form destinations.
- Preserve donation, scholarship application, gala, and sponsor-packet links through DNS cutover.

## Development

```bash
yarn
yarn dev
```

Before merge:

```bash
yarn lint
yarn build
```
