import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </>
  );
};

export default MainLayout;
