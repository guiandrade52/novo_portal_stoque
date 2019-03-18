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
import {NovoColaborador} from './novoColaborador';


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
            <Grow>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <div style={{ marginBottom: 10 }}>
                            <Grow>
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
                            </Grow>
                        </div>
                    </GridItem>
                    {tab === 'formularios' &&
                        < GridItem >
                            <MediaCard
                                title='Novo Colaborador'
                                icon={options}
                                onClick={() => this.handleTab('Novo Colaborador')}
                            />
                        </GridItem>
                    }
                    {tab === 'Novo Colaborador' &&
                        <NovoColaborador onSubmit={postNewColaborador} />
                    }


                </GridContainer>
            </Grow>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(novoColaboradorActions, dispatch)

export default connect(null, mapDispatchToProps)(Formularios)