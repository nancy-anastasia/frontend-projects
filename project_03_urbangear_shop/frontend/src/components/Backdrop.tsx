import "./Backdrop.css";

// Define the props type for the Backdrop component
interface BackdropProps {
  isVisible: boolean; // Determines whether the backdrop should be visible
  onBackdropClick: () => void; // Function to call when the backdrop is clicked
}

/**
 * Backdrop Component
 *
 * Renders a clickable backdrop when isVisible is true
 * Calls the onBackdropClick function when the backdrop is clicked
 */
const Backdrop = ({ isVisible, onBackdropClick }: BackdropProps) => {
  return isVisible ? (
    <div className="backdrop" onClick={onBackdropClick}></div>
  ) : null;
};

export default Backdrop;
