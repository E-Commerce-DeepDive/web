import { FaTrash, FaShoppingCart, FaEye, FaStar } from "react-icons/fa";

export default function wishlist() {
  return (
    <div className="container mx-auto flex w-full flex-col gap-10">
      <div className="m-10 mb-8 flex items-center justify-around">
        <p className="text-lg">Wishlist (4)</p>
        <button className="h-[56px] w-[223px] rounded border border-[#00000080] text-lg">
          Move All To Bag
        </button>
      </div>

      <div className="my-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            <span className="absolute top-3 left-3 rounded bg-[#DB4444] px-2 py-1 text-xs text-white">
              -35%
            </span>

            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="public/images/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png"
                alt=""
              />
            </div>

            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <FaTrash className="size-5" />
            </div>

            <button className="bottom-10 flex w-full cursor-pointer items-center justify-center gap-2 bg-black py-2 text-base text-[#aaa] transition">
              <FaShoppingCart className="text-white" />
              Add To Cart
            </button>
          </div>

          <div>
            <p>Gucci duffle bag</p>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-[#DB4444]">$960</span>
              <span className="text-xs font-bold text-gray-500 line-through">
                $1160
              </span>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}

        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            {/* <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">-35%</span> */}

            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="public/images/gammaxx-l240-argb-1-500x500 1.png"
                alt=""
              />
            </div>

            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <FaTrash className="size-5" />
            </div>

            <button className="bottom-10 flex w-full cursor-pointer items-center justify-center gap-2 bg-black py-2 text-base text-[#aaa] transition">
              <FaShoppingCart className="text-white" />
              Add To Cart
            </button>
          </div>

          <div>
            <p>RGB liquid CPU Cooler</p>
            <span className="text-sm font-bold text-[#DB4444]">$1960</span>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------- */}
        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            {/* <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">-35%</span> */}

            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="public/images/GP11_PRD3 1.png"
                alt=""
              />
            </div>

            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <FaTrash className="size-5" />
            </div>

            <button className="bottom-10 flex w-full cursor-pointer items-center justify-center gap-2 bg-black py-2 text-base text-[#aaa] transition">
              <FaShoppingCart className="text-white" />
              Add To Cart
            </button>
          </div>

          <div>
            <p>GP11 Shooter USB Gamepad</p>
            <span className="text-sm font-bold text-[#DB4444]">$550</span>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------- */}
        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            {/* <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">-35%</span> */}

            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="public/images/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1 (1).png"
                alt=""
              />
            </div>

            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <FaTrash className="size-5" />
            </div>

            <button className="bottom-10 flex w-full cursor-pointer items-center justify-center gap-2 bg-black py-2 text-base text-[#aaa] transition">
              <FaShoppingCart className="text-white" />
              Add To Cart
            </button>
          </div>

          <div>
            <p>Quilted Satin Jacket</p>
            <span className="text-sm font-bold text-[#DB4444]">$750</span>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------- */}

      <div className="m-10 mb-8 flex items-center justify-around">
        <div className="flex items-center gap-3">
          <span className="block h-[40px] w-[20px] rounded-sm bg-[#DB4444]" />
          <span className="text-xl font-semibold">Just For You</span>
        </div>
        <button className="h-[56px] w-[223px] rounded border border-[#00000080] text-lg">
          See All
        </button>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------- */}

      <div className="my-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            <span className="absolute top-3 left-3 rounded bg-[#DB4444] px-2 py-1 text-xs text-white">
              -35%
            </span>
            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="public/images/ideapad-gaming-3i-01-500x500 1.png"
                alt=""
              />
            </div>

            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <FaEye className="size-5" />
            </div>
            <button className="bottom-10 flex w-full cursor-pointer items-center justify-center gap-2 bg-black py-2 text-base text-[#aaa] transition">
              <FaShoppingCart className="text-white" />
              Add To Cart
            </button>
          </div>

          <div>
            <p>ASUS FHD Gaming Laptop</p>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-[#DB4444]">$960</span>
              <span className="text-xs font-bold text-gray-500 line-through">
                $1160
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex *:text-[#FFAD33]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="text-xs font-semibold text-gray-700">(65)</span>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------ */}

        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="public/images/g27cq4-500x500 1.png"
                alt=""
              />
            </div>

            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <FaEye className="size-5" />
            </div>
            <button className="bottom-10 flex w-full cursor-pointer items-center justify-center gap-2 bg-black py-2 text-base text-[#aaa] transition">
              <FaShoppingCart className="text-white" />
              Add To Cart
            </button>
          </div>

          <div>
            <p>IPS LCD Gaming Monitor</p>
            <span className="text-sm font-bold text-[#DB4444]">$1160</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex *:text-[#FFAD33]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="text-xs font-semibold text-gray-700">(65)</span>
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------------------- */}

        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            <span className="absolute top-3 left-3 rounded bg-[#00FF66] px-2 py-1 text-xs text-white">
              New
            </span>
            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="public/images/g92-2-500x500 1 (2).png"
                alt=""
              />
            </div>

            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <FaEye className="size-5" />
            </div>
            <button className="bottom-10 flex w-full cursor-pointer items-center justify-center gap-2 bg-black py-2 text-base text-[#aaa] transition">
              <FaShoppingCart className="text-white" />
              Add To Cart
            </button>
          </div>

          <div>
            <p>HAVIT HV-G92 Gamepad</p>
            <span className="text-sm font-bold text-[#DB4444]">$560</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex *:text-[#FFAD33]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="text-xs font-semibold text-gray-700">(65)</span>
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------------------------- */}

        <div className="group flex flex-col gap-3">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#F5F5F5]">
            <div className="p-6">
              <img
                className="min-h-[180px]"
                src="public/images/ak-900-01-500x500 1.png"
                alt=""
              />
            </div>

            <div className="absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-full bg-white text-xl shadow-sm transition-colors duration-300 hover:bg-[#Db4444] hover:text-white">
              <FaEye className="size-5" />
            </div>
            <button className="bottom-10 flex w-full cursor-pointer items-center justify-center gap-2 bg-black py-2 text-base text-[#aaa] transition">
              <FaShoppingCart className="text-white" />
              Add To Cart
            </button>
          </div>

          <div>
            <p>AK-900 Wired Keyboard</p>
            <span className="text-sm font-bold text-[#DB4444]">$200</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex *:text-[#FFAD33]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="text-xs font-semibold text-gray-700">(65)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
