import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useUser } from "../../context/UserContextProvider";
import { constants } from "../../utility/constants";
import { mentorMessages } from "../../lib/constants/data";

export default function Inbox() {
  const location = useLocation();
  const state = location.state;
  const id = state ? state.id : null;
  const { axiosPost, axiosGet } = useAxiosPrivate();
  const { decodeToken, isMentor } = useUser();
  const userId = decodeToken(JSON.parse(localStorage.getItem("userToken"))).id;

  const [conversationList, setConversationList] = useState([]);
  const [currentConversation, setCurrentConversation] = useState([]);
  const [currMessages, setCurrMessages] = useState([]);
  const [messageSend, setMessageSend] = useState(false);
  const [message, setMessage] = useState("");

  console.log("current conversation: ", currentConversation);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (!currentConversation) return;
        if (isMentor) {
          const response = await axiosGet(
            constants.GETMENTORMESSAGES + currentConversation.conversationId,
          );
          console.log("mentor messages: ", response);
        } else {
          const response = await axiosGet(
            constants.GETPRODUCTMESSAGES + currentConversation.conversationId,
          );
          console.log("product messages: ", response);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchMessages();
  }, [currentConversation, messageSend]);

  useEffect(() => {
    console.log("conversation list: ", conversationList);
  }, [conversationList]);

  useEffect(() => {
    const initiateConversation = async () => {
      try {
        if (!id) return;
        const response = await axiosPost(constants.INITIATECONVERSATION, {
          senderId: userId,
          recieverId: id,
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    const fetchConversations = async () => {
      try {
        if (isMentor) {
          const response = await axiosGet(
            constants.GETPRODUCTCONVERSATION + userId,
          );

          console.log("Is mentor call", response);
          setConversationList(response.conversationData);
        } else {
          const response = await axiosGet(
            constants.GETMENTORCONVERSATION + userId,
          );

          console.log("Product call", response);
          setConversationList(response.conversationData);
        }
      } catch (e) {
        console.log(e);
      }
    };
    initiateConversation();
    fetchConversations();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message === "") return;
    try {
      setMessageSend(!messageSend);
      console.log("sender id:", userId);
      const response = await axiosPost(constants.SENDMESSAGE, {
        conversationId: currentConversation.conversationId,
        senderId: userId,
        message,
        receiverId: currentConversation.receiverId,
      });
      console.log("send message:", response);
      setMessage("");
      setMessageSend(!messageSend);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="my-32 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
      <div
        className={`h-[600px] w-80 bg-accent/80 text-center ${currMentor !== "" ? "max-sm:hidden" : ""}`}
      >
        <div className="border-b-4 border-white/10 p-4 sm:p-8">
          <p className="text-4xl">Messages</p>
        </div>
        <div className="mentor-scroolbar h-[480px] overflow-y-scroll">
          <ul>
            {conversationList.map((mentor, index) => (
              <li
                key={index}
                onClick={() => {
                  setCurrentConversation({
                    conversationId: mentor.conversationId,
                    mentorName: mentor.details.fullName,
                    receiverId: mentor.details.recieverId,
                    email: mentor.details.email,
                    messages: [], // change with on click call using conv id
                  });
                }}
              >
                <div className="my-2 border-b-4 border-white/10 p-4 hover:cursor-pointer">
                  <p className="text-lg font-semibold">
                    {mentor.details?.fullName}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`h-[600px] w-full bg-accent sm:w-[600px] ${currentConversation ? "" : "max-sm:hidden"}`}
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
            {currentConversation
              ? currentConversation.mentorName
              : "Select a mentor"}
          </p>
        </div>
        <div
          className={`scrollbar h-[360px] ${currMentor.mentorName !== "" ? "overflow-y-scroll" : ""}`}
        >
          <ul>
            {currentConversation?.messages?.map((message, index) => (
              <li key={index} className="p-4">
                <p className="text-lg font-bold">{message.sender}</p>
                <p>{message.message}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${currentConversation === "" ? "hidden" : ""}`}>
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
