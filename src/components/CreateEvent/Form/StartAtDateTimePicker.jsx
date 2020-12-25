import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import CustomDateTimePicker from '../../CustomDateTimePicker';

function StartAtDateTimePicker({ event, setEvent }) {
  const [startAt, setStartAt] = useState(new Date());

  return (
    <CustomDateTimePicker
      color='primary'
      label='Event Start Date'
      inputVariant='outlined'
      ampm={false}
      format='DD/MM/YYYY HH:mm'
      fullWidth
      minutesStep={15}
      value={startAt}
      onChange={value => {
        setStartAt(value);
        setEvent({ ...event, startAt: value });
      }}
      DialogProps={{ className: 'GION' }}
    />
  );
}

export default StartAtDateTimePicker;
