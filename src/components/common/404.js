import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <React.Fragment>
      <div>Page not found</div>
      <Link to="/explore">Explore Mutual Funds</Link>
    </React.Fragment>
  );
};

export default PageNotFound;
