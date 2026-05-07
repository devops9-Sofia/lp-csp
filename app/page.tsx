import { FutureSection } from "./components/futureSection";
import { Hero } from "./components/hero";
import { Navbar } from "./components/nav";
import { SolutionsSection } from "./components/SolutionsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
        <Navbar/>
        <Hero/>
        <FutureSection/>
        <SolutionsSection/>


    </main>
  
  );
}
