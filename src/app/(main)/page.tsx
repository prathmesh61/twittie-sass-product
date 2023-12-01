import Hero from "@/components/base/Hero";
import Navbar from "@/components/base/Navbar";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl text-white">
      <Navbar />
      <Hero />
    </div>
  );
}
