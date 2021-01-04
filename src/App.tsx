import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import routes from './router-config';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {
            routes.map((route) => (
              <Route
                exact={route.exact}
                path={route.path}
                render={(props: object) => (
                  // pass the sub-routes down to keep nesting
                  <route.component {...props} />
                )}
              />))
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
