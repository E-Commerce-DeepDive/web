import { BsArrowUp } from "react-icons/bs";

export function Supports() {
  const handleUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="mb-10 px-20 py-5 md:px-0">
      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <img src="/images/support-01.png" alt="" />
          <h2 className="mt-3 text-xl font-bold">FREE AND FAST DELIVERY</h2>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="/images/support-02.png" alt="" />
          <h2 className="mt-3 text-xl font-bold">24/7 CUSTOMER SERVICE</h2>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="/images/support-03.png" alt="" />
          <h2 className="mt-3 text-xl font-bold">MONEY BACK GUARANTEE</h2>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
      <div className="w-full">
        <button
          onClick={(e) => handleUp(e)}
          className="mt-14 ml-auto flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#ddd] hover:opacity-80"
        >
          <BsArrowUp className="text-xl" />
        </button>
      </div>
    </section>
  );
}
