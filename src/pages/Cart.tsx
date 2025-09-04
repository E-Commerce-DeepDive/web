
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      
      <p className="text-gray-500 mb-6">
        <Link to="/" className="">Home</Link> / <span className="text-black">Cart</span>
      </p>

      
      <div className="overflow-x-auto">
        <table className="w-full bg-white ">
          <thead>
            <tr className="  border rounded-lg shadow-md border-[#0000000D] text-left">
              <th className="p-4 ">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Subtotal</th>
            </tr>
          </thead>
         <br></br>
          <tbody>
            
            <tr className=" rounded-lg shadow-md border-[#0000000D]">
              <td className="p-4 flex items-center gap-3">
                <img
                  src="public/images/Monitor-Cart-Small (1).png"
                  alt="LCD Monitor"
                  className="w-12"
                />
                LCD Monitor
              </td>
              <td className="p-4">$650</td>
              <td className="p-4">
                <input
                  type="number"
                  defaultValue={1}
                  className="w-[55px]  h-[44px] border-[#aaa] border-2  rounded p-1 text-center"
                />
              </td>
              <td className="p-4 ">$650</td>
            </tr>
            <br></br>

            
            <tr className="rounded-lg shadow-md border-[#0000000D] border">
              <td className="p-4 flex items-center gap-3">
                <img
                  src="public/images/Gamepad-Cart-Small (1) copy.png"
                  alt="Gamepad"
                  className="w-12"
                />
                H1 Gamepad
              </td>
              <td className="p-4">$550</td>
              <td className="p-4">
                <input
                  type="number"
                  defaultValue={2}
                  className="w-[55px]  h-[44px]  border-[#aaa] border-2  rounded p-1 text-center"
                />
              </td>
              <td className="p-4 ">$1100</td>
            </tr>
          </tbody>
        </table>
        <br></br>
      </div>

      
      <div className="flex justify-between items-center mt-6 flex-wrap gap-4">
        <Link to="/shop" className="px-6 py-2 border rounded">
          Return To Shop
        </Link>
        <button className="px-6 py-2 border rounded">Update Cart</button>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between mt-8 gap-6">
        
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border rounded  px-4 py-2 w-[300px] h-[56px]"
          />
          <button className="bg-[#DB4444] w-[211px] h-[56px] text-white px-6 py-2 rounded">
            Apply Coupon
          </button>
        </div>

        
        <div className="bg-white border  rounded-lg shadow p-6 w-[470px] ">
          <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
          <p className="flex justify-between mb-2">
            <span>Subtotal :</span>
            <span>$1750</span>
          </p>
          <hr />
          <p className="flex justify-between mb-2">
            <span>Shipping :</span>
            <span>Free</span>
          </p>
          <hr />
          <p className="flex justify-between font-bold text-lg">
            <span>Total :</span>
            <span>$1750</span>
          </p>
          <button className="w-[260px] bg-[#DB4444] text-white py-3 mt-4 rounded">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}