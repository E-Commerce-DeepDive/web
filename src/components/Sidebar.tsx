import { IoIosArrowForward } from "react-icons/io";

export function Sidebar() {
  return (
    <aside className="flex w-[28%] items-start justify-between">
      <div className="flex w-full flex-col items-start gap-2 p-4 *:cursor-pointer *:text-base lg:*:text-2xl">
        <button className="flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 transition-colors duration-300 hover:bg-gray-200">
          <div className="w-full">
            <h2 className="flex items-center justify-between gap-2">
              Woman's Fashion <IoIosArrowForward />
            </h2>
          </div>
        </button>
        <button className="flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 transition-colors duration-300 hover:bg-gray-200">
          <div className="w-full">
            <h2 className="flex items-center justify-between gap-2">
              Men's Fashion <IoIosArrowForward />
            </h2>
          </div>
        </button>
        <button className="w-full rounded-md px-3 py-2 text-start transition-colors duration-300 hover:bg-gray-200">
          Electronics
        </button>
        <button className="w-full rounded-md px-3 py-2 text-start transition-colors duration-300 hover:bg-gray-200">
          Home & Liftestyle
        </button>
        <button className="transition-colorstext-start w-full rounded-md px-3 py-2 text-start duration-300 hover:bg-gray-200">
          Medicine
        </button>
        <button className="w-full rounded-md px-3 py-2 text-start transition-colors duration-300 hover:bg-gray-200">
          Sports & Outdoor
        </button>
        <button className="w-full rounded-md px-3 py-2 text-start transition-colors duration-300 hover:bg-gray-200">
          Babyis & Toys
        </button>
        <button className="transition-colorstext-start w-full rounded-md px-3 py-2 text-start duration-300 hover:bg-gray-200">
          Groceries & Pets
        </button>
        <button className="transition-colorstext-start w-full rounded-md px-3 py-2 text-start duration-300 hover:bg-gray-200">
          Health & Beauty
        </button>
      </div>
      <div className="relative -top-[25px] hidden h-[540px] w-[0.5px] bg-[#00000080] lg:block" />
    </aside>
  );
}
