
import { AnimeId } from "@/views/AnimeId";





export default function Index({ params }: { params: { id: string } }) {

    

    return (
        <AnimeId id={params.id}/>
    )
}