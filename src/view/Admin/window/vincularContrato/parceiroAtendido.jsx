import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field, formValueSelector, change } from 'redux-form'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

//Material UI
import { LinearProgress } from '@material-ui/core';

//Core Components
import { Select } from '../../../../components/Fields'
import Actions from './actions';
import { parceirosActions } from '../../../../redux-flow/_actions/parceiros.actions';

class ParceiroAtendido extends Component {

    componentWillMount() {
        const { fetchParceiroPContrato, contrato } = this.props
        fetchParceiroPContrato(contrato.value)
    }

    handleBack = () => this.props.dispatch(change('formVincularContrato', 'parceiroAt', ''))

    stateAction = () => this.props.selected ? false : true

    render() {
        const { usuarios, isFetching } = this.props
        return (
            <form>
                <Field
                    name="parceiroAt"
                    component={Select}
                    label="Parceiros atendidos"
                    placeholder='Selecionar um parceiro'
                    options={usuarios.map(item => ({ label: `${item.CodParc} ➤ ${item.Nome}`, value: item.CodParc }))}
                    onKeyDown={() => {}}
                    isMulti
                />
                {isFetching &&
                    <LinearProgress />
                }
                <Actions disabled={this.stateAction()} handleBack={this.handleBack} />
            </form>
        )
    }
}

ParceiroAtendido = reduxForm({
    form: 'formVincularContrato',
    destroyOnUnmount: false
})(ParceiroAtendido)

const selector = formValueSelector('formVincularContrato')

const mapStateToProps = state => ({
    selected: selector(state, 'parceiroAt'),
    contrato: selector(state, 'contrato'),
    usuarios: state.repository.parceiroAt,
    isFetching: state.repository.isFetching,
})

const mapDispatchToProps = dispatch => bindActionCreators(parceirosActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ParceiroAtendido)