import React from "react";
import "./Loader.css";

/**
 * Loader Component component is a simple visual indicator for loading processes. It is designed to show a spinning animation to indicate that a background activity is ongoing until it completes.
 *
 * Usage:
 * It can be rendered inside any component that requires a loading state indication,
 * such as during an API call or data fetching process.
 */
const Loader = () => {
  return (
    /* Wrapper container for the loader with a specific class for styling purposes. */
    <div className="loader-container">
      {/* The actual loader element */}
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
