import React, { Component } from 'react';
import FormValidator from '../../utils/FormValidator';
import PopUp from '../../utils/PopUp';
import DateTimePicker from 'react-datetime-picker';

export default class Formulary extends Component {

    constructor(props) {
        super(props);

        this.validator = new FormValidator([
            {
                field: 'sale',
                method: 'isEmpty',
                validWhen: false,
                message: 'Entre com um nome de leilão de pelo menos 3 caracteres'
            },
            {
                field: 'value',
                method: 'isFloat',
                args: [{min: 0, max: 1000000}],
                validWhen: true,
                message: 'Entre com um valor entre 0 e 1000000 de até 2 casas decimais'
            },
            {
                field: 'owner',
                method: 'isEmpty',
                validWhen: false,
                message: 'Entre com um nome único de pelo menos 3 caracteres ou email'
            },
            {
                field: 'init_date',
                method: 'isSameOrAfter',
                validWhen: false,
                message: 'Entre com uma data maior que hoje'
            },
            {
                field: 'final_date',
                method: 'isSameOrAfter',
                validWhen: false,
                message: 'Entre com uma data maior que a inicial'
            }
        ])

        this.initialState = {
            sale: '',
            value: '',
            used_item: '',
            owner: '',
            init_date: '',
            final_date: '',
            validation: this.validator.valid()
        }

        this.state = this.initialState;
    }

    listener = event => {
        const { sale, value, used_item, owner, init_date, final_date } = event.target;

        this.setState({
            sale: sale,
            value: value,
            used_item: used_item,
            owner: owner,
            init_date: init_date,
            final_date: final_date
        });
    }

    submitFormulary = () => {
        const validation = this.validador.valida(this.state);

        if(validation.isValid){
            this.props.listener(this.state);
            this.setState(this.initialState);
        }else{
            const { sale, value, used_item, owner, init_date, final_date } = validation;
            const field = [sale, value, used_item, owner, init_date, final_date];
            const invalidFields = field.filter(elem => {
                return elem.isInvalid;
            });
            invalidFields.forEach(field => {
                PopUp.showMessage('error', field.message);
            });
        }
        
    }

    render() {

        const { sale, value, used_item, owner, init_date, final_date } = this.state;

        return (
            <form>
                <div className="container row" style={{padding: 40}}>
                    <div>
                        <label className="input-field" htmlFor="sale">Nome do leilão</label>
                        <input
                            className="validate"
                            id="sale"
                            type="text"
                            name="sale"
                            value={sale}
                            onChange={this.listener} />
                    </div>
                    <div>
                        <label className="input-field" htmlFor="value">Valor do item</label>
                        <input
                            className="validate"
                            id="value"
                            type="number"
                            name="value"
                            value={value}
                            onChange={this.listener} />
                    </div>
                    <div className="radio">
                        <label>Item é usado?</label>
                            <input
                                className="validate"
                                id="used_item" 
                                type="radio" 
                                name="used_item"
                                value="true" 
                                checked={true} />
                                    Sim                 
                            <input 
                                className="validate"
                                id="used_item" 
                                type="radio" 
                                name="used_item"
                                value="false" />
                                    Não
                    </div>
                    <div>
                        <label className="input-field" htmlFor="owner">Nome da pessoa</label>
                        <input
                            className="validate"
                            id="owner"
                            type="text"
                            name="owner"
                            value={owner}
                            onChange={this.listener} />
                    </div>
                    <div>
                        <label htmlFor="init_date">Data de abertura</label>
                        <DateTimePicker
                            className="validate"
                            id="init_date"
                            type="datetime"
                            name="init_date"
                            value={init_date}
                            onChange={this.listener} />
                    </div>  
                    <div>
                        <label htmlFor="final_date">Data de fechamento</label>
                        <DateTimePicker
                            className="validate"
                            id="final_date"
                            type="datetime"
                            name="final_date"
                            value={final_date}
                            onChange={this.listener} />
                    </div>  
                </div>
                <button 
                    className="waves-effect waves-light blue darken-2 btn" 
                    onClick={this.submitFormulary} 
                    type="button">
                        Cadastrar
                </button>
            </form>
        );
    }
}