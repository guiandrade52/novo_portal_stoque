import React from 'react';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { loginActions } from '../../redux-flow/_actions';
import WindowPass from './windowPass';
import { GridContainer, GridItem } from '../../components/Grids';


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const styles = {
    expired: {
        marginTop: '10%'
    }
}

let RestPassword = ({ classes, usuario, open, resetPassword }) =>
    <Dialog fullScreen={usuario.AltPassword === 'S' ? true : false} open={open} TransitionComponent={Transition}>
        <div className={usuario.AltPassword === 'S' ? classes.expired : ''}>
            <GridContainer justify='center'>
                {usuario.AltPassword === 'S' &&
                    <GridItem md={12}>
                        <Typography align='center' variant='h6'>
                            Sua senha deve ser alterada por questões de segurança.
                    </Typography>
                        <br />
                    </GridItem>
                }
                <GridItem >
                    <WindowPass />
                </GridItem>
            </GridContainer>
        </div>
    </Dialog>


const mapStateToProps = state => ({
    usuario: state.usuario.dados,
    open: state.login.passExpired,
})

const mapDispatchToProps = dispatch => bindActionCreators(loginActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RestPassword))
