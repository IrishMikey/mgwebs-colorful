import Work from "../components/work";
import Hero from "@/components/hero";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="m-auto flex max-w-[50rem] flex-col items-center px-4">
      <Hero />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
