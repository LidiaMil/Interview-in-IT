import * as React from 'react';
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
    setCat("");
    setCompany("");
  }
  return (
    <div className="CenterFormCard">
      <div className="form-top">
        <h3>Собеседования</h3>
        <div className="filterForm">
          <div >
            <form onSubmit={handleSubmit}>
              <div>
                <label class="label" for="name">Категория</label>
                <select id="fruits" value={cat} onChange={(event) => {
                  setCat(event.target.value);
                }}>
                  <option ></option>
                  {categories.map((item, index) => <option value={item.id}>{item.categorey}</option>)}
                </select>
              </div>
              <div>
                <label class="label" for="name">Компания</label>
                <select id="fruits" value={company} label="Company" onChange={(event) => {
                  setCompany(event.target.value);
                }}>
                  <option ></option>
                  {org.map((item, index) => <option value={item.id}>{item.title}</option>)}
                </select>
              </div>
              <div>
                <button class="search-buttons card-buttons" type="submit">Применить</button>
              </div>
              <div>
                <button class="search-buttons card-buttons" onClick={() => handleNull()}>Сбросить фильтр</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="searched-jobs">

        {filterPoint ?
          <div className="job-cards">
            {filter.length ? filter.map((item, index) => <OneInterview key={item.id} {...item} />) :
              <div>
                <div>Упс, 😢😢😢😢😢😢😢😢😢</div>
                <div>Пока что интервью с такими критериями нет на нашем сайте</div>
              </div>}
          </div> :
          <div className="job-cards">
            {interview && interview.map((item, index) => <OneInterview key={item.id} {...item} />)}
          </div>}
      </div>

    </div>


  )
}
export default Question
