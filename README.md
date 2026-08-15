# OVC1110 Internal Management System

A centralized internal management system built for Greenpeace OVC1110 (NGO) to streamline the recording of student data, daily activity reports, attendance, expenses, and donations.

## The Problem

Prior to this system, NGO operations were tracked manually across files and WhatsApp chats, leading to data fragmentation, lost records, and no visibility into program totals or financial standing.

## The Solution

A lightweight, full-stack web application deployed to Render. Staff log in via JWT-secured accounts, then input, store, and retrieve operational data through a mobile-first dashboard. Financial data lives in PostgreSQL for relational integrity; operational data lives in MongoDB for flexibility.

## Live URL

https://ovc-1110-internal-system-1.onrender.com

## Tech Stack

- **Backend:** Node.js, Express, TypeScript
- **Databases:** MongoDB (Mongoose) + PostgreSQL (Prisma ORM)
- **Auth:** JWT with bcrypt password hashing, role-based access control (admin / staff)
- **Frontend:** Vanilla HTML, CSS, JavaScript (Fetch API), mobile-first
- **Deployment:** Render (Neon PostgreSQL + MongoDB Atlas)
- **Architecture:** REST API, MVC-inspired pattern, dual-database

## Core Modules

| Module               | Database   | What It Does                                     |
| -------------------- | ---------- | ------------------------------------------------ |
| **Staff Auth**       | MongoDB    | Login, JWT tokens, admin/staff roles             |
| **Student Registry** | MongoDB    | Track students, guardians, schools               |
| **Activity Reports** | MongoDB    | Log daily programs, challenges, solutions        |
| **Attendance**       | MongoDB    | Record student presence per session              |
| **Expense Tracker**  | PostgreSQL | Log operational expenses with approval tracking  |
| **Donation Ledger**  | MongoDB    | Record cash and in-kind donations                |
| **Dashboard**        | Both       | Live totals + recent activity across all modules |

## Auth & Access Control

- All API routes are protected by JWT middleware.
- `admin` role can register new staff and delete records.
- `staff` role can create and view records only.
- Frontend pages redirect unauthenticated users to `/login.html`.

## Local Setup

1. Clone the repository.
2. Run `npm install`.
3. Create a `.env` file in the root directory and copy the variables from `.env.example`.
4. Ensure MongoDB is running locally (or provide your MongoDB Atlas URI).
5. Provide a PostgreSQL connection string (local or Neon).
6. Run `npm run dev` to start the server.
7. Navigate to `http://localhost:5000` to access the Staff Portal.

## Environment Variables

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ovc1110-internal-system
DATABASE_URL=postgresql://user:password@host:port/db?sslmode=require
JWT_SECRET=your-secret-key-here
```

## What Changed From Stage 1

- Migrated from JavaScript to TypeScript (all controllers, routes, utils, middleware).
- Added PostgreSQL via Prisma ORM for financial data (expenses) with strict schema enforcement.
- Implemented JWT authentication and role-based access control.
- Redesigned all frontend pages with NGO branding, mobile-first layout, and auth gating.
- Deployed to production (Render + Neon + Atlas).

## Future Roadmap

- **Jest + Supertest** integration tests.
- **Migrate remaining MongoDB modules** (Students, Attendance, Donations, Reports) to PostgreSQL for a single source of truth.
- **Full CRUD on all models** — update, get-by-ID, and delete endpoints for all modules.
- **Staff profile section** — password change, personal details, activity log.
- **Dashboard refactor** — redesign based on real usage patterns once staff are actively using the system.
- **Frontend migration** — move from static HTML pages to a React.js SPA when the feature set justifies it.
- **Data export** — CSV/PDF downloads for reports and financial summaries.
- **SMS/WhatsApp alerts** — for low supplies, missed attendance, or donation confirmations.
