// src/app/home/page.tsx

"use client";

import { useState, useEffect } from "react";

import Button from "./ui/Button";
import Modal from "./ui/Modal";
import MessageGrid from "./components/MessageGrid";
import MessageForm from "./components/MessageForm";

import { CONTENTS } from "./constants/contents";

interface Message {
  id: number;
  name: string | null;
  message: string;
  createdAt: string;
}

function ViewMessageContent({ post }: { post: Message }) {
  return (
    <div className="view-message">
      <div>
        <p className="view-label">{CONTENTS.VIEW_MODAL.FROM_LABEL}</p>
        <p className="view-name">
          {post.name || CONTENTS.ANONYMOUS}
        </p>
      </div>

      <div>
        <p className="view-label">{CONTENTS.VIEW_MODAL.MESSAGE_LABEL}</p>
        <p className="view-message-text">{post.message}</p>
      </div>

      <div className="text-right">
        <p className="view-date">
          {CONTENTS.VIEW_MODAL.POSTED_ON}{" "}
          {new Date(post.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/messages");
      if (res.ok) {
        setMessages(await res.json());
      }
    } catch {
      console.error("Failed to load messages");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleViewMessage = (message: Message) => {
    setSelectedMessage(message);
    setIsViewModalOpen(true);
  };

  const handleMessagePosted = () => {
    fetchMessages();
    setIsAddModalOpen(false);
  };

  return (
    <>
      {/* Updated Navbar - matches reference exactly */}
      <nav className="app-navbar">
        <div className="navbar-container">
          <h1 className="navbar-title">
            {CONTENTS.APP_TITLE} {/* or directly "Have any message to say?" */}
          </h1>
          <Button onClick={() => setIsAddModalOpen(true)}>
            {CONTENTS.ADD_MESSAGE_BUTTON}
          </Button>
        </div>
      </nav>

      {/* Main content */}
      <main className="page-main">
        <MessageGrid messages={messages} onViewMessage={handleViewMessage} />

        <Modal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title={CONTENTS.ADD_MODAL.TITLE}
        >
          <MessageForm
            onSuccess={handleMessagePosted}
            onClose={() => setIsAddModalOpen(false)}
          />
        </Modal>

        <Modal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          title={CONTENTS.VIEW_MODAL.TITLE}
        >
          {selectedMessage && <ViewMessageContent post={selectedMessage} />}
        </Modal>
      </main>
    </>
  );
}
