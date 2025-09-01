import { ImagesSlider } from "../components/ImagesSlider";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-start md:flex-row md:gap-[250px]">
      <Sidebar />
      <ImagesSlider />
    </main>
  );
}
