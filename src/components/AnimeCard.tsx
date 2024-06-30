import Image from "next/image";

export const AnimeCard = () => {
  return (
      <div className="pt-[50px] flex flex-col items-center">
          <Image
            src="/img1.jpg"
            alt="anime image"
            width={250}
            height={400}
            priority={true}
            className="rounded-md h-auto"
          ></Image>
        <div className="mt-[5%] text-2xl">Рейтинг: 7/10</div>

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
