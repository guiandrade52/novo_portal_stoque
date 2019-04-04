import React, { Component, Fragment } from 'react'

//ComponentsCore
import { Grow } from '../../../components/Transitions';
import { GridContainer, GridItem } from '../../../components/Grids';

//Redux
import { novoColaboradorActions } from '../../../redux-flow/_actions/novoColaborador.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

//Material UI
import { Breadcrumb } from 'semantic-ui-react';
import { MediaCard } from '../../../components/Cards';
import { NovoColaborador } from './novoColaborador';
import { Slide } from '@material-ui/core';


class Formularios extends Component {
    state = {
        tab: 'formularios'
    }

    handleTab = value => {
        this.setState({ tab: value })
    }

    render() {
        const { home, postNewColaborador } = this.props
        const options = { id: 1, label: 'Serviços internos', nameIcon: 'user plus', color: '#633eb39e' };
        const { tab } = this.state
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <div style={{ marginBottom: 10 }}>
                        <Breadcrumb>
                            <Breadcrumb.Section onClick={() => home(0)} link >Dash</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right angle' />
                            <Breadcrumb.Section active={tab === 'formularios' ? true : false} onClick={() => this.handleTab('formularios')}>Formulários</Breadcrumb.Section>
                            {tab !== 'formularios' &&
                                <Fragment>
                                    <Breadcrumb.Divider icon='right angle' />
                                    <Breadcrumb.Section active >{tab}</Breadcrumb.Section>
                                </Fragment>
                            }
                        </Breadcrumb>
                    </div>
                </GridItem>
                <Slide direction="left" in={tab === 'formularios'} mountOnEnter unmountOnExit style={{ transitionDelay: tab === 'formularios' ? '400ms' : '0ms' }}>
                    < GridItem >
                        <MediaCard
                            title='Novo Colaborador'
                            icon={options}
                            onClick={() => this.handleTab('Novo Colaborador')}
                        />
                    </GridItem>
                </Slide>
                <Slide direction="left" in={tab === 'Novo Colaborador'} mountOnEnter unmountOnExit style={{ transitionDelay: tab === 'Novo Colaborador' ? '400ms' : '0ms' }}>
                    <NovoColaborador onSubmit={postNewColaborador} />
                </Slide>

            </GridContainer>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(novoColaboradorActions, dispatch)

export default connect(null, mapDispatchToProps)(Formularios)