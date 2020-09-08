import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field, formValueSelector, change } from 'redux-form'

//Redux
import { connect } from 'react-redux'
import { serieActions } from '../../../redux-flow/_actions/serie.actions';
import { bindActionCreators } from 'redux'

//coreComponents
import { Select } from '../../../components/Fields'
import Actions from './actions';

//Materia UI
import { LinearProgress } from '@material-ui/core';
import { stepActions } from '../../../redux-flow/_actions';

class Serie extends Component {

    componentWillMount() {
        this.props.fetchSeriesSteppInterno(this.props.contrato.value, this.props.produto.value, this.props.grupoProduto.value)
    }

    handleBack = () => {
        this.props.dispatch(change('formInterno', 'serie', ''))
    }

    stateAction = () => this.props.selected ? false : true

    render() {
        const { series, isFetching } = this.props
        return (
            <form onSubmit={e => { e.preventDefault() }}>
                <Field
                    name="serie"
                    component={Select}
                    label="Serie"
                    placeholder='Selecione a Serie/Licença'
                    options={series.map(item => ({ label: `${item.ControleFab} ➤ ${item.DescrProd} ➤ ${item.Controle}`, value: item.Controle }))}
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

Serie = reduxForm({
    form: 'formInterno',
    destroyOnUnmount: false
})(Serie)

const selector = formValueSelector('formInterno')

const mapStateToProps = state => ({
    series: state.repository.series,
    isFetching: state.repository.isFetching,
    selected: selector(state, 'serie'),
    contrato: selector(state, 'contrato'),
    produto: selector(state, 'produto'),
    grupoProduto: selector(state, 'grupoProduto'),
    activeStep: state.step.active
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...serieActions, ...stepActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Serie)