import { UserModalContext } from "../providers/ModalProvider";
import { useContext, useState } from "react";

// Using useContext hooks, creating a custom hook "usePosts" to enable other components to able to access data from the context
export const useUserModal = () => {
  return useContext(UserModalContext);
};

export const useUserProvideModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [componentType, setComponentType] = useState<string>("");

  const onClose = () => {
    setIsModalOpen(false);
    changeComponentType("");
  };

  const onOpen = () => {
    setIsModalOpen(true);
  };

  const changeComponentType = (type: string) => {
    setComponentType(type);
  };

  return { isModalOpen, onClose, onOpen, componentType, changeComponentType };
};
