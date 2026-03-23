import React, { useState, createContext, useEffect } from "react";
import ChatMessages from "./ChatMessages.jsx";
import ChatInput from "./ChatInput.jsx";
import { styles } from "./styles.js";
import Typewriter from "./typewriter.jsx";

export const loadingContext = createContext();

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `You are prescript generator, make prescript in the format I put below
                Pack a lunchbox and consume it on top of a trash can in the streets of District 11 at 1 PM today.
                Bake dacquoise while the hour hand rests between 7 and 8, and eat it while watching a movie.
                Initiate a game of Never Have I Ever with the first five people you encounter. When one folds a finger, break it.
                Neatly clip the nails of the sixty-second person you come across.
                Pet quadrupedal animals five times.
                Spin a wheel and throw a cake at the person determined by the result.
                Consume eight crabs stored at room temperature and ripe persimmon at once.
                At the railing on the roof of a building, shout out the name of the person you dislike, then jump off. The height of the building does not matter.
                After a meal, discard all dishes that were used to serve it.
                On the morning after receiving the Prescript, drink three cups of water as soon as you get up.
                Race against residents that live in the same building as you to District 7. Measure the distance every twenty-three minutes and disqualify the one farthest away from the destination.
                Within three days, knit a scarf with a butterfly pattern.
                Dial any number. Give a New Year’s greetings and words of blessing to whoever receives the call.
                See green from a white wall.
                When hungry, consume a Cheeki’s cheeseburger with added onion.
                Fold thirty-nine paper cranes and throw them from the rooftop.
                At work, cut the ear of the first person to fulminate against you.
                When your eyes meet another person’s, nod at them.
                Return to your home this instant. You may leave once a dog barks in front of your house one time.
                Wear light green clothing and take 10 steps in a triangle-shaped alley.
                Using these examples, generate prescripts that can be done in someones day to day life
                You are also allowed to purposely give out vague prescripts, for example, "See green from a white wall"
                Additionally, it is very important to make sure that the prescripts aren't too long, keep it under 35 words
                Not only that, make sure that the prescripts have a clear time limit, i.e 10 minutes, 25 seconds. Although this is not necessary for all tasks. 
                If no time limit is given, make sure to say "no time limit", so for example, say "Walk through a doorway, no time limit"
                Also, make sure that the task of each prescript is not repeated, so don't give me a prescript that tells me to brush my teeth again and make sure to be unpredictable.
                You are allowed to "schedule" a task to be done later as well, e.g "In 90 hours drink a cup of milk"
                Do not offer options to choose from, and everything you say must be a command
    `,
    },
    {
      role: "starter",
      content: `I have the talent to walk the path in front of me, if nothing else... 
      Even if I don't have much happiness, I know where to go in the immediate future. And that's enough for me.`,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const [started, setStarted] = useState(false);

  const changeLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const checkConnection = async () => {
      // Tags endpoint is a quick way to see if the server is alive
      const response = await fetch("http://localhost:11434/api/tags");
      if (response.ok) {
        console.log("Ollama is awake.");
        setIsBooting(false); // AI is officially "Booted"
      }
    };

    checkConnection();
  }, []);

  async function sendMessage() {
    console.log("generating...");
    const userMessage = {
      role: "user",
      content:
        "Generate a prescript, being vague is allowed, but be unpredictable",
    };
    const updatedMessages = messages.concat(userMessage);

    setMessages(updatedMessages);
    setLoading(true);
    setIsLoading(true);

    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3.1",
        messages: updatedMessages,
        stream: false,
      }),
    });

    const data = await response.json();

    console.log("Ollama response:", data);

    const assistantMessage = {
      role: "assistant",
      content: data.message.content,
    };

    setMessages(updatedMessages.concat(assistantMessage));
    setLoading(false);
  }

  if (!started) {
    return (
      <div style={styles.overlay}>
        <button onClick={() => setStarted(true)} style={styles.startButton}>
          Approach the Loom
        </button>
      </div>
    );
  } else {
    return (
      <loadingContext.Provider value={{ isLoading, changeLoading }}>
        <div style={styles.container}>
          <h2 style={styles.title}>The Loom</h2>

          {isBooting ? (
            <div style={styles.bootingOverlay}>
              <Typewriter
                content="The pendulum begins to wake... please wait."
                speed={100}
              />
            </div>
          ) : (
            <>
              <ChatMessages messages={messages} loading={loading} />
              <ChatInput onSend={sendMessage} disabled={isBooting} />
            </>
          )}
        </div>
      </loadingContext.Provider>
    );
  }
}

export default Chatbot;
