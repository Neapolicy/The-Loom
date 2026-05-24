import { useContext, useRef, useState } from "react";
import { loadingContext } from "./Chatbot.jsx";

function ChatInput({ onSend, loading }) {
  // Accept loading as a prop
  const { isLoading } = useContext(loadingContext);
  const [isFirst, setIsFirst] = useState(true);
  const [pass, setPass] = useState(0);
  const [fail, setFail] = useState(0);

  const handleClick = (event) => {
    // Only send if the API is NOT fetching AND the typewriter is NOT typing
    if (!loading && !isLoading) {
      onSend();
      setIsFirst(false);
      if (event.currentTarget.classList.contains("pass")) {
        setPass(pass + 1);
      }
      if (event.currentTarget.classList.contains("fail")) {
        setFail(fail + 1);
      }
    }
  };

  return (
    <div className="chat-controls">
      {loading || isLoading ? (
        <div>Waiting...</div> // REMEMBER TO STYLE THIS DIV
      ) : isFirst ? (
        <button
          onClick={handleClick}
          disabled={loading || isLoading} // Physically disable the button
        >
          Generate Prescript
        </button>
      ) : (
        <div>
          <button
            // style={{
            //   ...styles.button,
            //   opacity: loading || isLoading ? 0.5 : 1,
            // }}
            disabled={loading || isLoading} // Physically disable the button
            onClick={handleClick}
            className="pass"
          >
            Pass
          </button>
          <button
            onClick={handleClick}
            disabled={loading || isLoading} // Physically disable the button
            className="fail"
          >
            Fail
          </button>
        </div>
      )}

      <div>Pass: {pass}</div>
      <div>Fail: {fail}</div>
    </div>
  );
}

export default ChatInput;
