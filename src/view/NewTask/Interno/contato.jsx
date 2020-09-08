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
        const { fetchContatoComSerie, fetchSerieDetails, serie, contrato, fetchContatoSemSerie, fetchContratoDetails } = this.props
        if (serie && serie.value) {
            fetchContatoComSerie(serie.value)
            fetchSerieDetails(serie.value)
        }
        else {
            fetchContatoSemSerie(contrato.value, contrato.CodParc)
            fetchContratoDetails(contrato.value)
        }
    }

    stateAction = () => this.props.selected ? false : true

    handleBack = () => {
        this.props.dispatch(change('formInterno', 'contato', ''))
    }

    handleSearchContato = search => {
        const { contrato, fetchContatoSemSerie } = this.props
        fetchContatoSemSerie(contrato.value, contrato.CodParc, search)
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
                    options={contatos.map(item => ({ label: `${item.Nome}`, value: item.CodContato, nome: item.Nome, telefone: item.Telefone, email: item.Email }))}
                    onKeyDown={e => this.handleSearchContato(e)}
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
                <Actions disabled={this.stateAction()} handleBack={this.handleBack} noSerie={true} />
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
    isFetching: state.repository.isFetching,

})

const mapDispatchToProps = dispatch => bindActionCreators({ ...contatoActions, ...serieActions, ...contratoActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Contatos)