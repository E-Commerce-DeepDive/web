import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="bg-black text-white text-sm text-center h-10 flex items-center justify-center">
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      <Link to="/shopnow">ShopNow</Link>
      <select className="ml-12 outline-none">
        <option className="text-black">English</option>
        <option className="text-black">عربي</option>
      </select>
    </div>
  );
}
