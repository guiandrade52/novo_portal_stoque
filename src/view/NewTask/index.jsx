import React, { Component } from 'react'

//CoreComponents
import { GridContainer, GridItem } from '../../components/Grids';
import { MediaCard } from '../../components/Cards';
import { Externo } from './Externo';
import { Interno } from './Interno';
import { Formularios } from './Formularios';
import { Grow } from '../../components/Transitions';




class Dash extends Component {

    state = {
        options: [
            { id: 1, label: 'Serviços internos', nameIcon: 'settings', color: 'rgba(39, 108, 191, 0.44)' },
            { id: 2, label: 'Tenho uma Série/Licença', nameIcon: 'handshake outline', color: '#C6C6C6' },
            { id: 3, label: 'Formulários', nameIcon: 'file alternate outline', color: 'rgba(6, 144, 136, 0.59)' }
        ],
        id: 0
    }

    handleSelected = id => {
        this.setState({
            id
        })
    }

    render() {
        const { options, id } = this.state
        return (
            <Grow>
                <GridContainer justify="center" spacing={24} >

                    {id === 0 &&
                        options.map(item => {
                            return (
                                <GridItem key={item.label}>
                                    <MediaCard
                                        title={item.label}
                                        icon={item}
                                        onClick={() => this.handleSelected(item.id)}
                                    />
                                </GridItem>
                            )
                        })
                    }
                    <GridItem xs={12} sm={12} md={12}>
                        {id === 1 && <Interno home={this.handleSelected} />}
                        {id === 2 && <Externo home={this.handleSelected} />}
                        {id === 3 && <Formularios home={this.handleSelected} />}
                    </GridItem>

                </GridContainer>
            </Grow>
        )
    }
}

export default Dash