import React, { Component } from 'react'
import Actions from './actions'

import { connect } from 'react-redux'


class InternoSystem extends Component {

    componentWillMount() {
        //this.props.dispatch(fetchSerieProd(this.props.contrato, this.props.codGrupo, this.props.codProd))
    }

    render() {
        return (
            <div>
                <Actions handleBack={() => { }} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contrato: state.form.contrato.values.contrato.value,
    codGrupo: state.form.grupoProduto.values.grupoProduto.value,
    codProd: state.form.produto.values.produto.value,
})

export default connect(mapStateToProps)(InternoSystem) 