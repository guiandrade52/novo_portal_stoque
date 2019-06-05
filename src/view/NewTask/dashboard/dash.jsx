import React from 'react'
import { GridItem, GridContainer } from '../../../components/Grids';
import { MediaCard } from '../../../components/Cards';
import { Externo } from '../Externo';

const Dash = ({ clienteInterno, options, handleSelected }) => {
    return (
        <div style={{ position: 'absolute', width: '100%' }}>
            <GridContainer spacing={24} justify="center" alignItems="center" >
                {
                    clienteInterno === 'S'
                        ? options.map(item =>
                            <GridItem key={item.label}>
                                <MediaCard
                                    title={item.label}
                                    icon={item}
                                    onClick={() => handleSelected(item.id)}
                                />
                            </GridItem>
                        )
                        :
                        <Externo home={handleSelected} />
                }
            </GridContainer>
        </div>
    )
}

export default Dash