"use client";

import { useEffect, useState } from "react";
import { Message } from "./type";
import MessageBoardLayout from "./MessageBoardLayout";
import { loadMessages as loadMessagesService } from "../services/message.service";

export default function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);

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
      isAddOpen={isAddOpen}
      onOpenAdd={() => setIsAddOpen(true)}
      onCloseAdd={() => setIsAddOpen(false)}
      onPosted={loadMessages}
    />
  );
}
