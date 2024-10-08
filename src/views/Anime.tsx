"use client";

import AnimeList from "@/components/AnimeList";
import { Filters } from "@/components/Filters";
import Navbar from "@/components/Navbar";
import { filtersStore } from "@/stores/FiltersStore";
import { observer } from "mobx-react-lite";

export const Anime = observer(() => {
  // console.log(filtersStore.getGenre())
  // console.log(filtersStore.getType())
  const query = {
    filter: "finished",
    sortBy: "score",
    type: "TV",
    limit: 10,
  };

  return (
    <div className="min-h-[100dvh] bg-dblue w-[100%]">
      <Navbar></Navbar>
      <div className="flex items-center flex-col">
        <Filters></Filters>
        <AnimeList query={query}></AnimeList>
      </div>
    </div>
  );
});
