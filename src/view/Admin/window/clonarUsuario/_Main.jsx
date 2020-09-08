import React, { Component, Fragment } from 'react'
import { Paper, Typography, Button, LinearProgress, Slide, Chip, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import { GridContainer, GridItem } from '../../../../components/Grids';
import { Divider, Icon } from 'semantic-ui-react';
//Redux-form
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { Select, Checkbox } from '../../../../components/Fields';
import { bindActionCreators } from 'redux';
import { usuarioPortalActions } from '../../../../redux-flow/_actions/usuarioPortal.actions';
import { adminActions } from '../../../../redux-flow/_actions/admin.actions';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom: 5,
        height: '100%'
    }
})


class ClonaUsuarios extends Component {

    componentWillMount() {
        this.props.fetchUsuariosPortal()
    }

    handleSubmit = (values) => {
        const usuarioBase = values.usuarioBase.value
        const usuariosReceptores = values.usuariosReceptores.map(item => item.value).toString()
        this.props.fetchCloneUsuario({ configuracao: values.configuracao ? true : false, usuarioBase, usuariosReceptores })
    }

    render() {
        const { classes, usuarios, fetchUsuariosPortal, usuarioBase, usuariosReceptores, handleSubmit, isFetching, listaContratoPUsuario, isFetchingContrato, contratos } = this.props
        const usuariosReducers = usuarioBase && usuarios.filter(item => item.IdUsuario !== usuarioBase.value)
        return (
            <GridContainer justify="center" alignItems="center">
                <GridItem xs={12} sm={12} md={12}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6' align='center'>
                            Clonar Usuário
                        </Typography>
                        <Divider />
                        <form onSubmit={handleSubmit(this.handleSubmit)}>
                            <GridContainer spacing={16} justify="center" alignItems="center">
                                <Typography variant='subtitle1' align='center'>
                                    De qual usuário iremos cópiar as configurações
                                </Typography>
                                <GridItem xs={12} sm={12} md={12}>
                                    <Field
                                        name="usuarioBase"
                                        component={Select}
                                        label="Usuário base"
                                        placeholder='Selecione o usuário a ser cópiado'
                                        options={usuarios.map(item => ({ label: `${item.IdUsuario} ➤ ${item.Nome}`, value: item.IdUsuario }))}
                                        onKeyDown={e => fetchUsuariosPortal(e)}
                                        onChange={e => listaContratoPUsuario(e)}
                                    />
                                </GridItem>
                                <Slide direction="left" in={usuarioBase ? true : false} mountOnEnter unmountOnExit >
                                    <GridItem xs={12} sm={12} md={12}>
                                        <Typography variant='subtitle1'>Abaixo está todos contratos cadastrados para o usuário</Typography>
                                        {isFetchingContrato && <LinearProgress />}
                                        {contratos &&
                                            contratos.map((item, key) => {
                                                return (
                                                    <Chip
                                                        key={key}
                                                        avatar={<Avatar>{item.Contrato}</Avatar>}
                                                        label={`${item.CodParc} - ${item.Nome}`}
                                                        style={{ margin: 5 }}
                                                    />
                                                )
                                            })
                                        }
                                    </GridItem>
                                </Slide>
                                {usuarioBase &&
                                    <Fragment>
                                        <Icon name='arrow alternate circle down outline' size='huge' color='teal' />
                                        <GridItem xs={12} sm={12} md={12}>
                                            <Typography variant='subtitle1' align='center'>
                                                Agora informe os usuários que receberam as configurações
                                            </Typography>
                                            <Field
                                                name="usuariosReceptores"
                                                component={Select}
                                                label="Usuários receptores"
                                                placeholder='Selecione o(s) usuário(s) que receberam as configurações'
                                                options={usuariosReducers.map(item => ({ label: `${item.IdUsuario} ➤ ${item.Nome}`, value: item.IdUsuario }))}
                                                onKeyDown={e => fetchUsuariosPortal(e)}
                                                isMulti
                                            />
                                        </GridItem>
                                        {usuariosReceptores && usuariosReceptores.length > 0 &&
                                            <Fragment>
                                                <Icon name='arrow alternate circle down outline' size='huge' color='teal' />
                                                <GridItem xs={12} sm={12} md={12}>
                                                    <Typography variant='subtitle1' align='center'>
                                                        Deseja manter os contratos previamente cadastrados?
                                                </Typography>
                                                    <Field
                                                        name="configuracao"
                                                        component={Checkbox}
                                                        label="Manter as configurações"
                                                    />
                                                    <Divider />
                                                    {!isFetching && <Button type='submit' variant='outlined'>Salvar</Button>}
                                                    {isFetching && <LinearProgress />}
                                                </GridItem>
                                            </Fragment>
                                        }
                                    </Fragment>
                                }
                            </GridContainer>
                        </form>
                    </Paper>
                </GridItem>
            </GridContainer>
        )
    }
}

ClonaUsuarios = reduxForm({
    form: 'formClonaUsuarios',
})(ClonaUsuarios)

const selector = formValueSelector('formClonaUsuarios')

const mapStateToProps = state => ({
    usuarios: state.repository.usuarioPortal,
    usuarioBase: selector(state, 'usuarioBase'),
    usuariosReceptores: selector(state, 'usuariosReceptores'),
    isFetching: state.repository.isFetching,
    contratos: state.admin.contratos,
    isFetchingContrato: state.admin.isFetching
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...usuarioPortalActions, ...adminActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ClonaUsuarios))