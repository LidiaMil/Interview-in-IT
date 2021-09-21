import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Grid, Paper } from '@material-ui/core';

import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategorey } from '../../redux/actions/categories.action';
import { addInterview } from '../../redux/actions/interview.action'
import { getAllLang } from '../../redux/actions/lang.action'
import { getAllOrg } from '../../redux/actions/org.action'
import { useEffect, useState } from "react"

export default function BasicTextFields({index, lang}) {
  let [language, setLanguage] = useState("")

  console.log("name",index)
  console.log(language)

  return (
    <>
    <TextField id="outlined-basic" name={index} label={`Question ${index}`} variant="outlined" />
      <Box sx={{ minWidth: 250 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            name={`select-${index}`}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Language"
            onChange={(event) => {
              console.log(event.target.value)
              setLanguage(event.target.value);
            }}
          >
            {lang.map((item, index) => <MenuItem key={index} id={10} value={item.id}>{item.id}.{item.programmingLanguage}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      </>
  );
}
