# 📅 Daily Development Log (Developer)
## Dev team
### Dev A

**Date:** 2025-01-23  
**Day:** Day 2  
**Developer:** Ranjisha  
**Role:** Full Stack

---

## 🎯 Work Summary
Focused on backend development using Prisma and Next.js API routes.
Implemented serverless APIs with proper error handling.

---

## ✅ Tasks Completed
- Designed and implemented Prisma schema for Message model
- Configured PostgreSQL database connection
- Created Prisma migrations
- Implemented API routes:
  - POST /api/messages
  - GET /api/messages
- Added validation and HTTP status code handling
- Tested APIs locally in WSL environment

---

## ⚠️ Pending Tasks
- Frontend UI implementation
- Modal-based user interactions

---

## 🧩 Files Touched
- prisma/schema.prisma
- prisma/migrations/*
- src/app/api/messages/route.ts
- .env

---

## 🧠 Technical Notes
- Used UUIDs for message IDs
- Ensured correct HTTP status codes (200, 201, 400, 500)
- Followed serverless constraints (no Express/custom server)
- Prisma migrations used for schema consistency

---

## ⚠️ Issues / Blockers
- Minor environment variable validation issues 
- Resolved with the help of mentor

---

## 🔄 Next-Day Plan
- Build UI for `/home` page
- Implement modal-based message creation and viewing
- Final UI polish and deployment

---

## 🗂 References
- Prisma ORM docs
- Vercel serverless API guidelines
