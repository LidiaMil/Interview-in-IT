import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
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

export default function Basicinputs() {
  const [add, setAdd] = useState(true)
  const dispatch = useDispatch()
  let history = useHistory();
  const [cat, setCat] = useState("")
  const [company, setCompany] = useState("")
  const [error, setError] = useState(null)
  const [newCompany, setNewCompany] = useState(null)
  const [newForm, setNewForm] = useState([{ name: '0' }])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const { id } = useParams()
  const myInterviews = useSelector(state => state.myInterviews)
  const data = myInterviews.filter(e => e.id === Number(id))[0]

  const idUser = Number(localStorage.getItem('user_id'))
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
      setCompany(data.Organizations[0].title)
    }
  }, [data])

  useEffect(() => {
    dispatch(getAllCategorey())
    dispatch(getAllOrg())
    dispatch(getAllLang())
  }, [])


  const handleSubmitAdd = (event) => {
    event.preventDefault()
    const input_data = Object.fromEntries(new FormData(event.target))
    if (idUser && title && cat && level && input_data && company) {
      dispatch(addInterview(
        {
          user: idUser,
          title,
          description,
          categories: cat,
          level,
          questionsWITHlang: input_data,
          company_id: company,
        }))
      setAdd(null)
      setError(null)
      setTimeout(() => {
        history.push("/")
      }, 3000);
    }
    else {
      setError(true)
      setTimeout(() => {
        history.push("/newcomment")
      }, 3000);
    }

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
  const companyAdd = (event) => {
    setCompany(event.target.value)
  }

  return (
    <div>
      <h2>{id ? "Редактировать собеседование" : "Создать собеседование"}</h2>
      {add ?
        <div id="app">
          <form className="vue-form" onSubmit={id ? editInterview : handleSubmitAdd}>
            <div>
              <label className="label" for="name">Компания</label>
              {newCompany ?
                <>
                  <div>
                    <input type="text" name="name" id="name" required="" v-model="name" onChange={companyAdd} />
                  </div>
                  <button type="button" onClick={() => setNewCompany(null)} className="search-buttons card-buttons">
                    Вернуть список
                  </button>
                </>
                :
                <>
                  <p className="select">
                    <select
                      className="budget"
                      label="Company"
                      v-model="selection.member"
                      value={company}
                      onChange={(event) => {
                        setCompany(event.target.value);
                      }}>
                      <option ></option>
                      {org.map((item, index) => <option value={item.id}>{item.title}</option>)}
                    </select>
                  </p>
                  <button type="button" onClick={() => setNewCompany(true)} className="search-buttons card-buttons">
                    Компании нет в списке
                  </button>
                </>
              }
            </div>

            <div>
              {id ? <input label="Level" variant="outlined" onChange={levelAdd} value={level} /> :
                <>
                  <label className="label" for="name">Уровень</label>
                  <input type="text" name="name" id="name" required="" v-model="name" onChange={levelAdd} />
                </>
              }
            </div>

            <div>
              {id ? <input label="Title" variant="outlined" onChange={titleAdd} value={title} /> :
                <>
                  <label className="label" for="name">Должность</label>
                  <input type="text" name="name" id="name" required="" v-model="name" onChange={titleAdd} />
                </>
              }
            </div>

            <div>
              {id ? <input label="Description" variant="outlined" onChange={descriptionAdd} value={description} /> :
                <>
                  <label className="label" for="name">Описание вакансии</label>
                  <input type="text" name="name" id="name" required="" v-model="name" onChange={descriptionAdd} />
                </>
              }
            </div>


            <div>
              <label className="label" for="name">Категория </label>
              <p className="select">
                <select
                  className="budget"
                  v-model="selection.member"
                  value={cat}
                  label="Organization"
                  onChange={(event) => {
                    setCat(event.target.value);
                  }}>
                  <option ></option>
                  {categories.map((item, index) => <option value={item.id}>{item.id}.{item.categorey}</option>)}
                </select>
              </p>
            </div>

            <div>
              {newForm.map((el, i) => <Input key={el.name} index={el.name} lang={lang} />)}
              <button type="button" onClick={() => setNewForm([...newForm, { name: `${newForm.length}` }])} className="search-buttons card-buttons">
                Добавить вопрос
              </button>
            </div>

            <Stack spacing={2} direction="row">
              <button type="submit" className="search-buttons card-buttons">{id ? "Сохранить изменения" : "Создать"}</button>
            </Stack>
          </form>
        </div>
        :
        <>
          <h1>Запись успешно добавленна</h1>
          <div>
            <a href='/'>перейти в личный кабинет</a>
          </div>
          <div>
            <a href='/profile'>На главную</a>
          </div>
        </>}
      <div>
        {error ? <h1>Что-то пошло не так...</h1> : <h1></h1>}
      </div>
    </div>

  );
}
