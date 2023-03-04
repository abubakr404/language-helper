import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <main className="page">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <section className="page-content">
        <Navbar />
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardLayout;
