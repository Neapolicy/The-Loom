import React from "react";
import { styles } from "./styles.js";

function ChatMessage({ role, content }) {
  const messageStyle = role === "user" ? styles.userMsg : styles.assistantMsg; // decides the style that is used

  return (
    <div style={messageStyle}>
      {content}
    </div>
  );
}

export default ChatMessage;
