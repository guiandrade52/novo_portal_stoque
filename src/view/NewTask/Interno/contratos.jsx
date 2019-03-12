import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field, formValueSelector } from 'redux-form'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { contratoActions } from '../../../redux-flow/_actions';

//Core Components
import { Select } from '../../../components/Fields'
import Actions from './actions';

class Contratos extends Component {
  componentWillMount() {
    this.props.fetchContratos()
  }

  handleSearchContrato = value => {
    this.props.fetchContratos(value)
  }

  stateAction = () => this.props.selected ? false : true

  render() {
    const { contratos } = this.props
    return (
      <form>
        <Field
          name="contrato"
          component={Select}
          label="Contrato"
          placeholder='Selecionar um contrato'
          onKeyDown={e => this.handleSearchContrato(e.target.value)}
          options={contratos.map(item => ({ label: `${item.CodContrato} - ${item.Nome}`, value: item.CodContrato }))}
        />
        <Actions disabled={this.stateAction()} />
      </form>
    )
  }
}

Contratos = reduxForm({
  form: 'formInterno',
  destroyOnUnmount: false
})(Contratos)

const selector = formValueSelector('formInterno')

const mapStateToProps = state => ({
  contratos: state.repository.contratos,
  selected: selector(state, 'contrato')
})

const mapDispatchToProps = dispatch => bindActionCreators(contratoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Contratos)