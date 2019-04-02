import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field, formValueSelector } from 'redux-form'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { usuarioPortalActions } from '../../../../redux-flow/_actions/usuarioPortal.actions';

//Material UI
import { LinearProgress, Chip, Avatar, Typography, Slide } from '@material-ui/core';

//Core Components
import { Select } from '../../../../components/Fields'
import Actions from './actions';
import { GridItem } from '../../../../components/Grids';
import { adminActions } from '../../../../redux-flow/_actions';


class UsuarioPortal extends Component {

    componentWillMount() {
        const { fetchUsuariosPortal, } = this.props
        fetchUsuariosPortal()
    }

    render() {
        const { usuarios, isFetching, listaContratoPUsuario, fetchUsuariosPortal, selected, contratos, deleteContrato, isFetchingContrato } = this.props
        return (
            <div>
                <form>
                    <Field
                        name="usuarioPortal"
                        component={Select}
                        label="Usuário Portal"
                        placeholder='Selecionar um Usuário'
                        options={usuarios.map(item => ({ label: `${item.Nome}`, value: item.IdUsuario }))}
                        onKeyDown={e => fetchUsuariosPortal(e.target.value)}
                        onChange={e => listaContratoPUsuario(e.value)}
                    />

                    <Slide direction="left" in={contratos && contratos.length ? true : false} mountOnEnter unmountOnExit >
                        <GridItem xs={12} sm={12} md={12}>
                            <Typography variant='subtitle1'>Abaixo está todos contratos cadastrados para o usuário a cima</Typography>
                            {isFetchingContrato && <LinearProgress />}
                            {contratos &&
                                contratos.map((item, key) => {
                                    return (
                                        <Chip
                                            key={key}
                                            avatar={<Avatar>{item.Contrato}</Avatar>}
                                            label={`${item.CodParc} - ${item.Nome}`}
                                            style={{ margin: 5 }}
                                            onDelete={() => deleteContrato({ idUsuario: item.IdUsuario, contrato: item.Contrato, codParc: item.CodParc })}
                                        />
                                    )
                                })
                            }
                        </GridItem>
                    </Slide>
                    {isFetching &&
                        <LinearProgress />
                    }
                    <Actions disabled={!selected} />
                </form>
            </div>
        )
    }
}

UsuarioPortal = reduxForm({
    form: 'formVincularContrato',
    destroyOnUnmount: false
})(UsuarioPortal)

const selector = formValueSelector('formVincularContrato')

const mapStateToProps = state => ({
    selected: selector(state, 'usuarioPortal'),
    usuarios: state.repository.usuarioPortal,
    isFetching: state.repository.isFetching,
    contratos: state.admin.contratos,
    isFetchingContrato: state.admin.isFetching
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...usuarioPortalActions, ...adminActions }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UsuarioPortal)