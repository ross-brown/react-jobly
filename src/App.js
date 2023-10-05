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
  const [currentUser, setCurrentUser] = useState({ data: null, isLoaded: false });
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    async function fetchCurrentUser() {
      const { username } = jwtDecode(token);

      try {
        const user = await JoblyApi.getUser(username);
        setCurrentUser({ data: user, isLoaded: true });
      } catch (error) {
        console.error(error);
      }
    }

    if (token) {
      fetchCurrentUser();
    } else {
      setCurrentUser(c => ({ ...c, isLoaded: true }));
    }

  }, [token]);


  /** login: fetch token from backend with username/password,
   *  set the token in state */
  async function login(userCreds) {
    const token = await JoblyApi.login(userCreds);
    localStorage.setItem("token", token);
    setToken(localStorage.getItem("token"));
  }

  /** logout: set the current user and token in state to null. */
  function logout() {
    setCurrentUser({ data: null, isLoaded: false });
    localStorage.removeItem("token");
    setToken(null);
  }

  /** signup: fetch token from backend with signin form data
   * set the token in state
   */
  async function signup(userData) {
    const token = await JoblyApi.register(userData);
    // setToken(token);
    localStorage.setItem("token", token);
  }

  /** Protects whole app */
  if (!currentUser.isLoaded) return <h1>Jobly Loading...</h1>;

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
