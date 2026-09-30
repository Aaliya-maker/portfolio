import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Experience} from "@/sections/Experience";
import {Projects} from "@/sections/Projects";
import {Testimonials} from "@/sections/Testimonials";
import {Contact} from "@/sections/Contact";
import {Navbar} from "@/layout/Navbar";
import "@/index.css";

function App() {
 
/*min-h-screen means height of the layout will be equal to the height of the screen. overflow-x-hidden means that if the content overflows horizontally, it will be hidden and not create a horizontal scrollbar.*/
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
<main>
  <Hero/>
  <About/>
  <Experience/>
  <Projects/>
  <Testimonials/>
  <Contact/>
</main>
    </div>
  );
}

export default App
