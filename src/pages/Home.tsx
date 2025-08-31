import { ImagesSlider } from "../components/ImagesSlider";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen items-start gap-5">
      <Sidebar />
      <ImagesSlider />
    </main>
  );
}
