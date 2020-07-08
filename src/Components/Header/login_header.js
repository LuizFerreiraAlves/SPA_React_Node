import React from 'react';
import LinkWrapper from '../../utils/LinkWrapper';

const LoginHeader = () => {
    return (
        <nav>
            <div className="nav-wrapper center blue darken-2">
                <LinkWrapper 
                    to="/" 
                    className="brand-logo" 
                    activeStyle={{}}>
                        Leilão Online
                </LinkWrapper>
            </div>
        </nav>
    );
}

export default LoginHeader;