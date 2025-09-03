import About from "@/components/About";
import ContactBanner from "@/components/ContactBanner";
import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About/>
      <CustomerReviews/>
      <ContactBanner/>
    </div>
  );
}
