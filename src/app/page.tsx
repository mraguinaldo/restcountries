import Image from "next/image";
import { Hero } from "./sections/hero";
import { Preview } from "./sections/preview";

export default function Home() {
  return (
    <main>
      <Hero />
      <Preview />
    </main>
  );
}
