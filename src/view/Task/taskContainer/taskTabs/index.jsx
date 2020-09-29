import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// @material-ui/styles
import { withStyles } from '@material-ui/core/styles';

// @material-ui/core
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Divider, Typography } from '@material-ui/core';

// Core component
import Ocorrencia from './ocorrencia'
import Solicitante from './solicitante'
import Endereco from './endereco'
import Classificacao from './classificacao'
import RatCit from './ratCit'


const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%'
    },
    container: {
        marginTop: 20
    }
});

class TaskTabs extends React.Component {
    state = {
        value: 0,
        readOnly: true
    };

    normalizeTask(task) {
        const p = {}
        for (var [key, value] of Object.entries(task)) {
            if (typeof value === 'number')
                p[key] = value
            else if (typeof value === 'string')
                p[key] = value.trim()
            else if (typeof value === 'object')
                p[key] = value === null ? '' : value
            else
                p[key] = value
        }
        return p
    }

    handleChange = (_, value) => {
        this.setState({ value });
    }

    componentWillReceiveProps() {
        this.setState({ value: 0 })
    }

    render() {
        const { classes, selected } = this.props;
        const { value, readOnly } = this.state
        const taskSelected = this.normalizeTask(selected)

        return (
            <div className={classes.root}>
                <Typography noWrap variant='overline'><b>{taskSelected.ExecutionId}</b> - {taskSelected.ClienteAt}</Typography>
                <Divider />
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant='scrollable'
                    scrollButtons="auto"
                >
                    <Tab label="Ocorrência" />
                    <Tab label="Solicitante" />
                    <Tab label="Endereço" />
                    <Tab label="Classificação" />
                    { selected.Rat && selected.Rat[0] !== undefined && <Tab label="RAT/CIT" />}
                </Tabs>
                <Divider />
                <div className={classes.container}>
                    {value === 0 && <Ocorrencia task={taskSelected} readOnly={readOnly} />}
                    {value === 1 && <Solicitante task={taskSelected} readOnly={readOnly} />}
                    {value === 2 && <Endereco task={taskSelected} readOnly={readOnly} />}
                    {value === 3 && <Classificacao task={taskSelected} readOnly={readOnly} />}
                    {value === 4 && <RatCit task={taskSelected} />}
                </div>
            </div>
        );
    }
}

TaskTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    selected: state.taskList.selected
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(TaskTabs))
