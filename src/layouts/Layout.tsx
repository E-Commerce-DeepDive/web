import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "./Footer";
import { Header } from "./Header";

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
