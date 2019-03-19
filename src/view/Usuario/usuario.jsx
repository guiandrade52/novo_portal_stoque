import React from 'react';
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
import FormUsuario from './formUsuario';

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



    render() {
        const { classes, openDetails, closeDetailsUsuario, editUsuario, edit } = this.props;
        return (
            <div>
                <Dialog fullScreen open={openDetails} onClose={closeDetailsUsuario} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={closeDetailsUsuario} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={classes.flex}>
                                Meus dados
                            </Typography>
                            {edit &&
                                <Button color="inherit" onClick={editUsuario}>
                                    Cancelar
                                </Button>
                            }
                            <Button color="inherit" onClick={editUsuario}>
                                {edit ? 'Salvar' : 'Editar'}
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <FormUsuario />
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.usuario
})

const mapDispatchToProps = dispatch => bindActionCreators(usuarioActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UsuarioDetails))
