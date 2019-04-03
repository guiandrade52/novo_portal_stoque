import React, { Component } from 'react'
import { Paper, Typography, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import { GridContainer, GridItem } from '../../../../components/Grids';
import { Divider } from 'semantic-ui-react';
//Redux-form
import { connect } from 'react-redux'
import { reduxForm, Field, } from 'redux-form'
import { Select } from '../../../../components/Fields';
import { bindActionCreators } from 'redux';
import { serieActions } from '../../../../redux-flow/_actions';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom: 5,
        height: '100%'
    }
})


class VerificarSerie extends Component {

    state = {
        selectedSerie: ''
    }

    componentWillMount() {
        this.props.fetchSerieParcCon()
    }

    handleChangeSelected = (selected) => {
        const { series } = this.props
        if (selected)
            this.setState({ selectedSerie: series.find(item => item.Serie === selected.value) })
        else
            this.setState({ selectedSerie: '' })
    }

    render() {
        const { classes, series, fetchSerieParcCon } = this.props
        const { selectedSerie } = this.state
        return (
            <GridContainer justify="center" alignItems="center">
                <GridItem xs={11} sm={11} md={11}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6' align='center'>
                            Verificar dados da série
                    </Typography>
                        <Divider />
                        <Typography>
                            Qual a série?
                    </Typography>
                        <form>
                            <Field
                                name="serie"
                                component={Select}
                                label="Serie"
                                placeholder='Selecione a série'
                                options={series.map(item => ({ label: `${item.Serie} - ${item.Produto}`, value: item.Serie }))}
                                onInputChange={e => fetchSerieParcCon(e)}
                                onChange={e => this.handleChangeSelected(e)}
                            />
                        </form>
                        {selectedSerie &&
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Contrato
                                        </TableCell>
                                        <TableCell>
                                            Parceiro Contrato
                                        </TableCell>
                                        <TableCell>
                                            Parceiro Atendido
                                        </TableCell>
                                        <TableCell>
                                            Status
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>{selectedSerie.Contrato}</TableCell>
                                        <TableCell>{`${selectedSerie.CodParcCon} - ${selectedSerie.NomeParcCon}`}</TableCell>
                                        <TableCell>{`${selectedSerie.CodParcAtendido} - ${selectedSerie.NomeParcAtendido}`}</TableCell>
                                        <TableCell>
                                            {                                                selectedSerie.Situacao === 'A' && 'Ativo'}
                                                {selectedSerie.Situacao === 'C' && 'Cancelado' }
                                                {selectedSerie.Situacao === 'S' && 'Suspenso'                                            }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        }
                    </Paper>
                </GridItem>
            </GridContainer>
        )
    }
}

VerificarSerie = reduxForm({
    form: 'formVerificarSerie',
})(VerificarSerie)

const mapStateToProps = state => ({
    series: state.repository.series
})

const mapDispatchToProps = dispatch => bindActionCreators(serieActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VerificarSerie))