# ADR-002: Use Serverless API Routes

**Status:** Accepted  
**Date:** 2025-01-23  

---

## Context
The application required a backend without managing servers or ports.

---

## Decision
Backend logic is implemented using Next.js API Routes and deployed
as serverless functions on Vercel.

---

## Alternatives Considered
- Express server
- Custom Node.js backend

---

## Consequences
- Zero server management
- Automatic scaling
- Cold start latency in some cases
