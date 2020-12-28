import React, { useState } from 'react';
import CustomDateTimePicker from '../../../CustomDateTimePicker';
import './DateTimePickers.css';

function EndAtDateTimePicker({ event, setEvent }) {
  const [endAt, setEndAt] = useState(null);

  return (
    <CustomDateTimePicker
      color='primary'
      label='End Date'
      inputVariant='outlined'
      ampm={false}
      format='DD/MM/YYYY HH:mm'
      fullWidth
      minutesStep={15}
      value={endAt}
      onChange={value => {
        setEndAt(value);
        setEvent({ ...event, endAt: value.$d });
      }}
      DialogProps={{ className: 'DateTimePicker' }}
    />
  );
}

export default EndAtDateTimePicker;
