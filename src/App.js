import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';

import Nav from './Nav';
import RoutesList from './RoutesList';
import userContext from './userContext';
import JoblyApi from './api';
import Alert from './Alert';

/** Renders Jobly App components.
 *
 * App -> { Nav, RoutesList }
 */
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  //FIXME: can we decode the token to grab username instead of setting a derived state?

  useEffect(() => {
    async function fetchCurrentUser(username) {
      let user = JoblyApi.getUser(username);
      setCurrentUser(user);
    }
    fetchCurrentUser();
  }, [token]);


  async function login({ username, password }) {
    let token;

    try {
      token = await JoblyApi.login(username, password);
    } catch(err) {
      return <Alert />;
    }

    setToken(token);
    setUsername(username);
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
          <RoutesList login={login} logout={logout} signup={signup} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
