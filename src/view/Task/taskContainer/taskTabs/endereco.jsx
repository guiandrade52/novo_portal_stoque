import React from 'react'

// @material-ui/core
import { TextField, Typography, Divider } from '@material-ui/core'

// Core components
import { GridItem, GridContainer } from '../../../../components/Grids'

export default ({ task: { Logradouro, Numero, Complemento, Bairro, Cep, Estado, Cidade, } }) => (
    <GridContainer spacing={16}>
        <GridItem xs={12} sm={12} md={12}>
            <Typography variant="h5">
                Endereço
                        </Typography>
            <Divider />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
            <TextField
                id="Logradouro"
                label="Logradouro"
                value={Logradouro}
                fullWidth
                InputProps={{
                    readOnly: true,
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={2} md={2}>
            <TextField
                id="Numero"
                label="Número"
                value={Numero}
                fullWidth
                InputProps={{
                    readOnly: true,
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
            <TextField
                id="Complemento"
                label="Complemento"
                value={Complemento}
                fullWidth
                InputProps={{
                    readOnly: true,
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
            <TextField
                id="Bairro"
                label="Bairro"
                value={Bairro}
                fullWidth
                InputProps={{
                    readOnly: true,
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={3} md={3}>
            <TextField
                id="Cep"
                label="Cep"
                value={Cep}
                fullWidth
                InputProps={{
                    readOnly: true,
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={2} md={2}>
            <TextField
                id="Estado"
                label="Estado"
                value={Estado}
                fullWidth
                InputProps={{
                    readOnly: true,
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={3} md={3}>
            <TextField
                id="Cidade"
                label="Cidade"
                value={Cidade}
                fullWidth
                InputProps={{
                    readOnly: true,
                }}
            />
        </GridItem>
    </GridContainer>
)