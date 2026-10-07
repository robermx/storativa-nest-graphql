<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# GraphQL Storativa Backend

Storativa's GraphQL and Apollo API, built with NestJS and MongoDB.

## Technology

- Node.js 24 and pnpm 12.10.1
- NestJS 12, Apollo, GraphQL, TypeScript, and Mongoose
- MongoDB 9.0.2

## Prerequisites and installation

Install Node.js 24+, pnpm 12.10.1, and Docker Desktop (or have access to a MongoDB instance). Then, from this directory:

```bash
pnpm install
cp .env.template .env
docker compose up -d db
pnpm start:dev
```

## Configuration

Fill in the `.env` file created from `.env.template`:

```env
NODE_ENV=local
MONGODB_DATABASE=storativa
MONGODB_PORT=2719
```

## Commands

```bash
pnpm start          # starts the API
pnpm start:dev      # starts the API in watch mode
pnpm start:debug    # watch mode with the Node.js inspector
pnpm build          # builds to dist/
pnpm start:prod     # runs dist/main
```
