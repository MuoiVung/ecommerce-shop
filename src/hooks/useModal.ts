import { useCallback, useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  return { showModal, handleCloseModal, handleOpenModal };
};

export default useModal;
