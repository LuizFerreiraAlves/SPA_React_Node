import React, { Component, Fragment } from 'react';
import LoginHeader from '../../Components/Header/login_header';

export default class Login extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <LoginHeader />
                <form className="container">
                    <div className="input-field">
                        <div>
                            <label className="input-field" htmlFor="login">Login</label>
                            <input
                                className="validate"
                                id="login"
                                type="text"
                                name="login"
                                //value={login}
                                //onChange={this.escutadorDeInput} 
                                />
                        </div>
                        <div>
                            <label className="input-field" htmlFor="senha">Senha</label>
                            <input
                                className="validate"
                                id="senha"
                                type="text"
                                name="senha"
                                //value={senha}
                                //onChange={this.escutadorDeInput}
                                />

                        </div>
                    </div>
                    <div className="container center mb-10">
                        <div>
                            <button 
                                className="waves-effect waves-light blue darken-2 btn"
                                onClick={this.submitFormulario} 
                                type="button">
                                    Entrar
                            </button>
                        </div>
                    </div>
                </form>
            </Fragment>
        );
    }
}