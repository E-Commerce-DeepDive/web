import { Link } from "react-router-dom";

export default function Account() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans">
      {/* Breadcrumb */}
      <div className="flex gap-60">
      <nav className="text-sm text-[#aaa] mb-8">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">My Account</span>
      </nav>
         <p  className="text-right mb-8">
            Welcome! <span className="font-sans text-[#DB4444] ">Md Rimel</span>
          </p>
      </div>

      <div className="flex gap-16">
        {/* Sidebar */}
        <aside className="w-1/4 text-gray-800 text-base space-y-10">
          <div>
            <h3 className="font-semibold mb-3 text-xl">Manage My Account</h3>
            <ul className="space-y-2 text-secondary">
              <li><Link to="#" className="hover:text-primary text-[#DB4444]">My Profile</Link></li>
              <li><Link to="#" className="hover:text-primary text-[#aaa]">Address Book</Link></li>
              <li><Link to="#" className="hover:text-primary text-[#aaa]">My Payment Options</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-xl">My Orders</h3>
            <ul className="space-y-2 text-secondary">
              <li><Link to="#" className="hover:text-primary text-[#aaa]">My Returns</Link></li>
              <li><Link to="#" className="hover:text-primary text-[#aaa]">My Cancellations</Link></li>
            </ul>
          </div>
          <div>
            <Link to="/" className="hover:underline font-semibold ">My Wishlist</Link>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 border border-[#0000000D] w-[870px]  shadow-md rounded-lg p-8">

          {/* Edit Profile */}
          <h2 className=" font-sans text-xl font-[500] mb-8 text-[#DB4444]">Edit Your Profile</h2>

          {/* Profile Form */}
          <form className="grid grid-cols-2 gap-8">
            {/* First Name */}
            <div>
              <label className="block mb-2">First Name</label>
              <input
                type="text"
                defaultValue="Md"
                className="w-[330px] h-[50px] border bg-[#F5F5F5] border-[#F5F5F5] text-[#aaa] outline-none rounded-md px-4 py-3  "
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-2">Last Name</label>
              <input
                type="text"
                defaultValue="Rimel"
                className="w-[330px] h-[50px] border bg-[#F5F5F5] border-[#F5F5F5] text-[#aaa] outline-none rounded-md px-4 py-3 "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 ">Email</label>
              <input
                type="email"
                defaultValue="rimel111@gmail.com"
                className="w-[330px] h-[50px] border bg-[#F5F5F5] border-[#F5F5F5] text-[#aaa] outline-none rounded-md px-4 py-3 "
              />
            </div>

            {/* Address */}
            <div>
              <label className="block mb-2 ">Address</label>
              <input
                type="text"
                defaultValue="Kingston, 5236, United State"
                className="w-[330px] h-[50px] border bg-[#F5F5F5] border-[#F5F5F5] text-[#aaa] outline-none rounded-md px-4 py-3 "
              />
            </div>
          </form>

          {/* Password Changes */}
          <div className="mt-12">
            <h3 className=" mb-6">Password Changes</h3>
            <div className="space-y-6">
              <input
                type="password"
                placeholder="Current Password"
                className="w-[710px] h-[50px] border bg-[#f5f5f5] border-[#f5f5f5] text-[#aaa] outline-none rounded-md px-4 py-3 "
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-[710px] h-[50px] border bg-[#f5f5f5] border-[#f5f5f5] text-[#aaa] outline-none rounded-md px-4 py-3"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-[710px] h-[50px] border bg-[#f5f5f5] border-[#f5f5f5] text-[#aaa] outline-none rounded-md px-4 py-3"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-6 mt-10">
            <button
              type="button"
              className=" hover:border-[#DB4444] hover:bg-[#DB4444] rounded cursor-pointer text-1xl "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded bg-primary text-white hover:bg-[#DB4444] cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
