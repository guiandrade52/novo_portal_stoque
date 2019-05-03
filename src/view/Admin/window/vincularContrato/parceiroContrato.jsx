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

class ParceiroContrato extends Component {

    componentWillMount() {
        const { fetchParceiroAb } = this.props
        fetchParceiroAb()
    }

    handleBack = () => this.props.dispatch(change('formVincularContrato', 'parceiroAb', ''))

    stateAction = () => this.props.selected ? false : true

    render() {
        const { parceiroAb, isFetching } = this.props
        return (
            <form>
                <Field
                    name="parceiroAb"
                    component={Select}
                    label="Parceiros abertura"
                    placeholder='Selecionar um parceiro'
                    options={parceiroAb.map(item => ({ label: `${item.CodParc} ➤ ${item.Nome}`, value: item.CodParc }))}
                    onKeyDown={e => this.props.fetchParceiroAb(e)}
                />
                {isFetching &&
                    <LinearProgress />
                }
                <Actions disabled={this.stateAction()} handleBack={this.handleBack} />
            </form>
        )
    }
}

ParceiroContrato = reduxForm({
    form: 'formVincularContrato',
    destroyOnUnmount: false
})(ParceiroContrato)

const selector = formValueSelector('formVincularContrato')

const mapStateToProps = state => ({
    selected: selector(state, 'parceiroAb'),
    parceiroAb: state.repository.parceiroAb,
    isFetching: state.repository.isFetching,
})

const mapDispatchToProps = dispatch => bindActionCreators(parceirosActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ParceiroContrato)