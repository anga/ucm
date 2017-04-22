import React from 'react';
import { Route, IndexRoute } from 'react-router';

import WindowFrame from './containers/WindowFrame';

//<Route path="loggedin" cssomponent={LoggedInPage} />
//<IndexRoute component={LoginPage} />
export default (
  <Route path="/" component={WindowFrame}>
    
  </Route>
);
