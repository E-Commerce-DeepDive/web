import { IoIosArrowForward } from "react-icons/io";

export function Sidebar() {
  return (
    <aside className="flex w-1/3 flex-col items-start gap-4 p-4 *:cursor-pointer">
      <button className="flex items-center gap-2">
        Woman's Fashion <IoIosArrowForward />
      </button>
      <button className="flex items-center gap-2">
        Men's Fashion <IoIosArrowForward />
      </button>
      <button>Electronics</button>
      <button>Home & Liftestyle</button>
      <button>Medicine</button>
      <button>Sports & Outdoor</button>
      <button>Babyis & Toys</button>
      <button>Groceries & Pets</button>
      <button>Health & Beauty</button>
    </aside>
  );
}
