/* eslint-disable react/prop-types */
import "./style.scss";
const Modal = ({ children, onClose, onOpen }) => {
  if (!onOpen) {
    return null;
  }
  return (
    <div onClick={onClose} className="modal-wrapper">
      <div onClick={(e) => {
          e.stopPropagation();
        }} className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
