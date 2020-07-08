import validador from 'validator';

class FormValidator {

    constructor(validacoes){
        this.validacoes = validacoes;
    }

    valida(state){
        
        let validacao = this.valid();

        this.validacoes.forEach(regra => {

                if(!validacao[regra.campo].isInvalid){
                    const campoValor = state[regra.campo.toString()];
                    const args = regra.agrs || [];
                    const metodoValidacao = typeof regra.metodo === 'string' ?
                        validador[regra.metodo] : regra.metodo;

                    if(metodoValidacao(campoValor, ...args, state) !== regra.validoQuando){
                        validacao[regra.campo] = {
                            isInvalid: true,
                            mensagem: regra.mensagem
                        };
                        validacao.isValid = false;

                    }
                }
        });
    
        return validacao;

    }

    valid(){
        const validacao = {};

        this.validacoes.map(regra => {
            return validacao[regra.campo] = {isInvalid: false, mensagem:''}
        });
        return { isValid: true, ...validacao}
    }

}
export default FormValidator;