import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import customTheme from '../utils/theme';

const MUIStyles = () => ({
  container: {
    width: '80%',
    backgroundColor: customTheme.dark.primary.light,
    borderRadius: '1rem',
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
  }
});

class EventCard extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Button className={classes.container}>
          <div href='www.google.ro' className={classes.content}>
            <div className={classes.date}>
              <h1
                style={{ margin: '0', padding: '0' }}
                className={classes.title}
              >
                {this.props.startAt}
              </h1>
              <h3
                style={{ margin: '0 0 0 0', padding: '0' }}
                className={classes.subtitle}
              >
                {this.props.endAt}
              </h3>
            </div>
            <div className={classes.about}>
              <h2
                style={{ margin: '0', padding: '0' }}
                className={classes.title}
              >
                {this.props.title}
              </h2>
              <h4
                style={{ margin: '0', padding: '0' }}
                className={classes.subtitle}
              >
                {this.props.description}
              </h4>
            </div>
          </div>
        </Button>
      </>
    );
  }
}

export default withStyles(MUIStyles)(EventCard);
