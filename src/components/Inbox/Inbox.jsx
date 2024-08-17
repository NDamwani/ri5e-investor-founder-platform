import { useState } from "react";
import { useLocation } from "react-router-dom";

const mentorList = [
  {
    mentorName: "Harshil Kumar",
  },
  {
    mentorName: "Rahul Kumar",
  },
  {
    mentorName: "abc",
  },
  {
    mentorName: "xyz",
  },
  {
    mentorName: "stu",
  },
  {
    mentorName: "def",
  },
  {
    mentorName: "pqr",
  },
  {
    mentorName: "mno",
  },
];

const mentorMessages = [
  {
    mentorName: "Harshil Kumar",
    messages: [
      {
        sender: "Parth",
        message: "Hello Harshil I would like to have you as my mentor",
      },
      {
        sender: "Harshil",
        message: "Hey Parth, I would love to be your mentor",
      },
    ],
  },
  {
    mentorName: "Rahul Kumar",
    messages: [
      {
        sender: "Parth",
        message: "Hello Rahul I would like to have you as my mentor",
      },
      {
        sender: "Rahul",
        message: "Hey Parth, I would love to be your mentor",
      },
      {
        sender: "Parth",
        message: "Hello Rahul I would like to have you as my mentor",
      },
      {
        sender: "Rahul",
        message: "Hey Parth, I would love to be your mentor",
      },
      {
        sender: "Parth",
        message: "Hello Rahul I would like to have you as my mentor",
      },
      {
        sender: "Rahul",
        message: "Hey Parth, I would love to be your mentor",
      },
      {
        sender: "Parth",
        message: "Hello Rahul I would like to have you as my mentor",
      },
      {
        sender: "Rahul",
        message: "Hey Parth, I would love to be your mentor",
      },
    ],
  },
];

export default function Inbox() {
  const location = useLocation();

  const [currMentor, setCurrMentor] = useState(() => {
    if (location.state) {
      const filterMentor = mentorMessages.filter(
        (mentor) => mentor.mentorName === location.state.mentorName,
      );
      if (filterMentor.length > 0) {
        return filterMentor[0];
      }
    }
    return {
      mentorName: "",
      messages: [],
    };
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      sender: "Parth",
      message: message,
    };
    const newMentor = {
      mentorName: currMentor.mentorName,
      messages: [...currMentor.messages, newMessage],
    };
    setCurrMentor(newMentor);
    setMessage("");
  };

  return (
    <section className="my-32 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
      <div
        className={`h-[600px] min-w-80 bg-accent/80 text-center ${currMentor !== "" ? "max-sm:hidden" : ""}`}
      >
        <div className="border-b-4 border-white/10 p-4 sm:p-8">
          <p className="text-4xl">Messages</p>
        </div>
        <div className="mentor-scroolbar h-[480px] overflow-y-scroll">
          <ul>
            {mentorList.map((mentor) => (
              <li
                key={mentor.mentorName}
                onClick={() => {
                  setCurrMentor(
                    mentorMessages.filter(
                      (message) => message.mentorName === mentor.mentorName,
                    )[0],
                  );
                }}
              >
                <div className="my-2 border-b-4 border-white/10 p-4 hover:cursor-pointer">
                  <p className="text-lg font-semibold">{mentor.mentorName}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`h-[600px] w-full bg-accent sm:w-[600px] ${currMentor !== "" ? "" : "max-sm:hidden"}`}
      >
        <div className="relative p-4 text-center">
          {currMentor.mentorName !== "" && (
            <button
              onClick={() => {
                setCurrMentor("");
              }}
              className="absolute left-5 sm:hidden"
            >
              Back
            </button>
          )}
          <p className="text-3xl">
            {currMentor.mentorName === ""
              ? "Select a mentor"
              : currMentor.mentorName}
          </p>
        </div>
        <div
          className={`scrollbar h-[360px] ${currMentor.mentorName !== "" ? "overflow-y-scroll" : ""}`}
        >
          <ul>
            {currMentor.messages.length > 0 &&
              currMentor?.messages.map((message, index) => (
                <li key={index} className="p-4">
                  <p className="text-lg font-bold">{message.sender}</p>
                  <p>{message.message}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className={`${currMentor.mentorName === "" ? "hidden" : ""}`}>
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
      </div>
    </section>
  );
}
