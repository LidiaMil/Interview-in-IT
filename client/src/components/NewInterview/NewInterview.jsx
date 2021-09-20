import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategorey } from '../../redux/actions/categories.action';
import {addInterview} from '../../redux/actions/interview.action'
import {getAllLang} from '../../redux/actions/lang.action'
import { getOrg } from '../../redux/actions/organization.action'
import { useEffect, useState } from "react"


export default function BasicTextFields() {
  const dispatch = useDispatch()
  const [cat,setCat]=useState("")
  const [company,setCompany]=useState("")
  const [language,setLanguage]=useState("")
  const [newForm,setNewForm]=useState(1)
  const [title,setTitle]=useState()
  const [description,setDescription]=useState()
  const [level,setLevel]=useState()
  const [news,setNews]=useState(null)
  const categories = useSelector((state) => state.categories)
  const organization = useSelector((state) => state.organization)
  const lang= useSelector((state) => state.lang)
  
  console.log("++++++++",lang)
  useEffect(() => {
    dispatch(getAllCategorey())
    dispatch(getOrg())
    dispatch(getAllLang())
  }, [])

  const handleSubmitAdd = (event) => {
    event.preventDefault()
    const input_data = Object.fromEntries(new FormData(event.target))
    console.log("quest",input_data)
    dispatch(addInterview(
      {
        title,
        description,
        categories:cat,
        level,
        questions:input_data,
        company_id:company,
        lang_id:lang,
      }))
  }
  const titleAdd = (event) => {
    // console.log("title",event.target.value)
    setTitle(event.target.value)
    
  }
  const descriptionAdd = (event) => {
    setDescription( event.target.value)
  }
  const levelAdd = (event) => {
    setLevel( event.target.value)
  }

  let fields = [];
  for (let i = 0; i < newForm; i++) {
    fields.push(<>
    <TextField id="outlined-basic" name={i} label={`Question ${i}`} variant="outlined"/>
    <Box sx={{ minWidth: 250 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={language}
        label="Language"
        onChange={(event) => {
          console.log(event.target.value)
          setLanguage(event.target.value);
        }}
      >
        {lang.map((item, index) => <MenuItem  id={10} name={i} value={item.id}>{item.id}.{item.programmingLanguage}</MenuItem>)}
      </Select>
    </FormControl>
  </Box>
  </>);
  }

  return (
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
            {organization.map((item, index) => <MenuItem value={item.id}>{item.id}.{item.title}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 500 }}>
      <TextField id="outlined-basic" label="Level" variant="outlined" onChange={levelAdd}/>
      </Box>
      <Box sx={{ minWidth: 250 }}>
      <TextField id="outlined-basic" label="Title" variant="outlined"  onChange={titleAdd}/>
      </Box>
      <Box sx={{ minWidth: 500 }}>
      <TextField id="outlined-basic" label="Description" variant="outlined" onChange={descriptionAdd}/>
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
      <Button onClick={() => setNewForm(newForm+1)} variant="contained">
        Add question
      </Button>
      </Box>

      <Stack spacing={2} direction="row">
      <Button type="submit" variant="contained">Create</Button>
    </Stack>
    </form>
  );
}
