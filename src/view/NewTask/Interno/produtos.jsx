import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field, change, formValueSelector } from 'redux-form'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from '../../../../../../../../../Users/fagner.gomes/AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';
import { produtosActions } from '../../../redux-flow/_actions/produto.actions';

//CoreComponents
import { Select } from '../../../components/Fields';
import Actions from './actions';


class Produto extends Component {

    componentWillMount() {
        this.props.fetchProdutos(this.props.grupoProduto.value, this.props.contrato.value)
    }

    handleBack = () => {
        this.props.dispatch(change('formInterno', 'produto', ''))
    }

    stateAction = () => this.props.selected ? false : true

    render() {
        const { produtos } = this.props
        return (
            <form>
                <Field
                    name="produto"
                    component={Select}
                    label="Produto"
                    placeholder='Selecione o Produto'
                    options={produtos.map(item => ({ label: `${item.DescProd}`, value: item.CodProd }))}
                />
                <Actions disabled={this.stateAction()} handleBack={this.handleBack} />
            </form>
        )
    }
}

Produto = reduxForm({
    form: 'formInterno',
    destroyOnUnmount: false
})(Produto)

const selector = formValueSelector('formInterno')

const mapStateToProps = state => ({
    produtos: state.repository.produtos,
    contrato: selector(state, 'contrato'),
    grupoProduto: selector(state, 'grupoProduto'),
    selected: selector(state, 'produto')
})

const mapDispatchToProps = dispatch => bindActionCreators(produtosActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Produto)