import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { AddressService } from 'shared/services/address-service';


const getZipCode = () => {
   const service = new AddressService();
   service.findByZipCode('09260090')
}

const Home: React.FC<RouteComponentProps> = () => (
   <div>olá, sou a home do Tutor : { process.env.REACT_APP_URL }</div>
);

getZipCode()
export default Home;
