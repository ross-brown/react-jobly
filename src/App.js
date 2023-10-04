import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';

import Nav from './Nav';
import RoutesList from './RoutesList';
import userContext from './userContext';

/** Renders Jobly App components.
 *
 * App -> { Nav, RoutesList }
 */
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => { }, [token]);


  function login({ username, password }) {
    //TODO:
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
