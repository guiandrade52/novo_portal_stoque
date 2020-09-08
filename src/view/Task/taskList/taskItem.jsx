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
import { appConfig } from '../../../appConfig';

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
        const item = appConfig.statusSituacao.find(item => item.id === idSituacao && item.color)
        return item.color
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
