'use client'

import * as React from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { filtersStore } from '@/stores/FiltersStore';
import { SelectComponent } from './Select';


export const Filters = () => {

    const genres = [
        { name: 'Спорт', code: 'Sports' },
        { name: 'Фэнтези', code: 'Fantasy' },
        { name: 'Яой', code: 'Boys Love' },
        { name: 'Ужасы', code: 'Horror' },
        { name: 'Драма', code: 'Drama' },
        { name: 'Хоррор', code: 'Suspense' },
        { name: 'Научная фантастика', code: 'Sci-Fi' },
        { name: 'Романтика', code: 'Romance' },
        { name: 'Мистика', code: 'Mystery' },
        { name: 'Эротика', code: 'Erotica' },
        { name: 'Повседневность', code: 'Slice of life' },
        { name: 'Юри', code: 'Girls Love' },
        { name: 'Награжденное', code: 'Award Winning' },
        { name: 'Сверхъестественное', code: 'Supernatural' },
        { name: 'Приключения', code: 'Adventure' },
        { name: 'Гурман', code: 'Gourmet' },
        { name: 'Экшен', code: 'Action' },
        { name: 'Комедия', code: 'Comedy' },
        { name: 'Авангард', code: 'Avant Garde' },
        { name: 'Этти', code: 'Ecchi' }
    ];
    
    
    const types = [
        { name: 'Сериал', code: 'TV'},
        { name: 'ONA', code: 'ONA'},
        { name: 'OVA', code: 'OVA'},
        { name: 'Спешл', code: 'Special'},
        { name: 'Фильм', code: 'Movie'},
        { name: 'Музыка', code: 'Music'}
    ]
    
    const status = [
        { name: 'Анонсированно', code: 'upcoming'},
        { name: 'Выходит', code: 'ongoing'},
        { name: 'Закончено', code: 'finished'}
    ]

    const setGenre = (event: SelectChangeEvent) => {
        filtersStore.setGenre(event.target.value)
    }

    const setType = (event: SelectChangeEvent) => {
        filtersStore.setType(event.target.value)
    }

    const setStatus = (event: SelectChangeEvent) => {
        filtersStore.setStatus(event.target.value)
    }

    return (
        <div className='flex flex-col w-[90%] bg-white rounded-md m-[10%]'>
        <h1 className='p-4 text-2xl text-black'>Фильтры</h1>
            <SelectComponent changeFunc={setGenre} value={filtersStore.getGenre()} arr={genres} title='Жанры'/>
            <SelectComponent changeFunc={setType} value={filtersStore.getType()} arr={types} title='Вид'/>
            <SelectComponent changeFunc={setStatus} value={filtersStore.getStatus()} arr={status} title='Статус'/>
        </div>
    )
}