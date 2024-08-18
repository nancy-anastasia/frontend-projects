import "./Backdrop.css";

// Renders a clickable backdrop based on the isVisible prop.
// Calls backdropClick when the backdrop is clicked.
const Backdrop = ({ isVisible, backdropClick }) => {
  return isVisible && <div className="backdrop" onClick={backdropClick}></div>;
};

export default Backdrop;
