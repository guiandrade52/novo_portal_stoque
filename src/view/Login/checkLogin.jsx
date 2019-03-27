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
import { bindActionCreators } from '../../../../../../../../Users/fagner.gomes/AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';
import { loginActions } from '../../redux-flow/_actions';

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
        'login',
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Campo obrigatório'
        }
    })
    return errors
}

let CheckLogin = ({ classes, handleSubmit, changeWindow, isFetching }) => {
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {!isFetching &&
                    <form onSubmit={handleSubmit}>
                        <GridContainer spacing={16}>
                            <GridItem xs={12} sm={12} md={12} >
                                <Typography variant='h6' align='center'>
                                    Redefinir a senha
                                </Typography>
                                <Divider />
                            </GridItem>
                            <Typography>
                                Qual seu login?
                            </Typography>
                            <GridItem xs={12} sm={12} md={12} >
                                < Field
                                    name="login"
                                    component={TextField}
                                    label="Login"
                                    placeholder='Me informe o Login'
                                    fullWidth
                                />
                            </GridItem>
                        </GridContainer>
                        <div align='right' className={classes.actions}>
                            <Button className={classes.buttons} onClick={() => changeWindow('home')}>Voltar</Button>
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

CheckLogin = reduxForm({
    form: 'formCheckLogin',
    validate
})(CheckLogin)

const mapStateToProps = state => ({ ...state.login })

const mapDispatchToPros = dispatch => bindActionCreators(loginActions, dispatch)

export default connect(mapStateToProps, mapDispatchToPros)(withStyles(styles)(CheckLogin))