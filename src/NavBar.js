import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CartIcon from './Components/ShoppingCartIcon';
import  headerImage  from './Assets/headerImage.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  alink: {
    textDecoration:'none',
    color:'black',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.blue,
    '&:hover': {
     backgroundColor: theme.palette.common.white,
    },
    
  },

  toolbar: {
    minHeight: 40,
    alignItems: 'flex-end',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
   img: {
     
     width: '70%',
     height: 450,
   },
  
  title: {
    width: 'auto',
    flexGrow: 2,
    alignSelf: 'flex-end',
    display: 'inline',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
     borderRadius: theme.shape.borderRadius,
    },

  cart: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor:theme.palette.common.red,
      '&:hover': {
        backgroundColor: theme.palette.common.white,
      },
      marginLeft: 10,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        height: 40,
      },
    },
  
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
          <Link className={classes.alink} to='/'>Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link className={classes.alink} to='/product'>Shop</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link className={classes.alink} to='/manCat'>Men</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link className={classes.alink} to='/womanCat'>Women</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link className={classes.alink} to='/kidsCat'>kids</Link>
          </Typography>
          <Link  className={classes.cart} to='/cart'><CartIcon /></Link>
        </Toolbar>
      </AppBar>
      
      <img src={headerImage} alt = {'header'} className={classes.img}></img>
    </div>
  );
}
