import { useState, useEffect, useContext, useRef } from "react";
import { loadingContext } from "./Chatbot.jsx";

function Typewriter({ content, speed, shouldNotify = false }) {
  const [displayedText, setDisplayedText] = useState("");
  const { changeLoading } = useContext(loadingContext);
  const hasPlayed = useRef(false);
  const loomSfx = useRef(null);

  useEffect(() => {
    let cancelled = false;

    import("./assets/loom.mp3")
      .then((module) => {
        if (!cancelled) {
          loomSfx.current = new Audio(module.default);
          loomSfx.current.volume = 0.01;
        }
      })
      .catch(() => {
        // Audio is optional — typing still works without it
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    setDisplayedText("");
    hasPlayed.current = false;

    if (loomSfx.current) {
      loomSfx.current.pause();
      loomSfx.current.currentTime = 0;
    }

    const typingInterval = setInterval(() => {
      if (!hasPlayed.current && loomSfx.current) {
        loomSfx.current.play().catch(() => {});
        hasPlayed.current = true;
      }

      setDisplayedText((prev) => {
        if (prev.length >= content.length) {
          clearInterval(typingInterval);
          if (shouldNotify && isMounted) {
            setTimeout(changeLoading, 1000);
          }
          if (loomSfx.current) {
            loomSfx.current.pause();
          }
          return prev;
        }
        return prev + content.charAt(prev.length);
      });
    }, speed);

    return () => {
      isMounted = false;
      clearInterval(typingInterval);
      if (loomSfx.current) {
        loomSfx.current.pause();
        loomSfx.current.currentTime = 0;
      }
    };
  }, [content, speed, shouldNotify, changeLoading]);

  return <span>{displayedText}</span>;
}

export default Typewriter;