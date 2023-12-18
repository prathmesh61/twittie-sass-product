import Features from "@/components/base/Features";
import Hero from "@/components/base/Hero";
import Navbar from "@/components/base/Navbar";
import Testimonial from "@/components/base/Testimonial";
import Review from "@/components/common/Review";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl text-white">
      <Navbar />
      <Hero />
      <Review direction="row" />
      <Features />
      <Testimonial />
    </main>
  );
}
