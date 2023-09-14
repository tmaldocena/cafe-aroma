
import { useEffect, useState } from "react";
import Experience from "./Sections/Experience"
import Glimpse from "./Sections/Glimpse"
import MoreInfo from "./Sections/MoreInfo"
import Nav from "./components/Nav"
import ReadyTo from "./Sections/ReadyTo";
import Footer from "./components/Footer";


function App() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() =>{
    document.getElementById('title').style.top = scrollY * 0.3 + 'px';
  }, [scrollY]);

  return (
    <main className="relative w-full bg-bone">
      <Nav />
      <section className="py-5 bg-bone">
        <h1 id="title" className={`relative text-dark font-grotesque font-extrabold tracking-tighter xl:text-[256px] text-[128px] text-center`}>FRESHLY</h1>
      </section>
      <section className="bg-dark flex">
        <Experience />
      </section>
      <section className="bg-brown flex">
        <Glimpse />
      </section>
      <section className="bg-brown flex">
        <MoreInfo />
      </section>
      <section className="bg-brown flex">
        <ReadyTo />
      </section>
      <Footer />
    </main>
  )
}

export default App
