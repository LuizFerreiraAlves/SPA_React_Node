import React, { Component, Fragment } from 'react';
import Header from '../../Components/Header/header';
import DataTable from '../../Components/DataTable/DataTable';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';

export default class Sales extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nomes: [],
            titulo: 'Autores'
        };
    }

    componentDidMount(){
        ApiService.ListaNomes()
                .then(res => {
                    if(res.message === 'success'){
                        PopUp.exibeMensagem('success', 'Autores Listados com sucesso');
                        this.setState({nomes: [...this.state.nomes, ...res.data]});
                    }
                })
                .catch(err => PopUp.exibeMensagem('error', 'Falha na comunicação com a API ao listar os autores'));
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='container center'>
                    <h1>Leilões cadastrados</h1>
                    <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']} />
                </div>
            </Fragment>
        );
    }

}