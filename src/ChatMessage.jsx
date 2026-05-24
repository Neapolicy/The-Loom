import React from "react";

function ChatMessage({ role, content }) {

  return (
    <div className="message">
      {content}
    </div>
  );
}

export default ChatMessage;
