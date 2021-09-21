import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react'
import OneInterview from "../OneInterview/OneInterview"
import { useDispatch, useSelector } from "react-redux";
import { getInterview } from '../../redux/actions/interview.action'
import { styled, Grid, Typography,Avatar, Paper, ButtonBase } from '@material-ui/core';
import { useState } from "react"
import { getAllLang } from '../../redux/actions/lang.action'

function Question() {
  const dispatch = useDispatch()
  const [language, setLanguage] = useState("")
  const lang = useSelector((state) => state.lang)

  const interview = useSelector((state) => state.interview)

  useEffect(() => {
    dispatch(getInterview())
    dispatch(getAllLang())

  }, [])

  return (
    <>
      <h1>All Interview</h1>
      <Box sx={{ minWidth: 250 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            name="language"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Language"
            onChange={(event) => {
              console.log(event.target.value)
              setLanguage(event.target.value);
            }}
          >
            {lang.map((item, index) => <MenuItem id={10} value={item.id}>{item.id}.{item.programmingLanguage}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      <div >
        {interview && interview.map((item, index) => <div className="col-4" key={item.id}><OneInterview {...item} /></div>)}
      </div>

    </>
  )
}
export default Question
