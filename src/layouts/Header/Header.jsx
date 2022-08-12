import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Badge } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    [theme.breakpoints.up('lg')]: {
      '& img': {
        color: red[100],
        width: '100',
        height: '270',
      },
    },
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 4,
    // textAlign: 'center',
  },
  logo: {
    margin: 'auto',
    textAlign: 'center',
  },
  logoHorizontallyCenter: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color=" white">
        <Toolbar>
          <Typography className={classes.title}>
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="Cindy Baker"
                src="https://i0.wp.com/smsforwishes.com/wp-content/uploads/2022/03/105274370_103709461393684_681293867908537804_n.jpeg?resize=708%2C708&ssl=1"
              />
            </IconButton>
          </Typography>
          <div className={classes.logoHorizontallyCenter}>
            <img
              src={
                'https://upload.wikimedia.org/wikipedia/commons/a/a0/Logo-awin-black.svg'
              }
              className={classes.logo}
              alt="logo"
              width="150"
              height="70"
            />
          </div>
          {/* <Typography variant="h3" className={classes.title}>
            Awin
          </Typography> */}
          <IconButton
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge
              badgeContent={17}
             color='error'
             overlap="rectangular"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
