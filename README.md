# SecureID — Biometric Identity Management SaaS

A cloud-based, multi-tenant identity management platform with biometric authentication, built for organizations that need centralized attendance tracking and internal e-voting.

> Final Year Project (FYP) prototype.

## Overview

SecureID lets an organization onboard its members under a single tenant, authenticate them (password + planned facial biometrics), and use that verified identity across internal tools — starting with attendance, with e-voting planned as an extension.

## Tech Stack

**Frontend**
- React + Vite
- Plain CSS (component-based styling)

**Backend**
- Node.js + Express
- PostgreSQL (multi-tenant schema: `organizations` ↔ `users`)
- bcrypt for password hashing
- JWT for session authentication

## Features

**Implemented**
- [x] Secure login (email + password) with bcrypt-hashed credentials
- [x] JWT-based session tokens (2-hour expiry)
- [x] Multi-tenant schema — users scoped to an organization
- [x] Account status checks (active/inactive)

**In progress / planned**
- [ ] Organization & user signup flow
- [ ] Biometric enrollment (face capture + embedding)
- [ ] Biometric verification (face match on login)
- [ ] Attendance tracking module
- [ ] Internal e-voting module
- [ ] Role-based access control (admin vs member)

## Architecture

```
React (Vite) frontend
        │
        ▼
Express REST API ── JWT auth ── bcrypt password hashing
        │
        ▼
PostgreSQL (organizations, users)
```

*(Biometric matching service to be added between the API and database layers.)*

## Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL

### Backend setup
```bash
cd server
npm install
# create a .env file with DATABASE_URL, JWT_SECRET, PORT
npm start
```

### Frontend setup
```bash
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and expects the backend on `http://localhost:5000`.

## Project Status

This is an active FYP prototype. Core authentication is functional; biometric verification and the attendance/voting modules are the current development focus.

## License

Academic project — not licensed for production use.