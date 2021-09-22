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
import { useHistory } from "react-router-dom";
import { useInput } from '../../hooks/inputHook'
import { useParams } from 'react-router';
import Input from '../Input/Input'

export default function BasicTextFields() {
  const [add, setAdd] = useState(true)
  const dispatch = useDispatch()
  let history = useHistory();
  const [cat, setCat] = useState("")
  const [company, setCompany] = useState("")
  const [newForm, setNewForm] = useState([{ name: '0' }])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const { id } = useParams()
  const myInterviews = useSelector(state => state.myInterviews)
  const data = myInterviews.filter(e => e.id === Number(id))[0]

  const [level, setLevel] = useState("")
  const [news, setNews] = useState(null)
  const categories = useSelector((state) => state.categories)
  const org = useSelector((state) => state.org)
  const lang = useSelector((state) => state.lang)
  useEffect(() => {
    if (data) {
      setLevel(data.level)
      setDescription(data.description)
      setTitle(data.name)
    }
  }, [data])

  // console.log(categories,"++++++++", org, '123', lang)
  useEffect(() => {
    dispatch(getAllCategorey())
    dispatch(getAllOrg())
    dispatch(getAllLang())
  }, [])
  // console.log(newForm)


  const handleSubmitAdd = (event) => {
    event.preventDefault()
    const input_data = Object.fromEntries(new FormData(event.target))
    // console.log(input_data)
    dispatch(addInterview(
      {
        title,
        description,
        categories: cat,
        level,
        questionsWITHlang: input_data,
        company_id: company,
      }))
    setAdd(null)
    setTimeout(() => {
      history.push("/")
    }, 5000);

  }
  const editInterview = (event) => {
    event.preventDefault()
    // alert(555)
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
      <h3>{id ? "Редактировать собеседование" : "Создать собеседование"}</h3>
      {add ?
        <Grid container spacing={3}>
          <form onSubmit={id ? editInterview : handleSubmitAdd}>
            <Box sx={{ minWidth: 250 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Company</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={company}
                  label="Company"
                  onChange={(event) => {
                    // console.log(event.target.value)
                    setCompany(event.target.value);
                  }}
                >
                  {org.map((item, index) => <MenuItem value={item.id}>{item.id}.{item.title}</MenuItem>)}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ minWidth: 500 }}>
              {id ? <TextField id="outlined-basic" label="Level" variant="outlined" onChange={levelAdd} value={level} /> :
                <TextField id="outlined-basic" label="Level" variant="outlined" onChange={levelAdd} />
              }
            </Box>

            <Box sx={{ minWidth: 250 }}>
              {id ? <TextField id="outlined-basic" label="Title" variant="outlined" onChange={titleAdd} value={title}/> :
                <TextField id="outlined-basic" label="Title" variant="outlined" onChange={titleAdd} />}
            </Box>

            <Box sx={{ minWidth: 500 }}>
              {id ? <TextField id="outlined-basic" label="Description" variant="outlined" onChange={descriptionAdd} value={description} /> :
                <TextField id="outlined-basic" label="Description" variant="outlined" onChange={descriptionAdd} />
              }
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
              {newForm.map((el, i) => <Input key={el.name} index={el.name} lang={lang} />)}
              <Button onClick={() => setNewForm([...newForm, { name: `${newForm.length}` }])} variant="contained">
                Добавить вопрос
              </Button>
            </Box>

            <Stack spacing={2} direction="row">
              <Button type="submit" variant="contained">{id ? "Сохранить изменения" : "Создать"}</Button>
            </Stack>
          </form>
        </Grid>
        : <>
          <h1>Запись успешно добавленна</h1>
          <div>
            <a href='/'>перейти в личный кабинет</a>
          </div>
          <div>
            <a href='/profile'>На главную</a>
          </div>
        </>}
    </Paper>
  );
}
