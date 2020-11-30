import React, { useState } from 'react';
import { Calendar as CustomCalendar } from 'react-modern-calendar-datepicker';
import { calendarStyles } from './styles';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import customTheme from '../../utils/theme';
import { CalendarFooter } from './CalendarFooter';
import { setDayRange } from './dayRange';

export default function Calendar() {
  const defaultDayRange = setDayRange(null, null);

  const [selectedDayRange, setSelectedDayRange] = useState(defaultDayRange);

  const classes = calendarStyles();

  return (
    <>
      <CustomCalendar
        value={selectedDayRange}
        onChange={setSelectedDayRange}
        shouldHighlightWeekends
        colorPrimary={customTheme.orange.primary}
        colorPrimaryLight={customTheme.orange.light}
        renderFooter={() => {
          return <CalendarFooter setSelectedDayRange={setSelectedDayRange} />;
        }}
      />
    </>
  );
}
