import { advent, wsans } from "@/app/layout";
import AnimeList from "@/components/AnimeList";
import Link from "next/link";

export default function NewAnime() {
  const query = {
    filter: "ongoing",
    sortBy: "score",
    type: "TV",
    limit: 10,
  };

  return (
    <div className="min-h-[100dvh] bg-black w-[100%] text-xl pt-[10%] flex flex-col items-center">
      <h1 className="text-siren text-4xl mb-[10%]">
        <span className={advent.className}>Новые аниме</span>
      </h1>
      <AnimeList query={query}></AnimeList>
      <Link href={"/anime"} className="mt-[10%]">
        <button className="btn btn-primary  btn-outline text-black mb-[35px]  md:mb-[60px] ">
          <span className={wsans.className}>Полный список</span>
        </button>
      </Link>
    </div>
  );
}
