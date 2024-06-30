"use client";

import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { filtersStore } from "@/stores/FiltersStore";

import { Button, FormControl, InputLabel, MenuItem } from "@mui/material";


export const Filters = () => {
  const genres = [
    { name: "Спорт", code: "Sports" },
    { name: "Фэнтези", code: "Fantasy" },
    { name: "Яой", code: "Boys Love" },
    { name: "Ужасы", code: "Horror" },
    { name: "Драма", code: "Drama" },
    { name: "Хоррор", code: "Suspense" },
    { name: "Научная фантастика", code: "Sci-Fi" },
    { name: "Романтика", code: "Romance" },
    { name: "Мистика", code: "Mystery" },
    { name: "Эротика", code: "Erotica" },
    { name: "Повседневность", code: "Slice of life" },
    { name: "Юри", code: "Girls Love" },
    { name: "Награжденное", code: "Award Winning" },
    { name: "Сверхъестественное", code: "Supernatural" },
    { name: "Приключения", code: "Adventure" },
    { name: "Гурман", code: "Gourmet" },
    { name: "Экшен", code: "Action" },
    { name: "Комедия", code: "Comedy" },
    { name: "Авангард", code: "Avant Garde" },
    { name: "Этти", code: "Ecchi" },
  ];

  const types = [
    { name: "Сериал", code: "TV" },
    { name: "ONA", code: "ONA" },
    { name: "OVA", code: "OVA" },
    { name: "Спешл", code: "Special" },
    { name: "Фильм", code: "Movie" },
    { name: "Музыка", code: "Music" },
  ];

  const statuses = [
    { name: "Анонсированно", code: "upcoming" },
    { name: "Выходит", code: "ongoing" },
    { name: "Закончено", code: "finished" },
  ];

  const [genre, setGenre] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const handleGenre = (event: SelectChangeEvent) => {
    filtersStore.setGenre(event.target.value);
    setGenre(event.target.value);
  };

  const handleType = (event: SelectChangeEvent) => {
    filtersStore.setType(event.target.value);
    setType(event.target.value);
  };

  const handleStatus = (event: SelectChangeEvent) => {
    filtersStore.setStatus(event.target.value);
    setStatus(event.target.value);
  };

  return (
    <div className="flex flex-col w-[90%] bg-white rounded-md m-[10%]">
      <h1 className="p-4 text-2xl text-black">Фильтры</h1>
      {/* <SelectComponent changeFunc={setGenre} value={filtersStore.getGenre()} arr={genres} title='Жанры'/>
            <SelectComponent changeFunc={setType} value={filtersStore.getType()} arr={types} title='Вид'/>
            <SelectComponent changeFunc={setStatus} value={filtersStore.getStatus()} arr={status} title='Статус'/> */}
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Жанры</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={genre}
          onChange={handleGenre}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {genres.map((value) => (
            <MenuItem value={value.code} key={value.name}>
              {value.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Тип</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={type}
          onChange={handleType}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {types.map((value) => <MenuItem value={value.code} key={value.name}>{value.name}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Статус</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={status}
          onChange={handleStatus}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {statuses.map((value) => <MenuItem value={value.code} key={value.name}>{value.name}</MenuItem>)}
        </Select>
      </FormControl> 
      <Button variant="contained" className="w-20 self-center my-4 bg-siren">Искать</Button>
    </div>
  );
};
