import { Button } from '@material-ui/core';
import React from 'react';
import { calendarFooterStyles } from './styles';
import { setDayRange } from './dayRange';

export const CalendarFooter = (props) => {
  const nullDayRange = setDayRange(null, null);

  const classes = calendarFooterStyles();

  return (
    <div className={classes.root}>
      <Button
        type='button'
        onClick={() => {
          props.setSelectedDayRange(nullDayRange);
        }}
        color='primary'
        variant='contained'
      >
        Reset Interval
      </Button>
    </div>
  );
};
