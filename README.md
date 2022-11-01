# Atradius Fullstack

This is a test for a Fullstack position at Atradius.

## Requirements

- Node
- Typescript
- Express

## Technologies

The technologies used are:

### Root

- Node
- Concurrently

### Backend:

- Node
- Express
- Typescript
- Turborepo

### Frontend

- Node
- React
- Vite
- Vitest
- React testing library
- Typescript
- Turborepo

## Choices

### Root

- Added `concurrently` to handle single-command petition, running both `backend` and `frontend`.

### Architecture

- Insipired in hexagonal architecture (DDD) https://en.wikipedia.org/wiki/Hexagonal_architecture_(software) to make it as escalable and clean as possible.
- Monorepo to abstract and scale. https://en.wikipedia.org/wiki/Monorepo

## Installation

- Located on root folder, for dev run `npm start`. For build run `npm run build` commands on the terminal. For testing, run `npm run test`.
