import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import OurProcess from "@/components/OurProcess";
import Footer from "@/components/Footer";
import Contactus from "@/components/Contactus";
import Navbar from "@/components/Navbar";

export default function MedicalBillingLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Metrics Section */}
      {/* <PerformanceMetrics /> */}
      {/* Pain Points & Solutions Section */}
      <PainPoints />
      {/* Services Section */}
      <Services />
      {/* Process Section */}
      <OurProcess />
      {/* Testimonials Section */}

      {/* CTA Section */}
      <Contactus />

      <Footer />
    </div>
  );
}
