import React from 'react';
import { Link } from '@reach/router';

import imageTeste from 'shared/assets/images/success.png';
//enfia esse import absoluto no cu


// To-Do --- resolver import por absolute path e import de modulos scss(erro)
// To-Do --- verificar sobre atualizaçao de versoes de pacotes e se for o caso travar as versoes no package.json

const Login = () => (
  <>
    <div>olá eu sou a tela de login</div>
    <div style={{ margin: '100px', width: '500px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <img
        src={imageTeste}
        alt="olar"
        width="200px"
        height="200px"
      />
      <Link to="admin" key={0}>
        <span>Módulo Admin</span>
      </Link>
      <Link to="tutor" key={1}>
        <span>Módulo Tutor</span>
      </Link>
      <Link to="student" key={2}>
        <span>Módulo Estudante</span>
      </Link>
    </div>
  </>
);

export default Login;
