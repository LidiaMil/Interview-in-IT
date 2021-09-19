
import * as React from 'react';
import { Button, styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link } from "react-router-dom";
import Question from '../Question/Question';

export default function ComplexGrid(interview ) {
  console.log(interview )

  return (
   <a href={`/question/${interview.id}`}>{interview.text}</a>
  );
}
