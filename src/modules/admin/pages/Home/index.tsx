import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Button } from 'antd';
import styles from './Home.module.scss';

const Home: React.FC<RouteComponentProps> = () => (
  <>
    <div>olá, sou a home de admin</div>
    {/* <Button
      type="primary"
      // className={styles.button}
    > */}
    <Button type="primary" icon="search">Teste tema</Button>
      {/* teste tema
    </Button> */}
  </>
);

export default Home;