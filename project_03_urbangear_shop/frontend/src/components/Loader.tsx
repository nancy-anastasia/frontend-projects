import "./Loader.css";

/**
 * Loader Component
 *
 * This component is a simple visual indicator for loading processes. It displays
 * a spinning animation to indicate that a background activity is ongoing until it completes.
 *
 * Usage:
 * This component can be rendered inside any parent component that requires a loading state indication,
 * such as during an API call or data fetching process.
 */
const Loader = () => {
  return (
    /* Wrapper container for the loader with a specific class for styling purposes */
    <div className="loader-container">
      {/* The actual loader element */}
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
