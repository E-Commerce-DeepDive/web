import { FlashSales } from "../components/FlashSales";
import { ImagesSlider } from "../components/ImagesSlider";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-20">
      <section className="flex flex-col items-start md:flex-row md:gap-[250px]">
        <Sidebar />
        <ImagesSlider />
      </section>
      <FlashSales />
    </main>
  );
}
