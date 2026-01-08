# 🎨 UI Plan – Public Message Board

## 1. Page Layout
- Single page: `/home`
- Header with application title
- Primary action button: Add Message
- Message grid displayed below header
- All interactions handled using modals

### Diagram
![Page Layout](./page-layout.excalidraw.png)

---

## 2. Component Breakdown
- Page Component: `/home/page.tsx`
- MessageGridUI
- MessageCardUI
- AddMessageModal
- ViewMessageModal
- Reusable Modal wrapper

### Diagram
![Component Breakdown](./component-breakdown.excalidraw.png)

---

## 3. Reusability Approach
- Separation of UI and logic
- UI components receive data via props
- Modals share a common base component
- Grid and Card components reused for consistency
- Styling centralized using Tailwind utility classes
