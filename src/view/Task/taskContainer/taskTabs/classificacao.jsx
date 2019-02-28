import React from 'react'

// @material-ui/core
import { TextField, Typography, Divider } from '@material-ui/core'

// Core components
import { GridItem, GridContainer } from '../../../../components/Grids'

export default ({ task: { Classificacao, TipoOcorrencia, GrupoServico, Servico, Descricao } }) => (
    <GridContainer spacing={16}>
        <GridItem xs={12} sm={12} md={12}>
            <Typography variant="h5">
                Classificação da Ocorrência
                        </Typography>
            <Divider />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
            <TextField
                id="Classificacao"
                label="Classificação"
                value={Classificacao}
                fullWidth
                InputProps={{
                    readOnly: true,
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
            <TextField
                id="TipoOcorrencia"
                label="Tipo de Ocorrência"
                value={TipoOcorrencia}
                fullWidth
                InputProps={{
                    readOnly: true,
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
            <TextField
                id="GrupoServico"
                label="Grupo de Serviço"
                value={GrupoServico}
                fullWidth
                InputProps={{
                    readOnly: true,
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
            <TextField
                id="Servico"
                label="Serviço"
                value={Servico}
                fullWidth
                InputProps={{
                    readOnly: true,
                }}
            />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
            <TextField
                id="Descricao"
                label="Descrição"
                value={Descricao}
                multiline
                rowsMax="5"
                fullWidth
                InputProps={{
                    readOnly: true,
                }}
            />
        </GridItem>
    </GridContainer>
)