import React, { Component, Fragment } from 'react'

//Redux-form
import { reduxForm, Field, formValueSelector } from 'redux-form'

//Redux
import { connect } from 'react-redux'

//Material UI
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

//Semantic UI
import { Divider } from 'semantic-ui-react';

//Core Components
import { GridContainer, GridItem } from '../../../components/Grids';
import { TextField } from '../../../components/Fields';
import { newTaskActions } from '../../../redux-flow/_actions/newTask.actions';


const styles = theme => ({
    form: {
        marginTop: theme.spacing.unit
    },
    subHader: {
        color: '#7a7676'
    }
})

class Resumo extends Component {

    componentDidMount() {
        const { serie, serieDetails, contratosDetails, descricao, contato, contatos } = this.props
        const contatoData = contatos.find(item => item.CodContato === contato.value)
        const data = serie
            ? {
                produto: serieDetails.DescrProd,
                serie: serieDetails.Controle,
                cliente: serieDetails.Parceiro,
                contrato: serieDetails.Contrato,
                descrServico: serieDetails.DescrNat,
                contato: contatoData.Nome,
                telefone: contatoData.Telefone,
                email: contatoData.Email,
                endereco: serieDetails.Endereco,
                numero: serieDetails.Numero,
                complemento: serieDetails.Complemento,
                cep: serieDetails.Cep,
                bairro: serieDetails.Bairro,
                cidade: serieDetails.Cidade,
                descricao: descricao
            }
            : {
                produto: contratosDetails.DescrProd,
                serie: contratosDetails.Controle,
                cliente: contratosDetails.RazaoSocial,
                contrato: contratosDetails.Contrato,
                descrServico: contratosDetails.DescrNat,
                contato: contatoData.Nome,
                telefone: contatoData.Telefone,
                email: contatoData.Email,
                endereco: contratosDetails.Endereco,
                numero: contratosDetails.Numero,
                complemento: contratosDetails.Complemento,
                cep: contratosDetails.Cep,
                bairro: contratosDetails.Bairro,
                cidade: contratosDetails.Cidade,
                descricao: descricao
            }
        this.props.dispatch(newTaskActions.updateDataResumo(data))
    }

    stateAction = () => this.props.selected ? false : true

    render() {
        const { classes, serieDetails } = this.props
        return (
            <div>
                {serieDetails &&
                    <Fragment>
                        <Typography variant='h5' className={classes.subHader}>
                            Resumo da solicitação
                        </Typography>
                        <Divider />
                    </Fragment>
                }
                <form className={classes.form}>
                    <GridContainer spacing={16}>
                        {serieDetails &&
                            <Fragment>
                                <GridItem xs={12} sm={12} md={6}>
                                    <Field
                                        name="produto"
                                        component={TextField}
                                        label="Produto"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <Field
                                        name="serie"
                                        component={TextField}
                                        label="Série"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </GridItem>
                            </Fragment>
                        }
                        <GridItem xs={12} sm={12} md={12}>
                            <Typography variant='h6' className={classes.subHader}>
                                Informações do cliente
                            </Typography>
                            <Divider />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <Field
                                name="cliente"
                                component={TextField}
                                label="Cliente"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                            <Field
                                name="contrato"
                                component={TextField}
                                label="Contrato"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Field
                                name="descrServico"
                                component={TextField}
                                label="Descrição do Serviço"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <Field
                                name="contato"
                                component={TextField}
                                label="Contato Responsável"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                            <Field
                                name="telefone"
                                component={TextField}
                                label="Telefone"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Field
                                name="email"
                                component={TextField}
                                label="E-mail"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                            <Typography variant='h6' className={classes.subHader}>
                                Endereço do Equipamento
                            </Typography>
                            <Divider />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <Field
                                name="endereco"
                                component={TextField}
                                label="Endereço"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                            <Field
                                name="numero"
                                component={TextField}
                                label="Número"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Field
                                name="complement"
                                component={TextField}
                                label="Complemento"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Field
                                name="cep"
                                component={TextField}
                                label="CEP"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Field
                                name="bairro"
                                component={TextField}
                                label="Bairro"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Field
                                name="cidade"
                                component={TextField}
                                label="Cidade"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                            <Typography variant='h6' className={classes.subHader}>
                                Classificação da Ocorrência
                            </Typography>
                            <Divider />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                            <Field
                                name="descricao"
                                component={TextField}
                                label="Descrição"
                                fullWidth
                                multiline
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </GridItem>
                    </GridContainer>
                </form>
            </div>
        )
    }
}

Resumo = reduxForm({
    form: 'formResumo'
})(Resumo)

const selector = formValueSelector('formExterno')

const mapStateToProps = state => ({
    contatos: state.repository.contatos,
    contato: selector(state, 'contato'),
    serie: selector(state, 'serie'),
    descricao: selector(state, 'descricao'),
    serieDetails: state.repository.serieDetails,
    initialValues: state.newTask.data
})


export default connect(mapStateToProps)(withStyles(styles)(Resumo))