import React, { Component } from 'react';
import PropTypes from 'prop-types';
//@material-ui/Styles
import { withStyles } from '@material-ui/core/styles'

// @material-ui/core
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import AttachFileIcon from '@material-ui/icons/AttachFile'
import BeenhereIcon from '@material-ui/icons/Beenhere'

//Redux
import { connect } from 'react-redux'

const styles = {
    typography: {
        fontSize: 11.5,
    },
    card: {
        marginBottom: 5
    },
    spanStatus: {
        padding: 7,
        float: 'right',
        margin: 5,
        borderRadius: 100
    },
    spanDate: {
        fontSize: 11,
        paddingLeft: 5
    },
    anexo: {
        fontSize: 15,
        float: 'right',
        margin: 5,
        color: '#666'
    },
    rat: {
        float: 'right',
        margin: 5,
        fontSize: 15,
        color: '#666'
    },
    cit: {
        float: 'right',
        margin: 5,
        fontSize: 15,
        color: '#a7dfdc'
    },
    cardSelected: {
        background: '#CCC'
    }

};

class TaskItem extends Component {

    handleColorStatus(idSituacao) {
        switch (idSituacao) {
            case 1:
                //Aguardando Classificação
                return '#ff9933'
            case 2:
                //Em Andamento
                return '#ffff00'
            case 3:
                //Aguardando Cliente
                return '#3333cc'
            case 4:
                //Aguardando Terceiros
                return '#7070db'
            case 5:
                //Cliente Cancelou Ocorrencia
                return '#ff0000'
            case 6:
                //Service Desk Cancelou a Ocorrencia
                return '#ff0066'
            case 7:
                //Central de Atendimento Cancelou Ocorrência
                return '#cc0099'
            case 8:
                //Concluida
                return '#33cc33'
            case 9:
                //Aguardando Peças
                return '#993333'
            case 11:
                //Solução Proposta
                return '#ff9966'
            case 12:
                //Cancelado - Aguarando Avaliação
                return '#ff5050'
            case 13:
                //Aguardando Atribuição
                return '#66ffff'
            case 14:
                //Reclassificar Ocorrência
                return '#cc6699'
            case 15:
                //Despachado
                return '#003300'
            case 16:
                //Conclusão Serviço
                return '#336600'
            case 17:
                //Ag. Pc. No Local
                return '#996600'
            case 18:
                //Concluida - Validação Negada
                return '#0066ff'
            case 19:
                //Concluida - Garantia Fab.
                return '#000066'
            case 20:
                //Concluida Solucionado Backup
                return '#339933'
            case 21:
                //Aguardando Atendimento
                return '#669999'
            default:
                return '#FFF'
        }
    }

    render() {
        const { classes, task, selected } = this.props

        return (
            <Card className={classes.card}>
                <CardActionArea className={selected && (selected.ExecutionId === task.ExecutionId) ? classes.cardSelected : ''} >
                    <CardContent>
                        <Typography className={classes.typography} noWrap >
                            <b>{task.ExecutionId}</b> - <i>{task.ClienteAt}</i>
                        </Typography>
                        <Typography className={classes.typography} component='i' noWrap >
                            {task.Produto}
                        </Typography>
                        <Typography className={classes.typography} component='i' noWrap >
                            {task.Serie}
                        </Typography>
                        <Typography className={classes.typography} component='i' noWrap >
                            {task.Servico}
                        </Typography>
                    </CardContent>
                    <Tooltip title={task.Situacao} placement="top">
                        <span className={classes.spanStatus} style={{ background: this.handleColorStatus(task.idSituacao) }}></span>
                    </Tooltip>
                    <span className={classes.spanDate}><i>{task.DataCr}</i></span>
                    {task.Rat.length > 0 &&
                        <Tooltip title='Rat' placement="top">
                            <BeenhereIcon className={classes.rat} />
                        </Tooltip>
                    }
                    {task.Cit !== null &&
                        < Tooltip title='Cit' placement="top">
                            <BeenhereIcon className={classes.cit} />
                        </Tooltip>
                    }
                    {task.Anexos.length > 0 &&
                        <Tooltip title='Anexo' placement="top">
                            <AttachFileIcon className={classes.anexo} />
                        </Tooltip>
                    }
                </CardActionArea>
            </Card >
        )
    }
}

TaskItem.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    selected: state.taskList.selected
})

export default connect(mapStateToProps)(withStyles(styles)(TaskItem))
