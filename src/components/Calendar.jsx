import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { ButtonBase, Grid } from '@material-ui/core';
import { NavigateBeforeRounded, NavigateNextRounded } from '@material-ui/icons';

const MUIStyles = () => ({
  hoverItem: {
    transition: '0.2s',
    '&:hover': {
      backgroundColor: '#0d1115',
      transition: '0.2s'
    }
  },
  container: {
    backgroundColor: '#1e242d',
    color: 'white',
    padding: '1rem'
  },
  title: {
    margin: 0,
    fontSize: '3rem'
  },
  containerDate: {
    display: 'inline-flex',
    justifyContent: 'space-between'
  },
  date: {
    color: '#babcbf',
    padding: 0,
    fontSize: '2rem'
  },
  navigationButton: {
    padding: '0.5rem',
    backgroundColor: '#2c3542',
    borderRadius: '50%',
    color: 'orange',
    transition: '0.2s',
    '&:hover': {
      backgroundColor: '#0d1115',
      transition: '0.2s'
    }
  },
  weekMonthContainer: {
    display: 'inline-flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#2c3542',
    borderRadius: '10rem',
    width: '100%',
    marginBottom: '1.5rem'
  },
  week: {
    margin: 0,
    width: '50%',
    padding: '0.5rem 0',
    color: 'f5f5f6',
    borderRadius: '10rem',
    textAlign: 'center'
  },
  month: {
    margin: 0,
    width: '50%',
    padding: '0.5rem 0',
    color: 'f5f5f6',
    borderRadius: '10rem',
    textAlign: 'center'
  },
  activeDisplay: {
    backgroundColor: 'orange'
  },
  table: {
    textAlign: 'center',
    width: '100%',
    '& th': {
      color: '#4e5969',
      fontSize: '1.5rem'
    },
    '& button': {
      color: '#cdcfd1',
      fontSize: '1.25rem',
      transition: '0.2s',
      borderRadius: '50%',
      '&:hover': {
        backgroundColor: '#161c23',
        transition: '0.2s',
        color: 'orange'
      }
    }
  }
});

function renderTable(month, year) {
  const days = [];
  let firstDayOfMonth = new Date(`${year}-${month}-01`).getDay();
  const lastDayOfMonth = new Date(year, month, 0).getDate();

  if (firstDayOfMonth === 0) {
    firstDayOfMonth = 6;
  } else {
    firstDayOfMonth--;
  }

  for (let i = 0; i < firstDayOfMonth; i++) {
    days[i] = -1;
  }
  for (let i = firstDayOfMonth; i < lastDayOfMonth + firstDayOfMonth; i++) {
    days[i] = i - firstDayOfMonth + 1;
  }
  for (let i = lastDayOfMonth + firstDayOfMonth; i < 42; i++) {
    days[i] = -1;
  }

  return days;
}

class Calendar extends React.PureComponent {
  state = {
    display: 'month',
    month: 2,
    year: new Date().getFullYear()
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.container} alignItems='center'>
        <Grid item xs={12}>
          <h1 className={classes.title}>Calendar</h1>
        </Grid>
        <Grid container item xs={12} className={classes.containerDate} alignItems='center'>
          <h2 className={classes.date}>October, 2020</h2>
          <div>
            <ButtonBase className={classes.navigationButton} style={{ marginRight: '0.5rem' }}>
              <NavigateBeforeRounded fontSize='large' />
            </ButtonBase>
            <ButtonBase className={classes.navigationButton}>
              <NavigateNextRounded fontSize='large' />
            </ButtonBase>
          </div>
        </Grid>
        <Grid container item xs={12} />
        <div className={classes.weekMonthContainer}>
          <h3
            className={
              this.state.display === 'week'
                ? `${classes.week} ${classes.activeDisplay}`
                : classes.week
            }
          >
            Week
          </h3>
          <h3
            className={
              this.state.display === 'month'
                ? `${classes.month} ${classes.activeDisplay}`
                : classes.month
            }
          >
            Month
          </h3>
        </div>
        <Grid item xs={12}>
          <table className={classes.table}>
            <tbody>
              <tr>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
              </tr>
              {(() => {
                let days = [];
                if (this.state.month < 10) {
                  days = renderTable(`0${this.state.month}`, this.state.year);
                } else {
                  days = renderTable(this.state.month, this.state.year);
                }

                let numberOfRows = 0;

                if (days[28] === -1) {
                  numberOfRows = 4;
                }
                if (days[28] !== -1) {
                  numberOfRows = 5;
                }
                if (days[35] !== -1) {
                  numberOfRows = 6;
                }

                const rows = [];

                for (let i = 0; i < numberOfRows; i++) {
                  rows.push(
                    <tr key={`calendar-row-${i}`}>
                      {(() => {
                        const cells = [];
                        for (let j = 0; j < 7; j++) {
                          if (days[j + 7 * i] !== -1) {
                            cells.push(
                              <td key={`calendar-cell-${i}-${j}`}>
                                <ButtonBase
                                  style={
                                    days[j + 7 * i] < 10
                                      ? { padding: '0.5rem 0.9rem' }
                                      : { padding: '0.5rem' }
                                  }
                                >
                                  {days[j + 7 * i]}
                                </ButtonBase>
                              </td>
                            );
                          } else {
                            cells.push(
                              <td
                                key={`calendar-cell-empty-${i}-${j}`}
                                style={{ userSelect: 'none' }}
                              >
                                &nbsp;
                              </td>
                            );
                          }
                        }
                        return cells.map((el) => el);
                      })()}
                    </tr>
                  );
                }

                return rows.map((el) => el);
              })()}
            </tbody>
          </table>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(MUIStyles)(Calendar);
