import React, { useEffect, useRef } from "react";

const Chatbox = ({
  setMessage,
  handleSubmit,
  message,
  currentConversation,
  userId,
}) => {
  console.log("currentConversation", currentConversation);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentConversation?.messages]);

  return (
    <div>
      <div className="scrollbar h-[360px] overflow-y-scroll">
        <ul>
          {currentConversation?.messages?.map((msg, index) => (
            <li key={index} className="p-4">
              <p className="text-lg font-bold">{msg.sender}</p>
              <p
                className={`p-2 ${msg.senderId === userId ? "" : "text-right"}`}
              >
                {msg.message}
              </p>
            </li>
          ))}
          <div ref={messagesEndRef} />
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="p-4">
          <textarea
            placeholder="Type your message here"
            className="w-full rounded-lg bg-white/5 p-3 text-white focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="mr-4 rounded border border-white bg-transparent p-2 px-6 py-2 font-semibold text-white transition hover:bg-gray-300 hover:text-black"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbox;
