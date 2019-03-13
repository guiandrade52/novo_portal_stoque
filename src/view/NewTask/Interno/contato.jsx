import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field, change, formValueSelector } from 'redux-form'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { contatoActions, contratoActions } from '../../../redux-flow/_actions';
import { serieActions } from '../../../redux-flow/_actions';

//Material UI
import { LinearProgress } from '@material-ui/core';

//Core Components
import { Select } from '../../../components/Fields'
import Actions from './actions';
import { Message } from 'semantic-ui-react';

class Contatos extends Component {

    componentWillMount() {
        const { fetchContatoComSerie, fetchSerieDetails, serie, contrato, fetchContatoSemSerie, contratos, fetchContratoDetails } = this.props
        if (serie && serie.value) {
            fetchContatoComSerie(serie.value)
            fetchSerieDetails(serie.value)
        }
        else {
            const parceiro = contratos.find(item => item.CodContrato === contrato.value)
            fetchContatoSemSerie(contrato.value, parceiro.CodParc)
            fetchContratoDetails(contrato.value)
        }
    }

    stateAction = () => this.props.selected ? false : true

    handleBack = () => {
        this.props.dispatch(change('formInterno', 'contato', ''))
    }

    handleSearchContato = search => {
        const { contratos, contrato, fetchContatoSemSerie } = this.props
        const parceiro = contratos.find(item => item.CodContrato === contrato.value)
        fetchContatoSemSerie(contrato.value, parceiro.CodParc, search)
    }

    render() {
        const { contatos, isFetching } = this.props
        return (
            <form onSubmit={e => { e.preventDefault() }}>
                < Field
                    name="contato"
                    component={Select}
                    label="Contato"
                    placeholder='Selecione o Contato'
                    options={
                        contatos
                            ? contatos.map(item => ({ label: `${item.Nome}`, value: item.CodContato }))
                            : undefined
                    }
                    onKeyDown={e => this.handleSearchContato(e.target.value)}
                />

                {isFetching &&
                    <LinearProgress />
                }

                {contatos.length === 0 && !isFetching &&
                    <Message
                        warning
                        header='Ops...'
                        content='Está série não possui nenhum contato cadastrado, entre em cotato com suporte e solicite o cadastro.'
                    />
                }
                <Actions disabled={this.stateAction()} handleBack={this.handleBack} />
            </form>
        )
    }
}

Contatos = reduxForm({
    form: 'formInterno',
    destroyOnUnmount: false
})(Contatos)

const selector = formValueSelector('formInterno')

const mapStateToProps = state => ({
    serie: selector(state, 'serie'),
    selected: selector(state, 'contato'),
    contrato: selector(state, 'contrato'),
    contatos: state.repository.contatos,
    contratos: state.repository.contratos,
    isFetching: state.repository.isFetching,

})

const mapDispatchToProps = dispatch => bindActionCreators({ ...contatoActions, ...serieActions, ...contratoActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Contatos)