import { useEffect, useState } from "react";
import { BiHeart, BiStar } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

export function FlashSales() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const getNextFriday = () => {
      const now = new Date();
      const nextFriday = new Date(now);

      const currentDay = now.getDay();
      let daysUntilFriday = (5 - currentDay + 7) % 7;

      if (daysUntilFriday === 0) {
        daysUntilFriday = 7;
      }

      nextFriday.setDate(now.getDate() + daysUntilFriday);
      nextFriday.setHours(0, 0, 0, 0);
      return nextFriday;
    };

    const targetDate = getNextFriday();

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((diff / (1000 * 60)) % 60));
      setSeconds(Math.floor((diff / 1000) % 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="block h-[40px] w-[20px] rounded-sm bg-[#DB4444]" />
        <span className="text-base font-semibold text-[#DB4444]">Today's</span>
      </div>
      <div className="flex items-center gap-20">
        <h1 className="text-3xl font-bold">Flash Sales</h1>
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold">Days</span>
            <span className="text-[32px] font-bold">
              {days.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="self-end text-[32px] font-bold text-[#DB4444]">
            :
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold">Hours</span>
            <span className="text-[32px] font-bold">
              {hours.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="self-end text-[32px] font-bold text-[#DB4444]">
            :
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold">Minutes</span>
            <span className="text-[32px] font-bold">
              {minutes.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="self-end text-[32px] font-bold text-[#DB4444]">
            :
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold">Seconds</span>
            <span className="text-[32px] font-bold">
              {seconds.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <span>-40%</span>
            <img src="" alt="" />
            <BiHeart />
            <BsEye />
            <button>Add To Cart</button>
          </div>
          <div>
            <h2>HAVIT HV-G92 Gamepad</h2>
            <span></span>
            <span></span>
            <div>
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
            </div>
            <span>(88)</span>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
