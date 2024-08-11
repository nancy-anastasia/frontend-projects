import "./NavDrawer.css";

const NavDrawer = ({ isVisible }) => {
  const navDrawerStyle = ["nav-drawer"];

  if (isVisible) {
    navDrawerStyle.push("show");
  }

  return <div className={navDrawerStyle.join(" ")}>NavDrawer</div>;
};

export default NavDrawer;
