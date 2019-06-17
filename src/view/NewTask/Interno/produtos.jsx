import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field, change, formValueSelector } from 'redux-form'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { produtosActions } from '../../../redux-flow/_actions/produto.actions';

//CoreComponents
import { Select } from '../../../components/Fields';
import Actions from './actions';
import { GridContainer, GridItem } from '../../../components/Grids';
import { Button } from 'semantic-ui-react';
import { servicoActions } from '../../../redux-flow/_actions';


class Produto extends Component {

    state = {
        enableService: false
    }

    handleChangeService = () => {
        this.props.fetchServicoPContrato(this.props.contrato.value)
        this.setState({ enableService: !this.state.enableService })
    }

    componentWillMount() {
        this.props.fetchProdutos(this.props.grupoProduto.value, this.props.contrato.value)
    }

    handleBack = () => {
        this.props.dispatch(change('formInterno', 'produto', null))
    }

    stateAction = () => this.props.selected ? false : true

    handleClearService = () => {
        this.props.dispatch(change('formInterno', 'servico', null))
        this.setState({ enableService: false })
    }

    render() {
        const { produtos, servicos, servico } = this.props
        return (
            <form>
                <div style={{ width: '100%' }}>
                    <GridContainer>
                        <GridItem md={this.stateAction() ? 12 : 11}>
                            <Field
                                name="produto"
                                component={Select}
                                label="Produto"
                                placeholder='Selecione o Produto'
                                options={produtos.map(item => ({ label: `${item.DescProd}`, value: item.CodProd }))}
                                onKeyDown={() => { }}
                            />
                        </GridItem>
                        {!this.stateAction() &&
                            <GridItem md={1}>
                                <Button onClick={this.handleChangeService} circular icon='settings' type='button' />
                                {servico && <Button onClick={this.handleClearService} circular icon='times' type='button' color='red' />}
                            </GridItem>
                        }
                        {this.state.enableService &&
                            <GridItem md={12}>
                                <Field
                                    name="servico"
                                    component={Select}
                                    label="Serviço"
                                    placeholder='Selecione o Serviço'
                                    options={servicos.map(item => ({ label: `${item.CodServico} ➤ ${item.Nome}`, value: item.CodServico }))}
                                    onKeyDown={() => { }}
                                />
                            </GridItem>
                        }
                        <Actions disabled={this.stateAction()} handleBack={this.handleBack} />
                    </GridContainer>
                </div>
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
    servicos: state.repository.servicos,
    servico: selector(state, 'servico'),
    contrato: selector(state, 'contrato'),
    grupoProduto: selector(state, 'grupoProduto'),
    selected: selector(state, 'produto')
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...produtosActions, ...servicoActions }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Produto)