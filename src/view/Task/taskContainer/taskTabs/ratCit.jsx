import React, { Component, Fragment } from 'react'

// Core components
import { GridItem, GridContainer } from '../../../../components/Grids'
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

import { Card } from '../../../../components/Cards';
import axios from 'axios';
import { Message } from 'semantic-ui-react';
import imgError from '../../../../assets/img/404.jpg'
import { appConfig } from '../../../../appConfig';

class RatCit extends Component {

    state = {
        loaderRat: true,
        loaderCit: true,
        errorCit: false,
        buttonRat: true,
        buttonCit: true,
        ratErrors: [],
        tipo: 'pdf'
    }

    componentWillReceiveProps() {
        this.setState({
            loader: true,
            error: false
        })
    }

    getRat = async (ExecutionId, NumeroVisita) => {
        await axios.get(`${appConfig.URL_BASE}/api/Rat?executionId=${ExecutionId}&visita=${NumeroVisita}`)
            .then(resp => {
                if (resp.status === 206) {
                    this.setState({ loaderRat: false, ratErrors: resp.data })
                }
                else if (resp.status === 200)
                    this.setState({ loaderRat: false })
            })
            .catch(() => {
                this.setState({ loaderRat: false, buttonRat: false })
            })
    }

    getCit = async (ExecutionId) => {
        await axios.get(`${appConfig.URL_BASE}/api/Cit?executionId=${ExecutionId}`)
            .then(() => {
                this.setState({ loaderCit: false })
            })
            .catch(() => {
                this.setState({ loaderCit: false, errorCit: true, buttonCit: false })
            })
    }

    getUrl = (ExecutionId, NumeroVisita) =>
        this.state.ratErrors.includes(NumeroVisita)
            ? imgError
            : `${appConfig.URL_BASE}/Temp/RAT_${ExecutionId}_${NumeroVisita}.pdf`

    componentWillMount() {
        const { Rat, Cit } = this.props.task
        if (Rat.length > 0) {
            this.getRat(Rat[0].ExecutionId, Rat[0].NumeroVisita)
        }
        if (Cit !== '') {
            this.getCit(Cit.ExecutionId)
        }
    }

    render() {
        const { task } = this.props
        return (
            <Fragment>
                <GridContainer >
                    {this.state.ratErrors.length > 0 && <Message info content={`Tivemos problema para gerar a(s) visita(s) ${this.state.ratErrors}. Para mais informações entre em contato com suporte. `} />}
                    {
                        task.Rat.length > 0 &&
                        <GridItem xs={12} sm={12} md={12}>
                            <Typography variant='h5'>
                                RAT
                        </Typography>
                            <Divider />
                            <GridContainer spacing={16} direction="row" justify="flex-start" alignItems="stretch" style={{ marginTop: 10 }}>
                                {
                                    task.Rat.map((item, key) => {
                                        return (
                                            <GridItem key={key} xs={12} sm={4} md={4}>
                                                <Card
                                                    {...item}
                                                    url={this.getUrl(item.ExecutionId, item.NumeroVisita)}
                                                    loading={this.state.loaderRat}
                                                    tipo={this.state.tipo}
                                                    title={`Tarefa: ${item.ExecutionId}`}
                                                    subTitle={`${item.NumeroVisita}° Visita`}
                                                />
                                            </GridItem>

                                        )
                                    })
                                }
                            </GridContainer>
                        </GridItem>
                    }
                </GridContainer>
                <br />
                <GridContainer>
                    {
                        task.Cit.ExecutionId > 0 &&
                        <GridItem xs={12} sm={12} md={12}>
                            <Typography variant='h5'>
                                CIT
                        </Typography>
                            <Divider />
                            {

                            }
                            <GridContainer style={{ marginTop: 10 }}>
                                <GridItem xs={12} sm={4} md={4}>
                                    <Card
                                        url={`${appConfig.URL_BASE}/Temp/CIT_${task.Cit.ExecutionId}.pdf`}
                                        loader={this.state.loaderCit}
                                        error={this.state.errorCit}
                                        tipo={this.state.tipo}
                                        Nome={`Tarefa: ${task.Cit.ExecutionId}`}
                                        button={this.state.buttonCit}
                                    />
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                    }
                </GridContainer>
            </Fragment>
        )
    }
}

export default RatCit