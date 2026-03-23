import { useState, useEffect, useContext, useRef } from "react";
import { loadingContext } from "./Chatbot.jsx";
import loom from "./assets/loom.mp3";

// ADD OPTION TO MUTE THE SOUND
function Typewriter({ content, speed, shouldNotify = false }) {
  const [displayedText, setDisplayedText] = useState("");
  const { changeLoading } = useContext(loadingContext);
  const hasPlayed = useRef(false); // this is used t save a value between renders, i.e if i want to save a response between renders i use this
  const loom_sfx = new Audio(loom);
  loom_sfx.volume = 0.01;

  useEffect(() => {
    let isMounted = true; // Guard against memory leaks
    setDisplayedText("");
    hasPlayed.current = false;

    const typingInterval = setInterval(() => {
      // 1. Check if we should play the sound BEFORE updating text
      if (!hasPlayed.current) {
        loom_sfx.play().catch((e) => console.log("Playback blocked or failed"));

        hasPlayed.current = true; // Lock it immediately
        console.log("Audio triggered once.");
      }

      setDisplayedText((prev) => {
        if (prev.length >= content.length) {
          clearInterval(typingInterval);
          if (shouldNotify && isMounted) {
            setTimeout(changeLoading, 1000);
          }
          loom_sfx.pause();

          return prev;
        }
        return prev + content.charAt(prev.length);
      });
    }, speed);

    return () => {
      isMounted = false;
      clearInterval(typingInterval);
    };
  }, [content, speed]);

  return <span style={{ whiteSpace: "pre-wrap" }}>{displayedText}</span>;
}

export default Typewriter;
