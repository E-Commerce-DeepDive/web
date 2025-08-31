import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="my-6 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
