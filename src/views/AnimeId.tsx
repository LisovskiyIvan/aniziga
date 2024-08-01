import { AnimeCard } from "@/components/AnimeCard";
import Navbar from "@/components/Navbar";

export const AnimeId = ({ id }: { id: string }) => {

  return (
    <div className="min-h-[100vh] text-black bg-dblue">
        <Navbar></Navbar>
      <AnimeCard animeId={id}/>
    </div>
  );
};
