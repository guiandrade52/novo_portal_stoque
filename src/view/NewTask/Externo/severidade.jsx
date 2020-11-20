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

class Severidade extends Component {
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
        const { isFetching } = this.props

        const Severidade = [
            {id: "B", label: "Severidade 3 - TS: 32Hs"},
            {id: "N", label: "Severidade 2 - TS: 16Hs"},
            {id: "A", label: "Severidade 1 - TS:  8Hs"},
            {id: "M", label: "Severidade 4 - TS: 24Hs"},
        ]  

        return (
            <form onSubmit={e => { e.preventDefault() }}>
                <Field
                    name="severidade"
                    component={Select}
                    label="Severidade"
                    placeholder='Selecione a Severidade'
                    options={Severidade.map(item => ({ label: `${item.label}`, value: item.id }))}
                    onKeyDown={() => { }}
                />

                {isFetching &&
                    <LinearProgress />
                }
                <Actions disabled={this.stateAction()} handleBack={this.handleBack} />
            </form>
        )
    }
}

Severidade = reduxForm({
    form: 'formExterno',
    destroyOnUnmount: false
})(Severidade)

const selector = formValueSelector('formExterno')

const mapStateToProps = state => ({
    serie: selector(state, 'serie'),
    contatos: state.repository.contatos,
    isFetching: state.repository.isFetching,
    selected: selector(state, 'contato')
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...contatoActions, ...serieActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Severidade)