import * as React from 'react';
import { styled } from '@material-ui/core';
import Rating from '@mui/material/Rating';
import { useMemo, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getValue } from '../../redux/actions/raiting.action'
import { useState } from 'react';
import axios from 'axios';
import { getOrg } from '../../redux/actions/organization.action';
import {Link} from "react-router-dom";

export default function Cards({ id, photo, Raitings, address, link, areaOfActivity, title, result }) {
  const dispatch = useDispatch()
  const [value, setValue] = useState(result);

  const getChange = useCallback(async (newValue) => {
    setValue(newValue);
    console.log('inCallback', newValue)
    await axios.patch('http://localhost:3000/organizations/rating', { newValue, id })
    dispatch(getOrg())
  }, [])

  return (
    <Link to={`/organization/${id}`} >
      <div className="job-overview-card">
        <div className="job-card overview-card shadow border-radius">
          <div className="overview-wrapper">
            <img className="companyImg" src={photo} />
            <div className="overview-detail">
              <div className="job-card-title">{title}</div>
              <div className="job-card-subtitle">
                {areaOfActivity}
              </div>
              <div className="job-card-subtitle">
                {address}
              </div>
              <div className="job-card-subtitle">
                {link}
              </div>
            </div>
          </div>
          <div className="rating-block">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                getChange(newValue)
              }}
            />
            <span >{result.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

