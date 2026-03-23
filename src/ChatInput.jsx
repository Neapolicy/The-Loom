import { useContext } from "react";
import { loadingContext } from "./Chatbot.jsx";
import { styles } from "./styles.js";

function ChatInput({ onSend, loading }) { // Accept loading as a prop
  const { isLoading } = useContext(loadingContext);

  function handleClick() {
    // Only send if the API is NOT fetching AND the typewriter is NOT typing
    if (!loading && !isLoading) {
      onSend(); 
    }
  }

  return (
    <div style={styles.inputRow}>
      <button 
        style={{...styles.button, opacity: (loading || isLoading) ? 0.5 : 1}} 
        onClick={handleClick}
        disabled={loading || isLoading} // Physically disable the button
      >
        {loading || isLoading ? "Waiting..." : "Generate Prescript"}
      </button>
    </div>
  );
}

export default ChatInput;
