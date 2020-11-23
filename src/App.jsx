import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as axios from 'axios';
import Home from './pages/Home';
import Login from './pages/Login';
import backendURL from './utils/config';
import Loading from './pages/Loading';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${backendURL}/auth/loggedIn`, {
        withCredentials: true
      })
      .then((res) => {
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
                return <h1>Landing Page</h1>;

              default:
                return <Loading />;
            }
          }}
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
