// src/app/home/constants/index.ts

export const CONTENTS = {
  // Page title and main headings
  PAGE_TITLE: "Public Message Board",
  MAIN_HEADER: "Welcome to the Public Message Board",
  SUB_HEADER: "Share your thoughts anonymously with everyone",
  APP_TITLE: "Have any message to say?",
  // Button texts
  ADD_MESSAGE_BUTTON: "Add New Message",
  CLOSE_BUTTON: "Close",
  SUBMIT_BUTTON: "Submit",

  // Add Message Modal
  ADD_MODAL: {
    TITLE: "Add New Message",
    NAME_LABEL: "Your Name (optional)",
    NAME_PLACEHOLDER: "Enter your name...",
    MESSAGE_LABEL: "Message",
    MESSAGE_PLACEHOLDER: "Write your message here...",
  },

  // View Message Modal
  VIEW_MODAL: {
    TITLE: "Message Details",
    FROM_LABEL: "From",
    MESSAGE_LABEL: "Message",
    POSTED_ON: "Posted on",
  },

  // Message Grid / List
  GRID: {
    NO_MESSAGES: "No messages yet. Be the first to post one!",
  VIEW_MODAL: {
    TITLE: "Message Details",
    FROM_LABEL: "From",
    MESSAGE_LABEL: "Message",
    POSTED_ON: "Posted on",
  },
  },
  // Success / Error messages (optional, for later)
  SUCCESS: "Message posted successfully!",
  ERROR: "Something went wrong. Please try again.",
  ANONYMOUS: "Anonymous",
  FORM: {
    SUBMIT: "Submit",
    SUBMITTING: "Submitting...",
  },

} as const;