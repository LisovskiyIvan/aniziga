import Link from "next/link"
import Image from 'next/image'
import { wsans } from "@/app/layout"


export default function Navbar() {

    const routes = [
        {
          path: '/anime',
          name: 'Аниме'
        },
        {
          path: '/random',
          name: 'Случайное аниме'
        }
      ]
      // Добавить ховер для ссылок
    return (
        <div className="w-[100%] h-[10%] flex justify-between md:justify-evenly items-center pt-10 text-lg md:text-3xl px-2 text-black">
            <Link href={'/'}><Image src='/az.png' width={44} height={44} alt="icon" className="md:w-[80px] md:h-[80px]"></Image></Link>
            {routes.map((value, index) => <Link href={value.path} key={index}>{value.name}</Link>)}
            <button className="btn btn-sm md:btn-md btn-outline md:text-2xl text-black"><Link href={'signup'}><span>Войти</span></Link></button>
        </div>
    )
}