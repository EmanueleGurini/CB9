import { createPortal } from "react-dom";

function Modal({ children, isOpen, onClose }) {
  return createPortal(
    <>
      {isOpen && (
        <div className="w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60">
          <div className="w-64 p-16 bg-white flex justify-center z-50">
            {children}
            <button onClick={onClose} className="bg-red-400">
              chiudi modale
            </button>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

export default Modal;
