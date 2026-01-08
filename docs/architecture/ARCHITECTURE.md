# 🏗 Architecture Document – Public Message Board

## 1. System Design
- Client–Server architecture
- Frontend built with Next.js 14 (App Router)
- Backend implemented using Next.js API Routes (Serverless)
- Database managed using Prisma ORM with PostgreSQL
- Deployed on Vercel as serverless functions

### Diagram
![System Design](./system-design.excalidraw.png)

---

## 2. Component Structure
- UI Layer: Reusable UI components (cards, modals, grids)
- Logic Layer: Page-level components handling state & effects
- Service Layer: API communication and business logic
- Data Layer: Prisma schema and database

### Diagram
![Component Structure](./component-structure.excalidraw.png)

---

## 3. Data Flow
- User triggers UI action (Add/View Message)
- Frontend sends request to API route
- API validates input and interacts with database
- Response returned to frontend
- UI updates based on response

### Diagram
![Data Flow](./data-flow.excalidraw.png)

---

## 4. Deployment Flow
- Code pushed to GitHub
- Vercel detects changes
- Build and deploy Next.js app
- API routes deployed as serverless functions
- PostgreSQL accessed via environment variables

### Diagram
![Deployment Flow](./deployment-flow.excalidraw.png)
