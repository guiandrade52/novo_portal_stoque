import React, { Component } from 'react'

import axios from 'axios';

// @material-ui/core
import { TextField, Typography, Divider } from '@material-ui/core'

import imgError from '../../../../assets/img/404.jpg'

// Core components
import { GridItem, GridContainer } from '../../../../components/Grids'
import { Card } from '../../../../components/Cards'
import { appConfig } from '../../../../appConfig';
import { Message } from 'semantic-ui-react';


class Ocorrencia extends Component {

    state = {
        loading: true,
        error: false,
        button: true,
        tipo: ''
    }

    componentWillReceiveProps() {
        this.setState({
            loading: true,
            error: false
        })
    }

    render() {
        const { task, readOnly } = this.props
        return (
            < GridContainer spacing={16} >
                <GridItem xs={12} sm={12} md={12}>
                    <Typography variant="h5" noWrap>
                        Informações da Ocorrência
                    </Typography>
                    <Divider />
                </GridItem>
                <GridItem xs={12} sm={4} md={2}>
                    <TextField
                        id="executionId"
                        label="N° Ocorrência"
                        value={task.ExecutionId}
                        InputProps={{
                            readOnly: readOnly,
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={8} md={6}>
                    <TextField
                        id="situacao"
                        label="Situação da Ocorrência"
                        value={task.Situacao}
                        fullWidth
                        InputProps={{
                            readOnly: readOnly,
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                    <TextField
                        id="origem"
                        label="Origem da Ocorrência"
                        value={task.Origem}
                        fullWidth
                        InputProps={{
                            readOnly: readOnly,
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                    <TextField
                        id="datacr"
                        label="Data de Criação"
                        value={task.DataCr}
                        fullWidth
                        InputProps={{
                            readOnly: readOnly,
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                    <TextField
                        id="datatr"
                        label="Data Prevista de Atendimento (TR)"
                        value={task.DataTr}
                        fullWidth
                        InputProps={{
                            readOnly: readOnly,
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                    <TextField
                        id="datats"
                        label="Data Prevista de Solução (TS)"
                        value={task.DataTs}
                        fullWidth
                        InputProps={{
                            readOnly: readOnly,
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                    <TextField
                        id="serie"
                        label="Série/Licença"
                        value={task.Serie}
                        fullWidth
                        InputProps={{
                            readOnly: readOnly,
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                    <TextField
                        id="responsavel"
                        label="Atendente Responsável"
                        value={task.Responsavel}
                        fullWidth
                        InputProps={{
                            readOnly: readOnly,
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                    <TextField
                        id="userportal"
                        label="Usuário Portal"
                        value={task.UserPortal}
                        fullWidth
                        InputProps={{
                            readOnly: readOnly,
                        }}
                    />
                </GridItem>
                {task.Solucao &&
                    < GridItem xs={12} sm={12} md={12}>
                        <Message
                            success
                            header='Solução aplicada:'
                            content={task.Solucao.SolucaoAplicada}
                        />
                    </GridItem>

                }
                {
                    task.Anexos.length > 0 &&
                    <GridItem xs={12} sm={12} md={12}>
                        <Typography variant="h5" noWrap>
                            Anexo(s)
                        </Typography>
                        <Divider />
                        <GridContainer direction="row" justify="flex-start" alignItems="center" spacing={8} style={{ paddingTop: 15 }}>
                            {
                                task.Anexos.map((item, key) => {
                                    if (!this.state.error && this.state.loading) {
                                        axios.get(`${appConfig.URL_BASE}/Task/Anexo?chave=${item.Chave}&tipo=${item.Tipo}`)
                                            .then(() => {
                                                this.setState({ loading: false, tipo: item.Tipo })
                                            })
                                            .catch(() => {
                                                this.setState({ loading: false, error: true, button: false })
                                            })
                                    }
                                    return (
                                        <GridItem key={key} xs={12} sm={4} md={4}>
                                            <Card
                                                title={item.Nome}
                                                subTitle={item.DataCadastro}
                                                url={this.state.error ? imgError : `${appConfig.URL_BASE}/Temp/Anexos/${item.Chave}.${item.Tipo}`}
                                                loading={this.state.loading}
                                                error={this.state.error}
                                                tipo={this.state.tipo}
                                                button={this.state.button}
                                            />
                                        </GridItem>
                                    )
                                })
                            }
                        </GridContainer>
                    </GridItem>
                }
            </GridContainer >
        )
    }
}

export default Ocorrencia