import About from "@/components/About";
import ContactBanner from "@/components/ContactBanner";
import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import OurProcess from "@/components/OurProcess";

export default function Home() {
  return (
    <div className="">
      <Hero
        title="Solutions for digital growth"
        description="At HZ Group LLC, we deliver advanced technology solutions designed to help businesses scale, innovate, and stay competitive. Our expert team provides end-to-end services across software development, cloud, consulting, and digital transformation—tailored to meet your unique needs."
        buttonText="Explore Services"
        buttonLink="/services"
      />
      <About />
      <OurProcess />
      <CustomerReviews />
      <ContactBanner />
    </div>
  );
}
