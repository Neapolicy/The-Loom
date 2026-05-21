import { useState, useEffect, useContext, useRef } from "react";
import { loadingContext } from "./Chatbot.jsx";
import loom from "./assets/loom.mp3";

function Typewriter({ content, speed, shouldNotify = false }) {
  const [displayedText, setDisplayedText] = useState("");
  const { changeLoading } = useContext(loadingContext);
  const hasPlayed = useRef(false);

  const loom_sfx = useRef(new Audio(loom));

  useEffect(() => {
    loom_sfx.current.volume = 0.01;
  }, []); // Set volume once on mount

  useEffect(() => {
    let isMounted = true;
    setDisplayedText("");
    hasPlayed.current = false;

    loom_sfx.current.pause();
    loom_sfx.current.currentTime = 0;  // rewind so it's fresh next time

    const typingInterval = setInterval(() => {
      if (!hasPlayed.current) {
        loom_sfx.current.play().catch((e) => console.log("Playback blocked or failed"));
        hasPlayed.current = true;
      }

      setDisplayedText((prev) => {
        if (prev.length >= content.length) {
          clearInterval(typingInterval);
          if (shouldNotify && isMounted) {
            setTimeout(changeLoading, 1000);
          }
          loom_sfx.current.pause();
          return prev;
        }
        return prev + content.charAt(prev.length);
      });
    }, speed);

    return () => {
      isMounted = false;
      clearInterval(typingInterval);
      // Stop audio when content changes (new message generated)
      loom_sfx.current.pause();
      loom_sfx.current.currentTime = 0;
    };
  }, [content, speed]);

  return <span>{displayedText}</span>;
}

export default Typewriter;