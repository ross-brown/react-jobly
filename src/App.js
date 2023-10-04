import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

import Nav from './Nav';
import RoutesList from './RoutesList';

/** Renders Jobly App components.
 *
 * App -> { Nav, RoutesList }
 */
function App() {

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
