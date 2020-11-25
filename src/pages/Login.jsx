import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Logo from '../images/Logo.svg';
import LoginSVG from '../images/Login.svg';
import GoogleSVG from '../images/Google.svg';
import customTheme from '../utils/theme';

const useStyles = makeStyles({
  button: {
    display: 'inline',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '20px',
    backgroundColor: 'white',
    borderWidth: '1px',
    borderRadius: '16px',
    borderStyle: 'solid',
    transition: '0.2s',
    cursor: 'pointer',
    margin: '20vh 0 30vh 0',
    '&:hover': {
      transition: '0.2s',
      backgroundColor: '#D3D3D3'
    },
    '&:focus': {
      outline: '0'
    }
  }
});

export default function Login() {
  const classes = useStyles();
  return (
    <Grid container style={{ height: '100vh' }}>
      <Grid
        item
        xs={6}
        style={{
          overflow: 'hidden',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${LoginSVG})`,
          height: '100%'
        }}
      >
        <h1
          style={{
            color: customTheme.orange.primary,
            margin: '20vh 0 0 3vw',
            fontSize: '4vw',
            fontFamily: 'Comfortaa'
          }}
        >
          Sign in
        </h1>
        <h2
          style={{
            margin: '20vh 0 0 3vw',
            fontSize: '2rem',
            width: '25vw',
            color: customTheme.orange.light,
            fontFamily: 'Montserrat',
            fontWeight: '300'
          }}
        >
          You can join CALENDAR by logging through a social media app
        </h2>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1 style={{ fontSize: '4rem', fontFamily: 'Montserrat' }}>CALENDAR</h1>
          <img src={Logo} alt='logo' style={{ width: '15rem' }} />
        </div>
        <button
          className={classes.button}
          type='button'
          onClick={() => {
            window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px'
            }}
          >
            <img
              src={GoogleSVG}
              alt='google logo'
              style={{ width: '32px', margin: '0 24px 0 0' }}
            />
            Sign in with Google
          </div>
        </button>
      </Grid>
    </Grid>
  );
}
