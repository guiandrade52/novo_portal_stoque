import React, { Component, Fragment } from 'react'

//Redux
import { connect } from 'react-redux'
import { destroy as resetForm } from 'redux-form'
import { bindActionCreators } from 'redux';

// @material-ui-core/style
import { withStyles } from '@material-ui/core/styles'

//CoreComponents
import { GridContainer, GridItem } from '../../components/Grids';
import { MediaCard } from '../../components/Cards';
import { Externo } from './Externo';
import { Interno } from './Interno';
import { Formularios } from './Formularios';
import { Grow } from '../../components/Transitions';
import { stepActions, newTaskActions } from '../../redux-flow/_actions';


const styles = ({
    root: {
        margin: 7,
        width: '100%',
    }
})

class Dash extends Component {

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
                <Grow>
                    <GridContainer justify="center" spacing={24} >

                        {id === 0 &&
                            <Fragment>
                                {
                                    clienteInterno === 'S'
                                        ? options.map(item =>
                                            <GridItem key={item.label}>
                                                <MediaCard
                                                    title={item.label}
                                                    icon={item}
                                                    onClick={() => this.handleSelected(item.id)}
                                                />
                                            </GridItem>
                                        )
                                        : <GridItem>
                                            <MediaCard
                                                title={options[1].label}
                                                icon={options[1]}
                                                onClick={() => this.handleSelected(options[1].id)}
                                            />
                                        </GridItem>
                                }
                            </Fragment>
                        }
                        <GridItem xs={12} sm={12} md={12}>
                            {id === 1 && <Interno home={this.handleSelected} />}
                            {id === 2 && <Externo home={this.handleSelected} />}
                            {id === 3 && <Formularios home={this.handleSelected} />}
                        </GridItem>

                    </GridContainer>
                </Grow>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...stepActions, resetForm, ...newTaskActions }, dispatch)

const mapStateToProps = state => ({
    clienteInterno: state.usuario.dados.clienteInterno
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dash))