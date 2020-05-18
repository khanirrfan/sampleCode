import React from 'react';
import './App.css';
import Toolbar from './components/toolbar/toolbar';
import SearchInput from './components/search/search';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import CollapsibleTable from './components/ItemLink/ItemLink';
function App() {
  return (
    <div>
      <Toolbar />
      <div className="box-Container">
        <Router>
          <Switch>
            <Route exact path='/'>
              <SearchInput />
            </Route>
            <Route exact path='/salesapi' component={ CollapsibleTable }>
            </Route>
            <Route exact path='/bookingapi'>
              <CollapsibleTable />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
