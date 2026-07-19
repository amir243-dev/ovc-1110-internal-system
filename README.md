# OVC1110 Internal Management System

A centralized internal management system built for Greenpeace OVC1110 (NGO) to streamline the recording of student data, daily activity reports, attendance, expenses, and donations.

## The Problem

Prior to this system, NGO operations were tracked manually, leading to data fragmentation, lost records, and operational friction during daily activities.

## The Solution

A lightweight, full-stack web application that enables staff to seamlessly input, store, and retrieve operational data through a centralized, minimal dashboard.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** Vanilla HTML, CSS, JavaScript (Fetch API)
- **Architecture:** REST API, MVC-inspired pattern

## Core Modules

1. **Student Registry:** Track demographics, guardians, and specific needs.
2. **Activity Reports:** Log daily program activities, challenges, and solutions.
3. **Attendance:** Record daily student attendance per program.
4. **Expense Tracker:** Log individual operational expenses with approval tracking.
5. **Donation Ledger:** Record cash and in-kind donations with estimated financial valuations.

## Local Setup

1. Clone the repository.
2. Run `npm install`.
3. Create a `.env` file in the root directory and copy the variables from `.env.example`.
4. Ensure MongoDB is running locally (or provide your MongoDB Atlas URI).
5. Run `node src/server.js` to start the server.
6. Navigate to `http://localhost:5000` to access the Staff Portal.

## Future Roadmap (Stage 2)

- Migrate core modules to TypeScript for type safety.
- Implement PostgreSQL via Prisma ORM for strict relational data integrity.
- Add JWT-based staff authentication and role-based access control.
- Dockerize the application for consistent deployment.
