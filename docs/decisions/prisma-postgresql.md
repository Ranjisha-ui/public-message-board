# ADR-003: Use Prisma with PostgreSQL

**Status:** Accepted  
**Date:** 2025-01-23  

---

## Context
The application required a reliable, type-safe ORM and relational database.

---

## Decision
Prisma ORM with PostgreSQL was selected for data persistence.

---

## Alternatives Considered
- MongoDB with Mongoose
- Raw SQL queries

---

## Consequences
- Strong type safety
- Easier schema migrations
- Requires relational schema planning
