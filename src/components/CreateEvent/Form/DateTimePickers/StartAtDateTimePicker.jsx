import React, { useState } from 'react';
import CustomDateTimPicker from '../../../CustomDateTimePicker';
import './DateTimePickers.css';

function StartAtDateTimePicker({ event, setEvent }) {
  const [startAt, setStartAt] = useState(null);

  return (
    <CustomDateTimPicker
      variant='dialog'
      color='primary'
      label='Start Date'
      inputVariant='outlined'
      ampm={false}
      format='DD/MM/YYYY HH:mm'
      fullWidth
      minutesStep={15}
      value={startAt}
      onChange={value => {
        setStartAt(value);
        setEvent({ ...event, startAt: value.$d });
      }}
      DialogProps={{ className: 'DateTimePicker' }}
    />
  );
}

export default StartAtDateTimePicker;
