import React from 'react'

// @material-ui/core
import { TextField, Typography, Divider } from '@material-ui/core'

// Core components
import { GridItem, GridContainer } from '../../../../components/Grids'

export default ({ task: { ClienteAt, Contato, Telefone, Email, } }) => {

    return (
        <GridContainer spacing={16}>
            <GridItem xs={12} sm={12} md={12}>
                <Typography variant="h5" noWrap>
                    Informações do Solicitante
            </Typography>
                <Divider />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <TextField
                    id="Clienteat"
                    label="Cliente Atendido"
                    value={ClienteAt}
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
                <TextField
                    id="Contato"
                    label="Nome do Contato"
                    value={Contato}
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
                <TextField
                    id="Telefone"
                    label="Telefone"
                    value={Telefone}
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </GridItem><GridItem xs={12} sm={4} md={4}>
                <TextField
                    id="Email"
                    label="E-mail"
                    value={Email}
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </GridItem>

        </GridContainer>
    )
}