import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field, change, formValueSelector } from 'redux-form'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { contatoActions } from '../../../redux-flow/_actions';
import { serieActions } from '../../../redux-flow/_actions';

//Material UI
import { LinearProgress } from '@material-ui/core';

//Core Components
import { Select } from '../../../components/Fields'
import Actions from './actions';
import { Message } from 'semantic-ui-react';

class Contatos extends Component {

    componentWillMount() {
        const { fetchContatoComSerie, fetchSerieDetails, serie: { value } } = this.props
        fetchContatoComSerie(value)
        fetchSerieDetails(value)
    }

    stateAction = () => this.props.selected ? false : true

    handleBack = () => {
        this.props.dispatch(change('formExterno', 'contato', ''))
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
                    options={contatos.map(item => ({ label: `${item.Nome}`, value: item.CodContato }))}
                    onKeyDown={() => { }}
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
    form: 'formExterno',
    destroyOnUnmount: false
})(Contatos)

const selector = formValueSelector('formExterno')

const mapStateToProps = state => ({
    serie: selector(state, 'serie'),
    contatos: state.repository.contatos,
    isFetching: state.repository.isFetching,
    selected: selector(state, 'contato')
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...contatoActions, ...serieActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Contatos)