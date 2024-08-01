'use client'
import Image from "next/image";
import Divider from '@mui/material/Divider';
import { useState, useEffect } from "react";
import { AnimeListDTO } from "@/DTO/AnimeDTO";

interface Props {
  query: {
    filter: string,
    sortBy: string,
    type: string,
    page?: number,
    limit: number
  }
}

async function fetchAnime({query}: Props) {
  const res = await fetch(`http://localhost:8081/anime?filters=${query.filter}&type=${query.type}&limit=${query.limit}&page=${query.page ? query.page : 1}&sortBy=${query.sortBy}`).then(res => res.json())
  return res
}

export default function AnimeList(props: Props) {

  const queryParams = props
    
  const [anime, setAnime] = useState<AnimeListDTO>()

  useEffect( ()=> {

    async function getData() {
      const res = await fetchAnime(queryParams)
      setAnime(res)
    }
    getData()
  }, [])


  return (
    <div className="bg-white w-[95%] rounded-md py-[5%] px-[3%] text-black mb-[25px]">
      {anime?.data.map((v, index) => {
        return <><div key={index} className="flex  my-4">
        <Image
          src={v.large_image_url}
          alt={v.title}
          width={150}
          height={220}
          className="rounded-md"
        ></Image>
        <div className="flex flex-col ml-4">
          <h2 className=" text-2xl">
            <span >{v.title}</span>
          </h2>
          <h3 className="text-lg">
            <span >{v.title_japanese}</span>
          </h3>
          <div className="text-sm">
            <span>{v.status} </span>/ <span>{v.year} </span>/ <span>{v.score}</span>
          </div>
        </div>
        
      </div>
      <Divider /></>
      })}
    </div>
  );
}
