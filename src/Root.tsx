import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import Loadable from 'react-loadable';

import Login from './shared/components/pages/Login';

const Tutor = Loadable({
  loader: () => import('./views/tutor'),
  loading: () => null,
});

const Admin = Loadable({
  loader: () => import('./views/admin'),
  loading: () => null,
});

const TutorRoute: React.FC<RouteComponentProps> = () => <Tutor />;
const AdminRoute: React.FC<RouteComponentProps> = () => <Admin />;
const LoginRoute: React.FC<RouteComponentProps> = () => <Login />;

const Root: React.FC = () => (
  <Router>
    <TutorRoute path="tutor/*" />
    <AdminRoute path="admin/*" />
    <LoginRoute path="/" />
  </Router>
);

export default Root;
