import {Message} from "../components/messageBoard/type";

const API_URL = "/api/messages";

export async function loadMessages(): Promise<Message[]> {
  const response = await fetch(API_URL,{cache: 'no-store'});
  if (!response.ok) {
    throw new Error("Failed to fetch messages");
  }
  return response.json();
}

export async function createMessage(data: {name: string; message: string}){
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create message");
  }

  return response.json(); 
}