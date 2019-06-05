import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field, formValueSelector, change } from 'redux-form'

//Redux
import { connect } from 'react-redux'
import { serieActions } from '../../../redux-flow/_actions/serie.actions';
import { bindActionCreators } from 'redux'

//coreComponents
import { Select, TextField } from '../../../components/Fields'
import Actions from './actions';

//Materia UI
import { LinearProgress } from '@material-ui/core';
import { GridItem, GridContainer } from '../../../components/Grids';
import { Button } from 'semantic-ui-react';

class Serie extends Component {

    state = {
        enableService: false
    }

    componentWillMount() {
        this.props.fetchSeries()
    }

    handleSearchSerie = search => {
        this.props.fetchSeries(search)
    }

    handleBack = () => {
        this.props.dispatch(change('formExterno', 'serie', ''))
    }

    stateAction = () => this.props.selected ? false : true

    handleChangeService = () => {
        this.setState({ enableService: !this.state.enableService })
    }


    render() {
        const { series, isFetching } = this.props

        return (
            <form onSubmit={e => { e.preventDefault() }}>
                <div style={{ width: '100%' }}>
                    <GridContainer>
                        <GridItem md={this.stateAction() ? 12 : 11}>
                            <Field
                                name="serie"
                                component={Select}
                                label="Serie"
                                placeholder='Selecione a Serie/Licença'
                                options={series.map(item => ({ label: `${item.ControleFab} ➤ ${item.DescrProd} ➤ ${item.Controle} `, value: item.Controle }))}
                                onKeyDown={e => this.handleSearchSerie(e)}
                            />
                            {isFetching &&
                                <LinearProgress />
                            }
                        </GridItem>
                        {!this.stateAction() &&
                            <GridItem md={1}>
                                <Button onClick={this.handleChangeService} circular icon='settings' type='button' />
                            </GridItem>
                        }
                        {this.state.enableService &&
                            <GridContainer spacing={16}>
                                <GridItem md={3} sm={3} xs={3}>
                                    <Field
                                        name="processoRelacionado"
                                        component={TextField}
                                        label="Ocorrência Relacionada"
                                        type='number'
                                        fullWidth
                                    />

                                </GridItem>
                                <GridItem md={3} sm={3} xs={3}>
                                    <Field
                                        name="ocorTerceiro"
                                        component={TextField}
                                        label="Ocorrência de terceiros"
                                        type='number'
                                        fullWidth
                                    />
                                </GridItem>
                            </GridContainer>
                        }

                        <Actions disabled={this.stateAction()} handleBack={this.handleBack} />
                    </GridContainer>
                </div>
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