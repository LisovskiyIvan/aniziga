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
        <div className="w-[100%] h-[10%] flex justify-between items-center pt-10 text-lg px-2 text-black">
            <Link href={'/'}><Image src='/az.png' width={44} height={44} alt="icon"></Image></Link>
            {routes.map((value, index) => <Link href={value.path} key={index}>{value.name}</Link>)}
            <button className="btn btn-sm btn-outline text-black"><span>Войти</span></button>
        </div>
    )
}