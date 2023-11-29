import { Hero } from "./sections/hero";
import { Preview } from "./sections/preview";
import { Footer } from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <main>
        <Hero />
        <Preview />
      </main>
      <Footer />
    </>
  );
}
