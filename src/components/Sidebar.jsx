import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

import Logo from '../images/Logo.svg';
import './Sidebar.css';

const MUIStyles = () => ({});

class Sidebar extends PureComponent {
  render() {
    // const { classes } = this.props;
    const styles = {
      container: {
        width: this.props.width,
        height: this.props.height,
        backgroundColor: this.props.color,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
      },
      logo: {
        marginTop: '1rem',
        width: '5rem'
      },
      icon: {
        width: '2.5rem',
        height: '2.5rem',
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
      },
      iconButton: {
        width: '5rem',
        height: '5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    };
    return (
      <div style={styles.container}>
        <img style={styles.logo} src={Logo} alt='logo' />
        <div>
          <div style={styles.iconButton} className='iconButton'>
            <HomeRoundedIcon style={styles.icon} />
          </div>
          <div style={styles.iconButton} className='iconButton'>
            <EventNoteRoundedIcon style={styles.icon} />
          </div>
          <div style={styles.iconButton} className='iconButton'>
            <GroupRoundedIcon style={styles.icon} />
          </div>
        </div>
        <div style={styles.iconButton} className='iconButton'>
          <SettingsRoundedIcon style={styles.icon} />
        </div>
      </div>
    );
  }
}

export default withStyles(MUIStyles)(Sidebar);
