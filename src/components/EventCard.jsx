import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import customTheme from '../utils/theme';
import { addZero } from '../utils/utils';

const useStyles = makeStyles({
  container: {
    width: '90%',
    borderRadius: '100px',
    textAlign: 'left',
    textTransform: 'none',
    fontFamily: 'arial',
    padding: '0',
    display: 'block',
    '&:hover': {
      backgroundColor: '#00a3ff'
    }
  },
  content: {
    display: 'inline-flex',
    padding: '1rem'
  },
  date: {
    display: 'block',
    paddingRight: '1rem',
    borderRight: '2px',
    borderRightStyle: 'solid',
    borderRightColor: customTheme.dark.subtitle
  },
  about: {
    display: 'block',
    margin: '0',
    paddingLeft: '1rem'
  },
  title: {
    color: customTheme.dark.title
  },
  subtitle: {
    color: customTheme.dark.subtitle
  },
  timeFrame: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerColorTag: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '16px'
  },
  colorTag: {
    height: '15px',
    width: '15px',
    borderRadius: '50%',
    display: 'inline-block'
  },
  separator: {
    width: '32px',
    height: '2px',
    backgroundColor: 'white',
    display: 'inline-block'
  },
  containerSeparator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '8px',
    marginBottom: '8px'
  }
});

function EventCard(props) {
  const classes = useStyles();
  return (
    <Button
      className={`${classes.container} ${props.className}`}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div className={classes.content}>
        <div className={classes.containerColorTag}>
          <span
            className={classes.colorTag}
            style={{ backgroundColor: props.colorTag }}
          />
        </div>
        <div className={classes.date}>
          <div className={classes.timeFrame}>
            <h4
              style={{ margin: '0', padding: '0' }}
              className={classes.subtitle}
            >
              {`${addZero(new Date(props.startAt).getHours())}:${addZero(
                new Date(props.startAt).getMinutes()
              )}`}
            </h4>
            <h4 style={{ margin: '0', padding: '0' }} className={classes.title}>
              {`${new Date(props.startAt).getDate()}.${addZero(
                new Date(props.startAt).getMonth() + 1
              )}.${new Date(props.startAt).getFullYear()}`}
            </h4>
          </div>
          <div className={classes.containerSeparator}>
            <span className={classes.separator} />
          </div>
          <div className={classes.timeFrame}>
            <h4
              style={{ margin: '0', padding: '0' }}
              className={classes.subtitle}
            >
              {`${addZero(new Date(props.endAt).getHours())}:${addZero(
                new Date(props.endAt).getMinutes()
              )}`}
            </h4>
            <h4
              style={{ margin: '0 0 0 0', padding: '0' }}
              className={classes.title}
            >
              {`${new Date(props.endAt).getDate()}.${addZero(
                new Date(props.endAt).getMonth() + 1
              )}.${new Date(props.endAt).getFullYear()}`}
            </h4>
          </div>
        </div>
        <div className={classes.about}>
          <h2 style={{ margin: '0', padding: '0' }} className={classes.title}>
            {props.title}
          </h2>
          <h4
            style={{ margin: '0', padding: '0' }}
            className={classes.subtitle}
          >
            {props.description}
          </h4>
        </div>
      </div>
    </Button>
  );
}

export default EventCard;
