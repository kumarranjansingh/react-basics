import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ExplorePage from './components/explorePage';
import DetailsPage from './components/detailsPage';
import PageNotFound from './components/common/404';
const AppRoutes =()=> {
  return (
      <Switch>
        <Route exact path='/explore' component={ExplorePage}/>
        <Route path='/explore/:code' component={DetailsPage}/>
        <Route path='*' component={PageNotFound}/>
      </Switch>
  );
}

export default AppRoutes;
