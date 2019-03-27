import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field, formValueSelector } from 'redux-form'

//Redux
import { connect } from 'react-redux'

//Material UI
import { Typography } from '@material-ui/core';

//Core Components
import Actions from './actions';
import { TextField, InputFile } from '../../../components/Fields';
class Descricao extends Component {

    stateAction = () => this.props.descricao && this.props.descricao.length >= 5 ? false : true

    render() {
        return (
            <form onSubmit={e => { e.preventDefault() }}>
                <Field
                    name="descricao"
                    component={TextField}
                    label="Descrição"
                    fullWidth
                    multiline
                />
                <br />
                <Typography variant='subtitle2'>
                    Caso desejar, anexe arquivos.
                </Typography>
                <InputFile />
                <Actions disabled={this.stateAction()} handleBack={() => { }} />
            </form>
        )
    }
}

Descricao = reduxForm({
    form: 'formExterno',
    destroyOnUnmount: false
})(Descricao)

const selector = formValueSelector('formExterno')

const mapStateToProps = state => ({
    descricao: selector(state, 'descricao')
})

export default connect(mapStateToProps)(Descricao)