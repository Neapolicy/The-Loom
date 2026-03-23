import { useContext } from "react";
import ChatMessage from "./ChatMessage.jsx";
import { styles } from "./styles.js";
import Typewriter from "./typewriter.jsx";
import { loadingContext } from "./Chatbot.jsx";

function ChatMessages({ messages, loading }) {
  const { isLoading } = useContext(loadingContext);

  // Filter for non-user/system messages
  const visibleMessages = messages.filter(
    (msg) => msg.role !== "system" && msg.role !== "user"
  );
  
  const lastMessage = visibleMessages[visibleMessages.length - 1];

  function displayMessage() {
    // PHASE 1: We are waiting for the API OR the "Pendulum" is typing
    if (loading || isLoading) {
      return (
        <ChatMessage
          role="assistant"
          content={<Typewriter content="The pendulum swings in response..." speed={50} shouldNotify={true}/>}
        />
      );
    }

    // PHASE 2: API is done AND Pendulum finished typing
    if (lastMessage) {
      return (
        <ChatMessage
          role={lastMessage.role}
          content={<Typewriter content={lastMessage.content} speed={50} shouldNotify={false}/>}
        />
      );
    }

    return null;
  }

  return <div style={styles.messages}>{displayMessage()}</div>;
}

export default ChatMessages;
