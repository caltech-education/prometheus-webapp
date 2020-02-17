import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import Home from './pages/Home';

const Tutor: React.FC<RouteComponentProps> = () => (
  <Router>
    <Home path="/" />
  </Router>
);

export default Tutor;