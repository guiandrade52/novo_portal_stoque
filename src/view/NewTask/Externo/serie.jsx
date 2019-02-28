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

class Serie extends Component {

    componentWillMount() {
        this.props.fetchSeries()
    }

    handleSearchSerie = search => {
        if (search % 2 !== 0)
            this.props.fetchSeries(search)
    }

    handleBack = () => {
        debugger
        this.props.dispatch(change('formExterno', 'serie', ''))
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
                    options={
                        series
                            ? series.map(item => ({ label: `${item.Controle} - ${item.DescrProd}`, value: item.Controle }))
                            : undefined}
                    onKeyDown={e => this.handleSearchSerie(e.target.value)}
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
    form: 'formExterno',
    destroyOnUnmount: false
})(Serie)

const selector = formValueSelector('formExterno')

const mapStateToProps = state => ({
    series: state.repository.series,
    isFetching: state.repository.isFetching,
    selected: selector(state, 'serie')
})

const mapDispatchToProps = dispatch => bindActionCreators(serieActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Serie)