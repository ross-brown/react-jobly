import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Nav from './Nav';
import RoutesList from './RoutesList';

/** Renders Jobly App components.
 *
 * States:
 * - Companies: {will edit later...}
 * - Company: {will edit later...}
 * - Jobs: {will edit later...}
 * - isLoading: boolean if fetching data from API
 *
 * App -> { Nav, RoutesList }
 */
function App() {
  //TODO: all functionality will live here
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