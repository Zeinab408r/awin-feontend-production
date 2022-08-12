import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { pink, red, lightBlue } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 100,
    backgroundColor: red,
  },
 
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    if (value === 0) {
      history.push('/home');
    } else if (value === 1) {
      history.push('/home/search');
    } else if (value === 2) {
      history.push('/home');
    } else if (value === 3) {
      history.push('/home');
    }
  }, [value, history]);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
       
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
       
        label="Home"
        icon={<HomeOutlinedIcon />}
      />

      <BottomNavigationAction
        label="Search"
        icon={<SearchOutlinedIcon />}
      />

      <BottomNavigationAction
        label="Shopping"
        icon={<ShoppingCartOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        icon={<PermIdentityOutlinedIcon />}
      />
    </BottomNavigation>
  );
}
