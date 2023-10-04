import { BrowserRouter, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

import Nav from './Nav';
import RoutesList from './RoutesList';
import userContext from './userContext';
import JoblyApi from './api';

/** Renders Jobly App components.
 *
 * App -> { Nav, RoutesList }
 */
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    async function fetchCurrentUser() {
      const { username } = jwtDecode(token);

      const user = await JoblyApi.getUser(username);
      setCurrentUser(user);
    }
    if (token) fetchCurrentUser();
  }, [token]);


  async function login({ username, password }) {
    let token;

    try {
      token = await JoblyApi.login(username, password);
    } catch (err) {
      setErrors(err);
    }

    setToken(token);
  }


  function logout() {
    setCurrentUser(null);
  }

  function signup() {

  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ currentUser }}>
          <Nav />
          <RoutesList login={login} logout={logout} signup={signup} errors={errors} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
