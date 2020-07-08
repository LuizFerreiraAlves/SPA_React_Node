import React from 'react';
import LinkWrapper from '../../utils/LinkWrapper';

const Header = () => {
    return (
      <nav>
        <div className="nav-wrapper blue darken-2">
          <LinkWrapper to="/" className="brand-logo center" activeStyle={{}}>Leilão Online</LinkWrapper>
          <ul className="right">
            <li><LinkWrapper to='/sales'>Ver leilões</LinkWrapper></li>
            <li><LinkWrapper to='/register'>Cadastrar leilão</LinkWrapper></li>
            <li><LinkWrapper to='/'>Sair</LinkWrapper></li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;