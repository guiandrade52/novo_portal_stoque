import React, { Component, Fragment } from 'react'

//ComponentsCore
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
import { SolicitacaoEquipamento } from './solicitacaoEquipamento';
import SolicitacaoWiFi from './solicitacaoWiFi/solicitacaoWiFi';
import { AcessosConvidados } from './AcessosConvidados';


class Formularios extends Component {
    state = {
        tab: 'formularios',
        options: [
            { id: 1, label: 'Solicitação de acessos', style: { nameIcon: 'clipboard check', color: '#633eb39e' } },
            { id: 2, label: 'Solicitação de equipamento', style: { nameIcon: 'tv', color: 'rgba(179, 157, 62, 0.62)' } },
            { id: 3, label: 'Solicitação de WI-FI', style: { nameIcon: 'wi-fi', color: 'rgba(0, 0, 0, 0.62)' } },
            { id: 3, label: 'Acessos Convidados/Terceiros', style: { nameIcon: 'address card', color: 'rgba(181, 174, 174, 0.62)' } }]
    }

    handleTab = value => {
        this.setState({ tab: value })
    }

    render() {
        const { home, postNewColaborador } = this.props
        const { tab, options } = this.state
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
                    <GridContainer justify='center' spacing={24}>
                        <Fragment>
                            {
                                options.map(item =>
                                    <GridItem key={item.id}>
                                        <MediaCard
                                            title={item.label}
                                            icon={item.style}
                                            onClick={() => this.handleTab(item.label)}
                                        />
                                    </GridItem>
                                )
                            }
                        </Fragment>
                    </GridContainer>
                </Slide>
                <Slide direction="left" in={tab === options[0].label} mountOnEnter unmountOnExit style={{ transitionDelay: tab === options[0].label ? '400ms' : '0ms' }}>
                    <NovoColaborador onSubmit={postNewColaborador} />
                </Slide>
                <Slide direction="left" in={tab === options[1].label} mountOnEnter unmountOnExit style={{ transitionDelay: tab === options[1].label ? '400ms' : '0ms' }}>
                    <SolicitacaoEquipamento onSubmit={postNewColaborador} />
                </Slide>
                <Slide direction="left" in={tab === options[2].label} mountOnEnter unmountOnExit style={{ transitionDelay: tab === options[2].label ? '400ms' : '0ms' }}>
                    <SolicitacaoWiFi onSubmit={postNewColaborador} />
                </Slide>
                <Slide direction="left" in={tab === options[3].label} mountOnEnter unmountOnExit style={{ transitionDelay: tab === options[3].label ? '400ms' : '0ms' }}>
                    <AcessosConvidados onSubmit={postNewColaborador} />
                </Slide>

            </GridContainer>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(novoColaboradorActions, dispatch)

export default connect(null, mapDispatchToProps)(Formularios)