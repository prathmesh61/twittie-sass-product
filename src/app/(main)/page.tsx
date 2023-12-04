import Features from "@/components/base/Features";
import Hero from "@/components/base/Hero";
import Navbar from "@/components/base/Navbar";
import Review from "@/components/common/Review";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl text-white">
      <Navbar />
      <Hero />
      <Review direction="row" />
      <Features />
    </div>
  );
}
