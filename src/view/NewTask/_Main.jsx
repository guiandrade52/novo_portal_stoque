import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
import { destroy as resetForm } from 'redux-form'
import { bindActionCreators } from 'redux';

// @material-ui-core/style
import { withStyles } from '@material-ui/core/styles'

//CoreComponents
import { GridContainer, GridItem } from '../../components/Grids';
import { Externo } from './Externo';
import { Interno } from './Interno';
import { Formularios } from './Formularios';
import { stepActions, newTaskActions } from '../../redux-flow/_actions';
import { Slide } from '@material-ui/core';
import Dash from './dashboard/dash';


const styles = ({
    root: {
        margin: 7,
        width: '94%',
        position: 'absolute'
    }
})

class Main extends Component {

    state = {
        options: [
            { id: 1, label: 'Serviços internos', nameIcon: 'settings', color: 'rgba(39, 108, 191, 0.44)' },
            { id: 2, label: 'Tenho uma Série/Licença', nameIcon: 'handshake outline', color: '#C6C6C6' },
            { id: 3, label: 'Formulários', nameIcon: 'file alternate outline', color: 'rgba(6, 144, 136, 0.59)' }
        ],
        id: 0
    }

    handleSelected = id => {
        this.props.resetNewTask()
        this.setState({
            id
        })
    }

    render() {
        const { options, id } = this.state
        const { classes, clienteInterno } = this.props
        return (
            <div className={classes.root}>
                <GridContainer justify="center" >
                    <GridItem xs={12} sm={12} md={12}>
                        <Slide direction="left" in={id === 0} mountOnEnter unmountOnExit style={{ transitionDelay: id === 0 ? '400ms' : '0ms' }}>
                            <Dash clienteInterno={clienteInterno} options={options} handleSelected={this.handleSelected} />
                        </Slide>
                        <Slide direction="left" in={id === 1} mountOnEnter unmountOnExit style={{ transitionDelay: id === 1 ? '400ms' : '0ms' }}>
                            <Interno home={this.handleSelected} />
                        </Slide>
                        <Slide direction="left" in={id === 2} mountOnEnter unmountOnExit style={{ transitionDelay: id === 2 ? '400ms' : '0ms' }}>
                            <Externo home={this.handleSelected} />
                        </Slide>
                        <Slide direction="left" in={id === 3} mountOnEnter unmountOnExit style={{ transitionDelay: id === 3 ? '400ms' : '0ms' }}>
                            <Formularios home={this.handleSelected} />
                        </Slide>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...stepActions, resetForm, ...newTaskActions }, dispatch)

const mapStateToProps = state => ({
    clienteInterno: state.usuario.dados.clienteInterno
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main))