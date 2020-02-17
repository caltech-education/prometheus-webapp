import React from 'react';
import { RouteComponentProps } from '@reach/router';

const Home: React.FC<RouteComponentProps> = () => (
   <div>olá, sou a home do Tutor : { process.env.REACT_APP_URL }</div>
);

export default Home;
