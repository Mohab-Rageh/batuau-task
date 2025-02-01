# Project Setup Guide

This guide will help you set up and run both the frontend and backend components of the project locally.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- PostgreSQL
- A code editor (VS Code recommended)

## Environment Setup

### Backend Setup (.env)

Create a `.env` file in the backend root directory with the following configuration:

```env
PORT=4000
OMDB_API_KEY=your_omdb_api_key
DATABASE_URL="postgresql://user:password@localhost:5432/database_name?schema=public"
```

### Frontend Setup (.env)

Create a `.env` file in the frontend root directory:

```env
VITE_API_URL=http://localhost:4000
```

## Database Setup

1. Create a PostgreSQL database:
```sql
CREATE DATABASE database_name;
```

2. Update the `DATABASE_URL` in your backend `.env` file with your database credentials:
- Replace `user` with your PostgreSQL username
- Replace `password` with your PostgreSQL password
- Replace `database_name` with your database name

## Installation

### Backend Installation

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Run migrations
npx prisma migrate dev

# Start development server
npm run start:dev
```

### Frontend Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

### Backend Scripts

- `npm run build` - Build the application
- `npm run start:dev` - Start the development server with hot-reload
- `npm run start:prod` - Start the production server

### Frontend Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Verification

1. Backend should be running at: `http://localhost:4000`
2. Frontend should be running at: `http://localhost:5173` (default Vite port)

## Troubleshooting

If you encounter any issues:

1. Database Connection:
   - Verify PostgreSQL is running
   - Check database credentials in `.env`
   - Ensure database exists

2. Port Conflicts:
   - Check if ports 4000 or 5173 are already in use
   - Modify PORT in `.env` if needed

3. API Issues:
   - Verify OMDB_API_KEY is valid
   - Check API endpoint connectivity

For additional help, please check the project's issue tracker or contact the development team.