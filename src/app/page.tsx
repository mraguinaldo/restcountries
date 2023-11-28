import Image from "next/image";
import { Hero } from "./sections/hero";
import { Preview } from "./sections/preview";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Preview />
      </main>
      <Footer />
    </>
  );
}
