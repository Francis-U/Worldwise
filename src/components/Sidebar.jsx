import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      {/* outlet is similar to {children}, it displays the information 
      passed in the nested Route */}

      <Footer />
    </div>
  );
}

export default Sidebar;
