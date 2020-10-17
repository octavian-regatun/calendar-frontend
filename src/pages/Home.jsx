import React from 'react';
import Sidebar from '../components/Sidebar';

class Home extends React.PureComponent {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Sidebar color='#171D25' height='100%' width='5rem' />
      </div>
    );
  }
}

export default Home;
