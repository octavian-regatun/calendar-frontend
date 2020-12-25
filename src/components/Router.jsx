import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Loading from '../pages/Loading';
import Login from '../pages/Login';
import backendURL from '../utils/config';

function Routes() {
  const [loggedIn, setLoggedIn] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${backendURL}/api/auth/loggedIn`, {
        withCredentials: true
      })
      .then(res => {
        setLoggedIn(res.data.loggedIn);
      });
  });

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {() => {
            switch (loggedIn) {
              case true:
                return <Home />;

              case false:
                window.location.href = '/landingPage.html';
                break;

              default:
                return <Loading />;
            }
            return null;
          }}
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
