import { AnimeCard } from "@/components/AnimeCard";
import Navbar from "@/components/Navbar";

export const AnimeId = ({ id }: { id: string }) => {
  console.log(id);

  return (
    <div className="min-h-[100vh] text-black bg-dblue">
        <Navbar></Navbar>
      <AnimeCard />
    </div>
  );
};
