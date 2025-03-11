import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Layout = () => {
  return (
    <div className="background h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
