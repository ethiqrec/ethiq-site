# ethiq-site

Marketing site for Ethiq Recruitment.

Sister project to [`ethiq-careers`](https://github.com/ethiqrec/ethiq-careers) (the live roles board at `careers.ethiqrec.com`).

Built on Next.js 14 (App Router). Deploys to Vercel.

## Local dev

```
npm install
npm run dev
```

## Stack

- Next.js 14 (App Router)
- React 18
- Plain CSS with design tokens (no Tailwind in this project; consistent with careers site tokens)
- Vercel for hosting

## Notes

Blog content is currently inline in `lib/data.js`. Will swap to Notion API once the database is set up.

Client logos in `who we work with` are wordmarks for v1. Real SVGs to follow.
