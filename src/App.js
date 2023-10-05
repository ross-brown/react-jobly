import { BrowserRouter } from 'react-router-dom';
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

  useEffect(() => {
    async function fetchCurrentUser() {
      const { username } = jwtDecode(token);

      const user = await JoblyApi.getUser(username);
      setCurrentUser(user);
    }
    if (token) fetchCurrentUser();
  }, [token]);


  /** login: fetch token from backend with username/password,
   *  set the token in state */
  async function login({ username, password }) {
    const token = await JoblyApi.login(username, password);
    setToken(token);
  }

  /** logout: set the current user and token in state to null. */
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  /** signup: fetch token from backend with signin form data
   * set the token in state
   */
  async function signup(userData) {
    const token = await JoblyApi.register(userData);
    setToken(token);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ currentUser }}>
          <Nav logout={logout} />
          <RoutesList login={login} logout={logout} signup={signup} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
