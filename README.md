# Simple TODO List

Simple todo list base on [Vercel Fullstack Guides](https://vercel.com/guides/nextjs-prisma-postgres).

## Getting Started

First, create the tables in your database, you now can use the following command of the Prisma CLI::

```bash
npx prisma db push
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment

```env
POSTGRES_PRISMA_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?KEY1=VALUE"
```
