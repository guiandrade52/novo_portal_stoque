import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field, change, formValueSelector } from 'redux-form'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { grupoProdutoActions } from '../../../redux-flow/_actions';

//CoreComponents
import { Select } from '../../../components/Fields'
import Actions from './actions';

class GrupoProduto extends Component {

    componentWillMount() {
        this.props.fetchGrupoProduto(this.props.contrato.value)
    }

    handleBack = () => this.props.dispatch(change('formInterno', 'grupoProduto', ''))

    stateAction = () => this.props.selected ? false : true

    render() {
        const { grupoProdutos } = this.props
        return (
            <form>
                <Field
                    name="grupoProduto"
                    component={Select}
                    label="Serviço"
                    placeholder='Selecione o Serviço'
                    options={grupoProdutos.map(item => ({ label: `${item.DescGrupo}`, value: item.CodGrupo }))}
                    onKeyDown={() => { }}
                />
                <Actions disabled={this.stateAction()} handleBack={this.handleBack} />
            </form>
        )
    }
}

GrupoProduto = reduxForm({
    form: 'formInterno',
    destroyOnUnmount: false
})(GrupoProduto)

const selector = formValueSelector('formInterno')

const mapStateToProps = state => ({
    grupoProdutos: state.repository.grupoProdutos,
    contrato: selector(state, 'contrato'),
    selected: selector(state, 'grupoProduto'),
})

const mapDispatchToProps = dispatch => bindActionCreators(grupoProdutoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GrupoProduto)