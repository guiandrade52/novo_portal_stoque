import React from 'react'
import { GridContainer, GridItem } from '../../../../components/Grids';
import { MediaCard } from '../../../../components/Cards';

const DashAdmin = ({ handleWindow, options }) => {
    return (
        <div style={{ position: 'absolute', width: '100%' }}>
            <GridContainer spacing={24} justify="center" alignItems="center" >
                {
                    options.map((item, key) => {
                        return (
                            <GridItem key={key}>
                                <MediaCard
                                    title={item.label}
                                    icon={item}
                                    onClick={() => handleWindow(item.window, item.label)}
                                />
                            </GridItem>
                        )
                    })
                }
            </GridContainer>
        </div>
    )
}

export default DashAdmin