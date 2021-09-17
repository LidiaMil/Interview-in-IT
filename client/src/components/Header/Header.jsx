import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header()  {
  const classes = useStyles();



  const isAuthenticated = useSelector(state => state.isAuntificated)


  


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Собес в IT
          </Typography>
          <Link className="nav-link" to="/"><Button color="inherit">Main</Button></Link>
          <Button color="inherit"><Link className="nav-link" to="/profile">Профиль</Link></Button>
          <Button color="inherit"><Link className="nav-link" to="/organization">Организации</Link></Button>
          <Button color="inherit"><Link className="nav-link" to="/question">Вопросы</Link></Button>
          <Button color="inherit"><Link className="nav-link" to="/newpost">Создать новый вопрос</Link></Button>
          {!isAuthenticated && <Button color="inherit"><Link className="nav-link" to="/login">Логин</Link></Button>}
          {isAuthenticated && <Button color="inherit"><Link className="nav-link" to="/logout">Логаут</Link></Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

