import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field, formValueSelector, change } from 'redux-form'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { contratoActions } from '../../../../redux-flow/_actions';

//Core Components
import { Select } from '../../../../components/Fields'
import Actions from './actions';

class Contratos extends Component {

  componentWillMount() {
    this.props.fetchContratoPParceiro(this.props.parceiro.value)
  }

  stateAction = () => this.props.selected ? false : true

  handleBack = () => this.props.dispatch(change('formVincularContrato', 'contrato', ''))

  render() {
    const { contratos } = this.props
    return (
      <form>
        <Field
          name="contrato"
          component={Select}
          label="Contrato"
          placeholder='Selecione um contrato'
          options={contratos.map(item => ({ label: `${item.CodContrato} - ${item.Nome}`, value: item.CodContrato }))}
          onKeyDown={e => this.props.fetchContratoPParceiro(e)}
        />
        <Actions disabled={this.stateAction()} handleBack={this.handleBack} />
      </form>
    )
  }
}

Contratos = reduxForm({
  form: 'formVincularContrato',
  destroyOnUnmount: false
})(Contratos)

const selector = formValueSelector('formVincularContrato')

const mapStateToProps = state => ({
  selected: selector(state, 'contrato'),
  parceiro: selector(state, 'parceiroAb'),
  contratos: state.repository.contratos,
})

const mapDispatchToProps = dispatch => bindActionCreators(contratoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Contratos)