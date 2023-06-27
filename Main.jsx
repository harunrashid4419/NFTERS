import { Outlet } from "react-router-dom";
import Navbar from "./src/Components/Shared/Navbar/Navbar";
import Footer from "./src/Components/Shared/Footer/Footer";

function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
export default Main;
