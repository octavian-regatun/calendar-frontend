import { makeStyles } from '@material-ui/core';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import React from 'react';
import Logo from '../../images/Logo.svg';
import './Sidebar.css';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  },
  logo: {
    marginTop: '1rem',
    width: '5rem'
  },
  icon: {
    width: '2.5rem',
    height: '2.5rem',
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  },
  iconButton: {
    width: '5rem',
    height: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function Sidebar(props) {
  const classes = useStyles();
  return (
    <div
      className={`${classes.container} ${props.className}`}
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.color
      }}
    >
      <img className={classes.logo} src={Logo} alt='logo' />
      <div>
        <div className={`iconButton ${classes.iconButton}`}>
          <HomeRoundedIcon className={classes.icon} />
        </div>
        <div className={`iconButton ${classes.iconButton}`}>
          <EventNoteRoundedIcon className={classes.icon} />
        </div>
        <div className={`iconButton ${classes.iconButton}`}>
          <GroupRoundedIcon className={classes.icon} />
        </div>
      </div>
      <div className={`iconButton ${classes.iconButton}`}>
        <SettingsRoundedIcon className={classes.icon} />
      </div>
    </div>
  );
}

export default Sidebar;
