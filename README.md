# Public Message Board

A minimal yet professional full-stack **Public Message Board** application built using
Next.js 14, Prisma, and PostgreSQL.  
The project emphasizes **clean architecture, UI structure, serverless deployment,
and engineering discipline**.

---

## 🎯 Project Objective

Build and deploy a production-quality full-stack application with focus on:

- Architecture design
- UI structure and reusability
- Serverless backend implementation
- Cloud deployment best practices
- Clean Git and documentation standards

---

## 🔗 Live Deployment

👉 **Live URL:**  public-message-board.vercel.app  

> Replace the above link with your actual Vercel deployment URL.

---

## 🧩 Tech Stack

- **Next.js 14** (App Router)
- **Node.js 20**
- **Prisma ORM**
- **PostgreSQL**
- **Tailwind CSS**
- **Vercel** (Serverless deployment)
- **Linux (WSL)**
- **Git & GitHub**

---

## 🖥 Application Overview

### Route: `/home`

- Anyone can view messages
- Anyone can add a message
- All interactions handled via **modals**
- Messages displayed in a **responsive grid**
- Clean, minimal, and professional UI

---

## 🧭 How to Use the Application

1. Open the application at `/home`
2. Click **Add Message**
3. Enter your name and message
4. Click **Add**
5. Message appears in the message grid
6. Click **View** on any card to see the full message

---

## 🗃 Database Schema (Minimal)

```prisma
model Message {
  id        String   @id @default(uuid())
  name      String
  content   String
  createdAt DateTime @default(now())
}
