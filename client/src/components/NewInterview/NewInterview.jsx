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
import { useParams } from 'react-router';


export default function BasicTextFields() {
  const dispatch = useDispatch()
  const [cat, setCat] = useState("")
  const [company, setCompany] = useState("")
  const [language, setLanguage] = useState("")
  const [newForm, setNewForm] = useState(1)
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [level, setLevel] = useState()
  const [news, setNews] = useState(null)
  const categories = useSelector((state) => state.categories)
  const org = useSelector((state) => state.org)
  const lang = useSelector((state) => state.lang)

  const { id } = useParams()
  // console.log("===>",+id)

  // console.log(categories,"++++++++", org, '123', lang)
  useEffect(() => {
    dispatch(getAllCategorey())
    dispatch(getAllOrg())
    dispatch(getAllLang())
  }, [])

  const handleSubmitAdd = (event) => {
    event.preventDefault()
    const input_data = Object.fromEntries(new FormData(event.target))
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

  const editInterview = (event) => {
    event.preventDefault()
    console.log(555)
  }

  const titleAdd = (event) => {
    // console.log("title",event.target.value)
    setTitle(event.target.value)

  }
  const descriptionAdd = (event) => {
    setDescription(event.target.value)
  }
  const levelAdd = (event) => {
    setLevel(event.target.value)
  }

  let fields = [];
  for (let i = 0; i < newForm; i++) {
    fields.push(<>
      <TextField id="outlined-basic" name={i} label={`Question ${i}`} variant="outlined" />
      <Box sx={{ minWidth: 250 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            name={`select-${i}`}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Language"
            onChange={(event) => {
              // console.log(event.target.value)
              setLanguage(event.target.value);
            }}
          >
            {lang.map((item, index) => <MenuItem id={10} value={item.id}>{item.id}.{item.programmingLanguage}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
    </>);
  }

  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, alignItems: 'center' }}>
      <h3>{id ? "Изменить собеседование" : "Создать собеседование"}</h3>
      <Grid container spacing={3}>
        <form onSubmit={id ? editInterview :  handleSubmitAdd } >
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
            {fields}
            <Button onClick={() => setNewForm(newForm + 1)} variant="contained">
              Добавить вопрос
            </Button>
          </Box>

          <Stack spacing={2} direction="row">
            <Button type="submit" variant="contained">{id ? "Сохранить" : "Создать"}</Button>
          </Stack>

        </form>
      </Grid>

    </Paper>
  );
}
