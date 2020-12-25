import React, { useState } from 'react';
import CustomDateTimePicker from '../../CustomDateTimePicker';

function EndAtDateTimePicker({ event, setEvent }) {
  const [endAt, setEndAt] = useState(new Date());

  return (
    <CustomDateTimePicker
      color='primary'
      label='Event End Date'
      inputVariant='outlined'
      ampm={false}
      showTodayButton
      format='DD/MM/YYYY HH:mm'
      fullWidth
      minutesStep={15}
      value={endAt}
      onChange={value => {
        setEndAt(value);
        setEvent({ ...event, endAt: value });
      }}
    />
  );
}

export default EndAtDateTimePicker;
