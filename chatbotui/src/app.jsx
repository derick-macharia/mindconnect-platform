import React, { useState } from "react";
import "./index.css";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hi, I'm your AI support assistant. How are you feeling today?",
      sender: "ai",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const aiResponses = [
        "I'm here for you. Can you tell me more?",
        "That sounds tough. What usually helps you feel better?",
        "It’s okay to take things one step at a time.",
        "You’re not alone—thank you for sharing that with me.",
      ];
      const randomResponse =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];

      const aiMessage = {
        text: randomResponse,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1200);
  };

  return (
    <div className="chatbot-page">
      {/* Top navbar */}
      <div className="navbar">
        <button className="back-btn">← Back to Home</button>
        <h2 className="title">24/7 AI Mental Health Support</h2>
      </div>

      {/* Chat wrapper with card-style background */}
      <div className="chat-wrapper">
        <div className="chat-container">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.sender}`}>
              <p>{msg.text}</p>
              <span className="timestamp">{msg.timestamp}</span>
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>

      {/* Bottom cards section */}
      <div className="card-section">
        <div className="card">
          <div className="icon">🧘</div>
          <h4>Self-Care Tips</h4>
          <p className="desc">Quick exercises and habits to improve your wellbeing.</p>
        </div>
        <div className="card">
          <div className="icon">📚</div>
          <h4>Resources</h4>
          <p className="desc">Helpful articles, guides, and coping strategies.</p>
        </div>
        <div className="card">
          <div className="icon">👥</div>
          <h4>Community Forum</h4>
          <p className="desc">Connect anonymously with others for peer support.</p>
        </div>
        <div className="card">
          <div className="icon">🧑‍⚕️</div>
          <h4>Professional Help</h4>
          <p className="desc">Find licensed therapists and mental health experts.</p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
