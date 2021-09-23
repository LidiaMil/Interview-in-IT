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
import { styled, Grid, Typography, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { useState } from "react"
import { getAllCategorey } from '../../redux/actions/categories.action';
import { filterInterview } from '../../redux/actions/interview.action'
import { getAllOrg } from '../../redux/actions/org.action'


function Question() {
  const dispatch = useDispatch()
  const [cat, setCat] = useState("")
  const [company, setCompany] = useState("")
  const [filterPoint, setFilterPoint] = useState(null)
  const categories = useSelector((state) => state.categories)
  const org = useSelector((state) => state.org)
  const filter = useSelector((state) => state.filter)
  const interview = useSelector((state) => state.interview)

  useEffect(() => {
    dispatch(getInterview())
    dispatch(getAllCategorey())
    dispatch(getAllOrg())
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    //const input_data = Object.fromEntries(new FormData(event.target))
    console.log(cat)
    dispatch(filterInterview(
      {
        categories: cat,
        company_id: company,
      }))
    setFilterPoint(true)
  }
  
  const handleNull = () => {
    setFilterPoint(null)
  }
  return (
    <>
      <h2>Собеседования</h2>
      {/* <Box sx={{ minWidth: 250 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Categorey</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cat}
            label="Категория"
            onChange={(event) => {
              setCat(event.target.value);
            }}
          >
            {categories.map((item, index) => <MenuItem value={item.id}>{item.id}.{item.categorey}</MenuItem>)}
          </Select>
        </FormControl>
      </Box> */}
    
      <div className="job-cards">
        {interview && interview.map((item, index) => <div className="col-4" key={item.id}><OneInterview {...item} /></div>)}
      </div>



    </>
  )
}
export default Question
