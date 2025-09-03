import { Arrival } from "../components/Arrival";
import { BestSelling } from "../components/BestSelling";
import { Browse } from "../components/Browse";
import { Explore } from "../components/Explore";
import { FlashSales } from "../components/FlashSales";
import { ImagesSlider } from "../components/ImagesSlider";
import { Sidebar } from "../components/Sidebar";
import { Supports } from "../components/Supports";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-20">
      <section className="flex flex-col items-start gap-10 xl:flex-row xl:gap-[250px]">
        <Sidebar />
        <ImagesSlider />
      </section>
      <FlashSales />
      <Browse />
      <BestSelling />
      <div className="h-full w-full">
        <img src="/images/enhance.png" alt="enhance" className="w-full" />
      </div>
      <Explore />
      <Arrival />
      <Supports />
    </div>
  );
}
