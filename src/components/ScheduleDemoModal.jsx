import React from "react";
import ContactForm from "./ContactForm";

const ScheduleDemoModal = ({
  isOpen,
  onClose,
  animateCloseButton,
  setAnimateCloseButton,
}) => {
  if (!isOpen) return null;

  const handleBackgroundClick = () => {
    setAnimateCloseButton(true);
    setTimeout(() => {
      setAnimateCloseButton(false);
      onClose();
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-60 p-4"
      onClick={handleBackgroundClick}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-lg relative transform transition-all scale-100 sm:scale-105"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <ContactForm
          setIsModalOpen={onClose}
          animateCloseButton={animateCloseButton}
        />
      </div>
    </div>
  );
};

export default ScheduleDemoModal;
