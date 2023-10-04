import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

import Nav from './Nav';
import RoutesList from './RoutesList';
import userContext from './userContext';

/** Renders Jobly App components.
 *
 * App -> { Nav, RoutesList }
 */
function App() {
  const [user, setUser] = useState(null);

  function login({ username, password }) {
    //TODO:
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
