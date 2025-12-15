import SocialSidebar from "@/components/SocialSidebar";
import EmailSidebar from "@/components/EmailSidebar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900">
      {/* Sidebars */}
      <SocialSidebar />
      <EmailSidebar />

      {/* Main Content Area */}
      <div className="mx-auto">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}