import "./Backdrop.css";

const Backdrop = ({ isVisible }) => {
  return isVisible && <div className="backdrop"></div>;
};

export default Backdrop;
