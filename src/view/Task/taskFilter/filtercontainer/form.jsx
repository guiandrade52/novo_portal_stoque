import React, { Component, Fragment } from 'react'

//Redux
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux';
import { contratoActions, filterActions, taskListActions, serieActions, servicoActions, contatoActions } from '../../../../redux-flow/_actions';


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
import { TextField } from '../../../../components/Fields';
import Select from '../../../../components/Fields/Select';
// import Toastr from '../../../../components/Alerts';
import { usuarioPortalActions } from '../../../../redux-flow/_actions/usuarioPortal.actions';
import { parceirosActions } from '../../../../redux-flow/_actions/parceiros.actions';

const validate = values => {
    const errors = {}
    if (values.dateFinal !== "")
        if (values.dateInit > values.dateFinal)
            errors.dateInit = 'Data não pode ser MAIOR que data final'
    return errors
}


class Form extends Component {
    componentWillMount() {
        this.props.fetchContratos()
        this.props.fetchSeries()
        this.props.fetchServicos()
        this.props.fetchContatos()
        this.props.fetchUsuariosPortal()
        this.props.fetchParceiroAb()
        this.props.fetchParceiroAt()
    }

    resetForm = async () => {
        this.props.handleOpenOrClose()
        await this.props.resetFilter()
        this.props.fetchTasks(this.props.filter)
        this.props.reset()
    }

    handleApplyFilter = async () => {
        this.props.handleOpenOrClose()
        await this.props.applyFilter(this.props.valuesForm)
        this.props.fetchTasks(this.props.filter)
    }


    render() {
        const { classes, handleOpenOrClose, submitting, repository } = this.props
        return (
            <Fragment>
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
                                    onInputChange={e => this.props.fetchContratos(e)}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={6}>
                                <Field
                                    name="serie"
                                    component={Select}
                                    label="Série"
                                    isMulti
                                    placeholder='Selecione a(s) série(s)'
                                    options={repository.series.map(item => ({ label: `${item.Controle} - ${item.DescrProd}`, value: item.Controle }))}
                                    onInputChange={e => this.props.fetchSeries(e)}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={6}>
                                <Field
                                    name="servico"
                                    component={Select}
                                    label="Serviço"
                                    isMulti
                                    placeholder='Selecione o(s) serviço(s)'
                                    options={repository.servicos.map(item => ({ label: item.Nome, value: item.CodServico }))}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={6}>
                                <Field
                                    name="contato"
                                    component={Select}
                                    label="Contato"
                                    isMulti
                                    placeholder='Selecione o(s) contato(s)'
                                    options={repository.contatos.map(item => ({ label: item.Nome, value: item.CodContato }))}
                                    onInputChange={e => this.props.fetchContatos(e)}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={6}>
                                <Field
                                    name="usuarioPortal"
                                    component={Select}
                                    label="Usuário Portal"
                                    isMulti
                                    placeholder='Selecione o(s) usuário(s) portal'
                                    options={repository.usuarioPortal.map(item => ({ label: item.Nome, value: item.IdUsuario }))}
                                    onInputChange={e => this.props.fetchUsuariosPortal(e)}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={6}>
                                <Field
                                    name="parceiroAb"
                                    component={Select}
                                    label="Parceiro Abertura"
                                    isMulti
                                    placeholder='Selecione o(s) parceiro(s) abertura'
                                    options={repository.parceiroAb.map(item => ({ label: `${item.CodParc} - ${item.Nome}`, value: item.CodParc }))}
                                    onInputChange={e => this.props.fetchParceiroAb(e)}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={6}>
                                <Field
                                    name="parceiroAt"
                                    component={Select}
                                    label="Parceiro Atendido"
                                    isMulti
                                    placeholder='Selecione o(s) parceiro(s) atendido'
                                    options={repository.parceiroAt.map(item => ({ label: `${item.CodParc} - ${item.Nome}`, value: item.CodParc }))}
                                    onInputChange={e => this.props.fetchParceiroAt(e)}
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
    form: 'formFilter',
    validate,
    destroyOnUnmount: false
})(Form)

const selector = formValueSelector('formFilter')

const mapStateToProps = state => ({
    repository: state.repository,
    valuesForm: selector(state, 'contrato', 'serie', 'dateInit', 'dateFinal', 'contato', 'servico', 'usuarioPortal', 'parceiroAt', 'parceiroAb'),
    filter: state.filter
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...taskListActions,
    ...filterActions,
    ...contratoActions,
    ...serieActions,
    ...servicoActions,
    ...contatoActions,
    ...usuarioPortalActions,
    ...parceirosActions
}, dispatch)


Form = connect(mapStateToProps, mapDispatchToProps)(Form)

export default Form