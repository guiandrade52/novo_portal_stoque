import React, { Component, Fragment } from 'react'

//Redux
import { connect } from 'react-redux'

//Redux-form
import { reduxForm, Field, reset } from 'redux-form'

// @material-ui-icons
import DoneIcon from '@material-ui/icons/Done'
import ClearIcon from '@material-ui/icons/Clear'
import CancelIcon from '@material-ui/icons/Cancel'

// @material-ui-core
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'


//Core Components
import { GridItem, GridContainer } from '../../../../components/Grids';
import { Field as TextField } from '../../../../components/Fields';
import Select from '../../../../components/Fields/Select';
import { bindActionCreators } from 'redux';
import { contratoActions } from '../../../../redux-flow/_actions/contrato.actions';
import Toastr from '../../../../components/Alerts';

const validate = values => {
    const errors = {}
    if (values.dateFinal !== "")
        if (values.dateInit > values.dateFinal)
            errors.dateInit = 'Data não pode ser MAIOR que data final'
    return errors
}


class Form extends Component {
    componentWillMount() {
        console.log(this.props)
        this.props.fetchContrato()
        //     this.props.LoadingContratos()
        //     this.props.LoadingSeries()
        //     this.props.LoadingServicos()
        //     this.props.LoadingContatos()
        //     this.props.LoadingUsuPrl()
        //     this.props.LoadingParceiroAb()
        //     this.props.LoadingParceiroAt()
    }

    resetForm = () => {
        this.props.handleClearFilter(this.props.compFilter.initial)
        this.props.handleOpenOrClose()
    }

    handleApplyFilter = () => {
        this.props.handleOpenOrClose()
        this.props.applyFilter(this.props.compFilter)
    }

    handleSearchContrato = e => {
        console.log(this.props)
        this.props.fetchContrato(e.target.value)
    }

    render() {
        const { classes, handleOpenOrClose, submitting, repository } = this.props
        return (
            <Fragment>
                <Toastr />
                <DialogTitle id="scroll-dialog-title">Filtro Avançado</DialogTitle>
                <DialogContent>
                    <form >
                        <GridContainer spacing={24}>
                            <GridItem xs={12} sm={4} md={3}>
                                <Field
                                    name="dateInit"
                                    component={TextField}
                                    label="Data Inicial"
                                    type='date'
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={3}>
                                <Field
                                    name="dateFinal"
                                    component={TextField}
                                    label="Data Final"
                                    type='date'
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={6}>
                                <Field
                                    name="contrato"
                                    component={Select}
                                    label="Contratos"
                                    isMulti
                                    placeholder='Selecione o(s) contrato(s)'
                                    options={repository.contratos.map(item => ({ label: `${item.CodContrato} - ${item.Nome}`, value: item.CodContrato }))}
                                    onKeyDown={this.handleSearchContrato}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={6}>
                                <Field
                                    name="serie"
                                    component={Select}
                                    label="Série"
                                    isMulti
                                    placeholder='Selecione a(s) série(s)'
                                    options={repository.series}
                                    handleSearchDB={() => console.log('teste')}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={6}>
                                <Field
                                    name="servico"
                                    component={Select}
                                    label="Serviço"
                                    isMulti
                                    placeholder='Selecione o(s) serviço(s)'
                                    options={repository.servicos}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={6}>
                                <Field
                                    name="contato"
                                    component={Select}
                                    label="Contato"
                                    isMulti
                                    placeholder='Selecione o(s) contato(s)'
                                    options={repository.contatos}
                                    handleSearchDB={this.props.LoadingContatos}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={6}>
                                <Field
                                    name="usuarioPortal"
                                    component={Select}
                                    label="Usuário Portal"
                                    isMulti
                                    placeholder='Selecione o(s) usuário(s) portal'
                                    options={repository.usuprl}
                                    handleSearchDB={this.props.LoadingUsuPrl}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={6}>
                                <Field
                                    name="parceiroAb"
                                    component={Select}
                                    label="Parceiro Abertura"
                                    isMulti
                                    placeholder='Selecione o(s) parceiro(s) abertura'
                                    options={repository.parceiroAb}
                                    handleSearchDB={this.props.LoadingParceiroAb}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={6}>
                                <Field
                                    name="parceiroAt"
                                    component={Select}
                                    label="Parceiro Atendido"
                                    isMulti
                                    placeholder='Selecione o(s) parceiro(s) atendido'
                                    options={repository.parceiroAt}
                                    handleSearchDB={this.props.LoadingParceiroAt}
                                />
                            </GridItem>
                        </GridContainer>

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOpenOrClose} className={classes.cancelButton}>
                        <CancelIcon />Cancelar
                    </Button>
                    <Button onClick={this.resetForm}>
                        <ClearIcon />Limpar
                    </Button>
                    <Button type='submit' form='searchForm' disabled={submitting} color='primary' onClick={() => this.handleApplyFilter()}>
                        <DoneIcon />Aplicar
                    </Button>

                </DialogActions>
            </Fragment>
        )
    }
}

Form = reduxForm({
    form: 'search',
    validate,
    destroyOnUnmount: false
})(Form)

const mapStateToProps = state => ({
    repository: state.repository
})

const mapDispatchToProps = dispatch => bindActionCreators(contratoActions, dispatch)
// handleClearFilter: initialValues => {
//     dispatch(filterActions.clearAllFilter(initialValues))
//     dispatch(reset('search'))
// },
// LoadingContratos: e => e !== undefined ? dispatch(fetchContrato(e.target.value)) : dispatch(fetchContrato('')),
// LoadingSeries: e => e !== undefined ? dispatch(fetchSeries(e.target.value)) : dispatch(fetchSeries('')),
// LoadingServicos: () => dispatch(getServicos()),
// LoadingContatos: e => e !== undefined ? dispatch(getContatos(e.target.value)) : dispatch(getContatos('')),
// LoadingUsuPrl: e => e !== undefined ? dispatch(getUsuPrl(e.target.value)) : dispatch(getUsuPrl('')),
// LoadingParceiroAb: e => e !== undefined ? dispatch(getParceiroAb(e.target.value)) : dispatch(getParceiroAb('')),
// LoadingParceiroAt: e => e !== undefined ? dispatch(getParceiroAt(e.target.value)) : dispatch(getParceiroAt('')),
// applyFilter: filter => dispatch(filterActions.applyFilter(filter))

Form = connect(mapStateToProps, mapDispatchToProps)(Form)

export default Form