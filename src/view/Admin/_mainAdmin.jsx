import React, { Component, Fragment } from 'react'
import { Grow } from '../../components/Transitions/Grow';
import { GridItem } from '../../components/Grids';
import { Breadcrumb } from 'semantic-ui-react';
import DashAdmin from './window/dash';
import { Slide } from '@material-ui/core';
import { VincularContrato } from './window/vincularContrato';

class Admin extends Component {
    INITIAL_STATE = {
        dash: true,
        contrato: false,
        usuario: false,
        serie: false
    }

    state = {
        ...this.INITIAL_STATE,
        breadCroumbOptions: [
            { label: 'Vincular Contrato', nameIcon: 'sync', color: 'rgba(70, 173, 0, 0.62)', window: 'contrato' },
            { label: 'Clonar Usuário', nameIcon: 'clone', color: 'rgba(106, 209, 236, 0.62)', window: 'usuario' },
            { label: 'Verificar Série', nameIcon: 'search', color: 'rgba(255, 202, 29, 0.62)', window: 'serie' }
        ],
        breadcrumb: ''
    }

    handleWindow = (window, breadcrumb) => {
        window === 'dash' ? this.setState({ ...this.INITIAL_STATE, breadcrumb }) : this.setState({ dash: false, [window]: true, breadcrumb })
    }



    render() {
        const { dash, contrato, breadCroumbOptions, breadcrumb } = this.state
        return (
            <Grow>
                <Fragment>
                    <GridItem xs={12} sm={12} md={12}>
                        <div style={{ marginBottom: 10 }}>
                            <Grow>
                                <Breadcrumb>
                                    {breadcrumb &&
                                        <Fragment>
                                            <Breadcrumb.Section link onClick={() => this.handleWindow('dash')} >Dash</Breadcrumb.Section>
                                            <Breadcrumb.Divider icon='right angle' />
                                            <Breadcrumb.Section active >{breadcrumb}</Breadcrumb.Section>
                                        </Fragment>
                                    }
                                </Breadcrumb>
                            </Grow>
                        </div>
                    </GridItem>
                    <Slide direction="left" in={dash} mountOnEnter unmountOnExit style={{ transitionDelay: dash ? '400ms' : '0ms' }}>
                        <DashAdmin handleWindow={this.handleWindow} options={breadCroumbOptions} />
                    </Slide>
                    <Slide direction="left" in={contrato} mountOnEnter unmountOnExit style={{ transitionDelay: contrato ? '400ms' : '0ms' }}>
                        <VincularContrato />
                    </Slide>
                </Fragment>
            </Grow>
        )
    }
}

export default Admin