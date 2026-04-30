<img width="1851" height="961" alt="Screenshot from 2026-04-30 11-30-55" src="https://github.com/user-attachments/assets/7348e449-6450-4ffa-9af7-28407aa63366" />

# Where’s Waldo – Fullstack Game

A fullstack “Where’s Waldo” style game where users search for hidden characters in large images, race against time, and compete on leaderboards.

## Live Demo
https://wheres-waldo-fullstack-git-main-mansuur-imans-projects.vercel.app/

## Features

- User authentication (login required)
- Multiple fields (levels)
- Interactive image click detection
- Real-time timer
- Multi-image progression
- Leaderboard per field
- Field completion tracking

## How It Works

1. User lands on the homepage with available fields
2. Selecting a field:
   Redirects to login if not authenticated
3. After login:
   Game starts with an image and target characters
4. Player:
   Clicks on the image to find characters
   Timer runs during gameplay
5. When all targets in an image are found:
   Player proceeds to the next image
6. When all images in a field are completed:
   Field is marked complete
   Leaderboard is displayed

## Project Structure

root/
-  client/ # React frontend
-  server/ # Backend (API, DB, auth, game logic)
-  README.md

## Tech Stack

### Frontend

- React
- React Router
- CSS Modules

### Backend

- Node.js
- Express
- Prisma ORM

### Database

- PostgreSQL

## Authentication

- Token-based authentication
- Stored in localStorage
- Global auth state managed via React Context

## Leaderboard Logic

### Tracks:

- User
- Field
- Time taken
- Each user has one score per field
- Rankings are based on fastest completion time

## Setup Instructions

1. Clone repo

   - git clone git@github.com:mansuur-iman/wheres-waldo-fullstack.git
   - cd wheres-waldo-fullstack

2. Setup Backend

   - cd server
   - npm install

Create .env:

- DATABASE_URL=<your_database_url>
- JWT_SECRET=<your_jwt_secret>

Run:

- npx prisma migrate dev
- npm run dev

3. Setup Frontend

   - cd client
   - npm install
   - npm run dev

## Future Improvements

1. Image zoom functionality
2. Difficulty levels
3. Global leaderboard

Author
Mansur
