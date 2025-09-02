import { BestSelling } from "../components/BestSelling";
import { Browse } from "../components/Browse";
import { Explore } from "../components/Explore";
import { FlashSales } from "../components/FlashSales";
import { ImagesSlider } from "../components/ImagesSlider";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-20">
      <section className="flex flex-col items-start md:gap-[250px] lg:flex-row">
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
    </main>
  );
}
