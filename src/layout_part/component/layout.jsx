import { Outlet, useNavigate } from "react-router-dom";
import TopHeader from "./top_page";
import Header from "./header_page";
import Slider from "./slider_page";
import Footer from "./footer_page";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div id="page-container">
      <TopHeader />
      <Header />
      <Slider />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
