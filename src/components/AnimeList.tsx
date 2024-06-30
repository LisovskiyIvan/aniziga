
import Image from "next/image";
import Divider from '@mui/material/Divider';

export default function AnimeList() {
  return (
    <div className="bg-white w-[95%] rounded-md py-[5%] px-[3%] text-black mb-[25px]">
      <div className="flex  my-4">
        <Image
          src="/img1.jpg"
          alt="anime image"
          width={100}
          height={150}
          className="rounded-md"
        ></Image>
        <div className="flex flex-col ml-4">
          <h2 className=" text-3xl">
            <span >Название</span>
          </h2>
          <h3 className="text-2xl">
            <span >Название меньше</span>
          </h3>
          <div className="text-lg">
            <span>ТВ сериал </span>/ <span>2024</span>/ <span>7.8</span>
          </div>
        </div>
        
      </div>
      <Divider />
      <div className="flex  my-4">
        <Image
          src="/img1.jpg"
          alt="anime image"
          width={100}
          height={150}
        ></Image>
        <div className="flex flex-col ml-4">
          <h2 className=" text-3xl">
            <span >Привет</span>
          </h2>
          <h3 className="text-2xl">
            <span >Название меньше</span>
          </h3>
          <div className="text-lg">
            <span>ТВ сериал </span>/ <span>2024</span>/ <span>7.8</span>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex  my-4">
        <Image
          src="/img1.jpg"
          alt="anime image"
          width={100}
          height={150}
        ></Image>
        <div className="flex flex-col ml-4">
          <h2 className=" text-3xl">
            <span >Привет</span>
          </h2>
          <h3 className="text-2xl">
            <span >Название меньше</span>
          </h3>
          <div className="text-lg">
            <span>ТВ сериал </span>/ <span>2024</span>/ <span>7.8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
