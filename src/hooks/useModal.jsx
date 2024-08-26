import { useState } from "react";

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModalFunc = () => {
    setIsModalVisible(true);
  };
  const closeModalFunc = () => {
    setIsModalVisible(false);
  };

  return { isModalVisible, openModalFunc, closeModalFunc };
};
export { useModal };
