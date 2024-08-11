import "./Backdrop.css";

const Backdrop = ({ isVisible, backdropClick }) => {
  return isVisible && <div className="backdrop" onClick={backdropClick}></div>;
};

export default Backdrop;
