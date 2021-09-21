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
import { useInput } from '../../hooks/inputHook'
import Input from '../Input/Input'

export default function BasicTextFields() {
  const dispatch = useDispatch()
  const [cat, setCat] = useState("")
  const [company, setCompany] = useState("")
  const [newForm, setNewForm] = useState([{name: '0'}])
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [level, setLevel] = useState()
  const [news, setNews] = useState(null)
  const categories = useSelector((state) => state.categories)
  const org = useSelector((state) => state.org)
  const lang = useSelector((state) => state.lang)

  useEffect(() => {
    dispatch(getAllCategorey())
    dispatch(getAllOrg())
    dispatch(getAllLang())
  }, [])
  console.log(newForm)


  const handleSubmitAdd = (event) => {
    event.preventDefault()
    const input_data = Object.fromEntries(new FormData(event.target))
    console.log(input_data)
    dispatch(addInterview(
      {
        title,
        description,
        categories: cat,
        level,
        questionsWITHlang: input_data,
        company_id: company,

      }))

  }
  const titleAdd = (event) => {
    setTitle(event.target.value)

  }
  const descriptionAdd = (event) => {
    setDescription(event.target.value)
  }
  const levelAdd = (event) => {
    setLevel(event.target.value)
  }


  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, alignItems: 'center' }}>

      <Grid container spacing={3}>
        <form onSubmit={handleSubmitAdd} >
          <Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Company</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={company}
                label="Company"
                onChange={(event) => {
                  console.log(event.target.value)
                  setCompany(event.target.value);
                }}
              >
                {org.map((item, index) => <MenuItem value={item.id}>{item.id}.{item.title}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 500 }}>
            <TextField id="outlined-basic" label="Level" variant="outlined" onChange={levelAdd} />
          </Box>
          <Box sx={{ minWidth: 250 }}>
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={titleAdd} />
          </Box>
          <Box sx={{ minWidth: 500 }}>
            <TextField id="outlined-basic" label="Description" variant="outlined" onChange={descriptionAdd} />
          </Box>

          <Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categorey</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cat}
                label="Organization"
                onChange={(event) => {
                  setCat(event.target.value);
                }}
              >
                {categories.map((item, index) => <MenuItem value={item.id}>{item.id}.{item.categorey}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 500 }}>
            {newForm.map((el, i) => <Input key={el.name}  index={el.name} lang={lang}/>)}
            <Button onClick={() => setNewForm([...newForm, {name: `${newForm.length}`}])} variant="contained">
              Add question
            </Button>
          </Box>

          <Stack spacing={2} direction="row">
            <Button type="submit" variant="contained">Create</Button>
          </Stack>
        </form>
      </Grid>

    </Paper>
  );
}
