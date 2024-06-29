
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    changeFunc: (event: SelectChangeEvent) => void,
    value: string,
    arr: Record<any, string>[],
    title: string
}



export const SelectComponent = ({changeFunc, value, arr, title}: Props) => {
    return (
        <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={changeFunc}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {arr.map((value) => <MenuItem value={value.code} key={value.name}>{value.name}</MenuItem>)}
        </Select>
      </FormControl>
    )
}