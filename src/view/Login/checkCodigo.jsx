import React from 'react'

//Redux-form
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

// @material-ui-core/style
import { withStyles } from '@material-ui/core/styles'
import { Paper, Typography, Button, CircularProgress } from '@material-ui/core';

//Semantic UI
import { Divider } from 'semantic-ui-react';

//CoreComponents
import { GridContainer, GridItem } from '../../components/Grids';
import { TextField } from '../../components/Fields';
import { bindActionCreators } from 'redux';
import { loginActions } from '../../redux-flow/_actions';
import { cronometroActions } from '../../redux-flow/_actions/cronometro.actions';

const styles = theme => ({
    root: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginRight: '35%',
        marginLeft: '35%',
        marginTop: '10%'
    },
    actions: {
        marginTop: 10,
    },
    buttons: {
        margin: 10
    }
});


const validate = values => {
    const errors = {}
    const requiredFields = [
        'codigo',
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Campo obrigatório'
        }
    })
    return errors
}

let CheckCodigo = ({ classes, handleSubmit, changeWindow, display, email, failure_mail, stopCronometro, isFetching }) => {

    const handleChangeMail = () => {
        stopCronometro()
        failure_mail()
        changeWindow('checkLogin')
    }
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {!isFetching &&
                    <form onSubmit={handleSubmit}>
                        <GridContainer spacing={16}>
                            <GridItem xs={12} sm={12} md={12} >
                                <Typography variant='h6' align='center'>
                                    Código verificador
                                </Typography>
                                <Divider />
                            </GridItem>
                            <Typography align='center'>
                                Me informe o código enviado para o e-mail {email}
                            </Typography>
                            <GridItem xs={12} sm={12} md={12} >
                                <Typography align='center'>
                                    O código expira em {display}
                                </Typography>
                                < Field
                                    name="codigo"
                                    component={TextField}
                                    label="Código"
                                    placeholder='Código'
                                    fullWidth
                                />
                            </GridItem>
                        </GridContainer>
                        <div align='right' className={classes.actions}>
                            <Button style={{ float: 'left' }} className={classes.buttons} onClick={() => handleChangeMail()}>Voltar</Button>
                            <Button type='submit' className={classes.buttons} color='primary' variant='outlined' >Enviar</Button>
                        </div>
                    </form>
                }
                {isFetching &&
                    <CircularProgress size={100} />
                }
            </Paper>
        </div>
    )
}

CheckCodigo = reduxForm({
    form: 'formCheckCodigo',
    validate
})(CheckCodigo)

const mapStateToProps = state => ({
    ...state.login,
    display: state.cronometro.display
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...cronometroActions, ...loginActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CheckCodigo))