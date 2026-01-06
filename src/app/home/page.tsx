// src/app/home/page.tsx
"use client";

import { useState } from "react";
import { theme } from "./constants/theme/theme";           
import MainHeader from "./components/mainHeader";         
import AddMessageModal from "./components/AddMessageModal";

export default function Home() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Temporary success handler — later we'll refresh the message list
  const handleAddSuccess = () => {
    alert("Message added successfully!"); // Replace with real grid refresh later
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.body,
        padding: "2rem",
      }}
    >
      {/* Top Banner Header with clickable button */}
      <MainHeader onOpenAddModal={() => setIsAddModalOpen(true)} />

      {/* Main content area — grid will go here later */}
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <p style={{ color: theme.colors.textSecondary, fontSize: "1.2rem" }}>
          Click the link above to add your first message!
        </p>
      </div>

      {/* The Add Message Modal */}
      <AddMessageModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={handleAddSuccess}
      />
    </main>
  );
}