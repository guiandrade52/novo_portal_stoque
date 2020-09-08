import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { usuarioActions } from '../../redux-flow/_actions';
import FormUsuario from './informations/formUsuario';
import { submit } from 'redux-form'
import {  LinearProgress } from '@material-ui/core';

const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class UsuarioDetails extends React.Component {

    handleUpdate = (values) => {
        const usuario = {
            Nome: values.Nome,
            Telefone: values.Telefone,
            Email: values.Email,
            CodContato: values.CodContato,
            CodParc: values.CodParc
        }
        this.props.sendUpdateUsuario(usuario)
    }

    render() {
        const { classes, openDetails, closeDetailsUsuario, editUsuario, edit, submit, isFetch } = this.props;
        return (
            <div>
                <Dialog fullScreen open={openDetails} onClose={closeDetailsUsuario} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            {!isFetch &&
                                < IconButton color="inherit" onClick={closeDetailsUsuario} aria-label="Close">
                                    <CloseIcon />
                                </IconButton>
                            }
                            <Typography variant="h6" color="inherit" className={classes.flex}>
                                Meus dados
                            </Typography>
                            {!isFetch &&
                                <Fragment>
                                    <Button style={{ marginRight: 10 }} color="inherit" variant='outlined' onClick={edit ? editUsuario : closeDetailsUsuario}>
                                        {edit ? 'Cancelar' : 'Fechar'}
                                    </Button>

                                    <Button color="inherit" variant='outlined' onClick={edit ? () => submit('formUsuario') : editUsuario}>
                                        {edit ? 'Salvar' : 'Editar'}
                                    </Button>
                                </Fragment>
                            }
                        </Toolbar>
                        {isFetch &&
                            <LinearProgress />
                        }
                    </AppBar>

                    <FormUsuario onSubmit={this.handleUpdate} />
                </Dialog>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    ...state.usuario
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...usuarioActions, submit }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UsuarioDetails))
