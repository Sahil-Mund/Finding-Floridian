import React, { useEffect, useRef, useState } from "react";
import { chatDetails } from "../../assets/constansts";
import { EmojiKeyboard } from "reactjs-emoji-keyboard";

import { CloseIcon, EmojiIcon, SubmitArrowIcon } from "../../assets/svg";

interface ChatModalProps {
  isOpen: boolean;
  handleModalOpen: any;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, handleModalOpen }) => {
  const botAvatar =
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/90f5ed50-d297-4ed2-a29f-86c80c996f81.png";
  const userAvatar =
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/bd6de4e9-86b6-4035-862b-b232569a4813.png";

  const [inputText, setInputText] = useState<string>("");
  const [chats, setChats] = useState<any>(chatDetails);
  const [showEmojiKeyboard, setShowEmojiKeyboard] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState("");

  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll down when messages change
    scrollToBottom();
  }, [chats, isOpen]);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US");
    setCurrentDate(formattedDate);
  }, []);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      // Scroll to the bottom of the container
      messageContainerRef.current.style.scrollBehavior = "smooth";

      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };

  const handleChatSubmit = () => {
    if (!inputText) return;

    const userMsg = {
      seq: 10,
      bot: false,
      message: inputText,
    };
    const botMsg = {
      seq: 11,
      bot: true,
      message:
        "Thank you for your response, we'll definately get back to you on this.",
    };
    setChats((prev: any) => [...prev, userMsg, botMsg]);
    setInputText((prev) => "");
    console.log(inputText);
  };

  const handleEmojiSelection = (emoji: any) => {
    setInputText((prev) => prev + emoji);
  };
  return (
    <div className="chat-modal" style={{ display: isOpen ? "block" : "none" }}>
      <div className="modal-container">
        <div className="date-container">
          <p>{currentDate}</p>
          <div className="close-modal">
            <CloseIcon
              onClick={() => handleModalOpen(false)}
              className="pointer"
            />
          </div>
        </div>
        <hr />
        <div className="chatbox" ref={messageContainerRef}>
          {chats?.map((msg: any, index: number) => (
            <div
              className={`chat-container ${
                msg.bot ? "align-left" : "align-right"
              }`}
              key={`msg-${index}`}
            >
              <div className="message">
                <p>{msg.message}</p>
              </div>
              <div className="user-icon">
                <img src={msg.bot ? botAvatar : userAvatar} alt="avatar-icon" />
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className="bottom-container">
          <div className="form">
            <div className="left">
              {showEmojiKeyboard ? (
                <span className="emoji-close-btn pointer" onClick={() => setShowEmojiKeyboard((prev) => !prev)}>X</span>
              ) : (
                <EmojiIcon
                  onClick={() => setShowEmojiKeyboard((prev) => !prev)}
                  className="pointer"
                />
              )}

              {showEmojiKeyboard && (
                <div className="emoji-picker">
                  <EmojiKeyboard
                    height={320}
                    width={350}
                    theme="light"
                    searchLabel="Search For Emojis"
                    searchDisabled={false}
                    onEmojiSelect={(emoji) =>
                      handleEmojiSelection(emoji.character)
                    }
                    categoryDisabled={false}
                  />
                </div>
              )}
              <input
                placeholder="Start typing..."
                value={inputText}
                name="message"
                onChange={(e) => setInputText(e.target.value)}
                type="text"
              />
            </div>
            <button
              type="submit"
              style={{ border: "none", outline: "none" }}
              onClick={handleChatSubmit}
            >
              {" "}
              <SubmitArrowIcon style={{ width: "32px" }} className="pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
