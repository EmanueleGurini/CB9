import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const DefaultLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Outlet /> {/* <-- Fai attenzione al componente Outlet */}
      </div>
    </div>
  );
};

export default DefaultLayout;
