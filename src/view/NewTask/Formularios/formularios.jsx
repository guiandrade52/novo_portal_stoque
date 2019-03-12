import React from 'react'

//ComponentsCore
import { Grow } from '../../../components/Transitions';
import { GridContainer, GridItem } from '../../../components/Grids';

//Material UI
import { Breadcrumb } from 'semantic-ui-react';


const Formularios = ({ home }) => {
    return (
        <Grow>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <div style={{ marginBottom: 10 }}>
                        <Grow>
                            <Breadcrumb>
                                <Breadcrumb.Section onClick={() => home(0)} link >Dash</Breadcrumb.Section>
                                <Breadcrumb.Divider icon='right angle' />
                                <Breadcrumb.Section active >Formulários</Breadcrumb.Section>
                            </Breadcrumb>
                        </Grow>
                    </div>
                </GridItem>
            </GridContainer>
        </Grow>
    )
}

export default Formularios