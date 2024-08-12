"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimeCardDTO } from "@/DTO/AnimeDTO";

async function fetchAnime(id: string) {
  const res = await fetch(`http://localhost:8081/anime/${id}`).then((res) =>
    res.json()
  );
  return res;
}

export const AnimeCard = ({ animeId }: { animeId: string }) => {
  const [anime, setAnime] = useState<AnimeCardDTO>();

  useEffect(() => {
    async function getData() {
      const res = await fetchAnime(animeId.replace("%7D", ""));
      setAnime(res);
    }
    getData();
  }, []);

  return (
    <div className="pt-[50px]  text-2xl flex flex-col items-center">
      <Image
        src={anime ? anime.large_image_url : ""}
        alt="anime image"
        width={250}
        height={400}
        priority={true}
        className="rounded-md h-auto m-5"
      ></Image>
      <div className="flex flex-col items-center w-[97%] bg-white rounded-lg py-5 px-2 mb-[20px]">
        <div className="my-2 text-2xl text-center">Рейтинг: {anime?.score}</div>
        <h1 className="text-3xl mb-2 text-center">{anime?.title}</h1>
        <h2 className="px-2  my-1 text-center">{anime?.title_english}</h2>
        <h2 className="px-2  my-1 text-center">{anime?.title_japanese}</h2>
        <div className="my-1 text-center">Эпизодов: {anime?.episodes}</div>
        <div className="my-1 text-center">
          Впервые вышло: {anime?.aired_from}
        </div>
        <div className="my-1 text-center">Статус: {anime?.status}</div>
        <div className="my-1 text-center">
          Продолжительность: {anime?.duration}
        </div>
        <div className="my-1 text-center">
          Возростной рейтинг: {anime?.rating}
        </div>
        <div className="my-1 text-center mb-[25px] px-6 ">
          Описание: <p className="text-lg">{anime?.synopsis}</p>
        </div>
      </div>
      {/* <div className="main">
          <div className="score">
            <img src="/star.png" alt="" className="w-6 self-baseline mr-2" />7
            <div className="ten">/10</div>
          </div>
          <div className="titles headingFont text-3xl">
            <h1 className="font-bold">Название</h1>
            <div className="small-titles text-xl">
              <h4>Еще Название</h4>
              <h4>Другое название</h4>
            </div>
          </div>
          <div className="pt-2 px-[50px] text-xl flex-col mb-4">
            <div className="flex-row flex">
              <div className="font-bold mr-2">Эпизодов:</div>
              <div>23</div>
            </div>
            <div className="flex-row flex">
              <div className="font-bold mr-2">Впервые вышло:</div>
              <div>19882</div>
            </div>
            <div className="flex-row flex">
              <div className="font-bold mr-2">Статус:</div>
              <div>Конченное</div>
            </div>
            <div className="flex-row flex">
              <div className="font-bold mr-2">Жанры:</div>
              <div>Жанры</div>
            </div>
            <div className="flex-row flex">
              <div className="font-bold mr-2">Продолжительность:</div>
              <div>12 минут</div>
            </div>
            <div className="flex-row flex">
              <div className="font-bold mr-2">Возростной рейтинг:</div>
              <div>18+</div>
            </div>
            <div className="flex-col flex">
              <div className="font-bold mr-2">Описание:</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                vitae laboriosam hic, ab, dolore, neque laborum delectus rem
                unde animi aut numquam. Facilis rem repellat sunt voluptate ut,
                enim dolor?
              </div>
            </div>
          </div> */}
      {/* </div> */}
      {/* <div className="p-12" v-if="(anime.trailer != undefined)">
                <iframe :src="anime.trailer.embed_url + '&mute=1'" frameborder="0" width="1000" height="600"></iframe>
        </div>
        <!-- <div> Тут будет трейлер
            {{ anime.trailer.embed_url }}
        </div> --> */}
    </div>
  );
};
