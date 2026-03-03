import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";


// import Footer from "../../components/footer/Footer";
export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}