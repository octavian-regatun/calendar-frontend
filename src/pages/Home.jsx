import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Sidebar from '../components/Sidebar';
import Calendar from '../components/Calendar';

class Home extends React.PureComponent {
  render() {
    return (
      <div style={{ display: 'inline-flex', height: '100vh', width: '100vw' }}>
        <Sidebar color='#171D25' height='100%' width='5rem' />

        <Container
          maxWidth
          style={{
            height: '100vh',
            padding: 0,
            background: '#171D25',
            overflow: 'auto'
          }}
        >
          <Grid container>
            <Grid item xs={3}>
              <Calendar />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Home;
