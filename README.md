# Where's Waldo – Fullstack Game

A fullstack "Where's Waldo" style game where players find hidden characters across multi-image levels, race against a timer, and compete on per-field leaderboards.

**Live:** https://wheres-waldo-fullstack.vercel.app/ &nbsp;|&nbsp; **Client source:** [client/](./client) &nbsp;|&nbsp; **Server source:** [server/](./server)

---

## How the Backend Works

The backend is an Express REST API backed by PostgreSQL (via Prisma ORM). It handles authentication, game state, coordinate validation, and leaderboard logic — all enforced server-side so the client cannot manipulate game outcomes.

### Coordinate Validation

The core technical challenge was validating player guesses without leaking character positions to the client.

- Character positions (bounding boxes) are stored in PostgreSQL and never sent to the frontend
- When a player clicks the image, the client sends only the raw `(x, y)` coordinates
- The server compares those coordinates against the stored bounds for the requested character
- If the guess is correct, the server responds with a hit and the updated list of found characters
- If incorrect, it returns a miss — no position data is revealed

This means a player cannot inspect network responses to find where characters are hidden.

### Server-Side Game Integrity

Progress and image sequencing are controlled entirely by the server:

- Each field (level) contains multiple images in a fixed order
- The server tracks which image a user is currently on, stored in a `Progress` record in PostgreSQL
- The next image is only served after the server confirms all characters in the current image have been found
- A `Progress` record is created on the user's first request to a field and updated on each image completion
- When no images remain, the field is marked complete and the leaderboard is returned

A client cannot skip images or request future images directly — the server rejects out-of-sequence requests.

### Leaderboard

- Each user has one score per field, recorded as time taken to complete all images
- On field completion, the server queries all completion records for that field, sorts by fastest time, and returns the ranked results
- Rankings are computed server-side — the client receives a sorted list, nothing more

### Authentication

- JWT-based stateless authentication
- Passwords hashed with bcrypt before storage
- Protected routes require a valid Bearer token in the `Authorization` header
- Unauthenticated users are redirected to login before a field can be started

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express |
| ORM | Prisma |
| Database | PostgreSQL |
| Auth | JWT + bcrypt |
| Validation | express-validator |
| Frontend | React, React Router, CSS Modules |

---

## Project Structure

```
root/
├── client/         # React frontend
│   └── src/
└── server/         # Express API
    ├── controllers/
    ├── routes/
    ├── middlewares/
    └── prisma/
        └── schema.prisma
```

---

## Running Locally

### 1. Clone the repo

```bash
git clone git@github.com:mansuur-iman/wheres-waldo-fullstack.git
cd wheres-waldo-fullstack
```

### 2. Backend setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

Run migrations and start the server:

```bash
npx prisma migrate dev
npm run dev
```

### 3. Frontend setup

```bash
cd ../client
npm install
npm run dev
```

---

