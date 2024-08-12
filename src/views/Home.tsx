import { advent, jua } from "@/app/layout";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-[100dvh] bg-dblue w-[100%] text-xl ">
      <Navbar></Navbar>
      <div className="text-black text-center pt-[35%] md:pt-[20%] lg:pt-[12%] mb-[20%] md:mb-[10%] lg:mb-[3%]  text-[72px]">
        <h1 className={jua.className}>ANIZIGA</h1>
      </div>
      <div className="w-[100%] h-[35%]">
        <Carousel></Carousel>
      </div>
      <div className="text-center text-4xl pt-[15%] md:pt-[8%] text-black">
        <span className={advent.className}>Новинки недели</span>
      </div>
    </div>
  );
}
