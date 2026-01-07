"use client";

import { useEffect, useState } from "react";

import { Message } from "./type";
import MessageBoardLayout from "./MessageBoardLayout";

import { loadMessages as loadMessagesService } from "../../services/message.service";

export default function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selected, setSelected] = useState<Message | null>(null);

  async function loadMessages() {
    try {
      const data = await loadMessagesService();
      setMessages(data);
    } catch {
      console.error("Failed to load messages");
    }
  }

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      if (isMounted) {
        await loadMessages();
      }
    };
    run();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <MessageBoardLayout
      messages={messages}
      selected={selected}
      isAddOpen={isAddOpen}
      isViewOpen={isViewOpen}
      onOpenAdd={() => setIsAddOpen(true)}
      onCloseAdd={() => setIsAddOpen(false)}
      onView={(msg) => {
        setSelected(msg);
        setIsViewOpen(true);
      }}
      onCloseView={() => setIsViewOpen(false)}
      onPosted={loadMessages}
    />
  );
}
