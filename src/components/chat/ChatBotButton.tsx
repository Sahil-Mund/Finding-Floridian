import React, { useState } from "react";
import "../../styles/chatbot.scss";
import ChatModal from "./ChatModal";
import ModalProvider from "../ModalProvider";

interface ChatBotButtonProps {
  // Add your component's props here
}

const ChatBotButton: React.FC<ChatBotButtonProps> = (props) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const chatIcon =
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/428689c9-f4ae-4a7e-a616-ae3e24f4825b.png";
  const chatIconOnHover =
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/83b21b60-caa8-4961-9c49-236f34a1845f.png";

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="chatbot-btn"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleModalOpen}
      >
        <div className="bot-overlay">
          <div>
            <img
              // src={isHover ? chatIconOnHover : chatIcon}
              src={chatIcon}
              width={isHover ? 204 : 66}
              height={isHover ? 68 : 66}
              alt="chat-icon"
            />
          </div>
          <div>
            <span>Try Me Out,</span>
            <span>I am your mini home girl</span>
          </div>
        </div>
        {/* <img
          // src={isHover ? chatIconOnHover : chatIcon}
          src={chatIcon}
          width={isHover ? 204 : 66}
          height={isHover ? 68 : 66}
          alt="chat-icon"
        /> */}
      </div>
      {/* <div className="modal-overlay"></div> */}
      {/* <ChatModal isOpen={isOpen} handleModalOpen={setIsOpen} /> */}
      <ModalProvider isOpen={isOpen} onClose={closeModal}>
        <ChatModal isOpen={isOpen} handleModalOpen={setIsOpen} />
      </ModalProvider>
    </>
  );
};

export default ChatBotButton;
