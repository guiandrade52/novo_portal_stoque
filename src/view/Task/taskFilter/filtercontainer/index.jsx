import React from 'react'
import PropTypes from 'prop-types'

// @material-ui/core
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import red from '@material-ui/core/colors/red'

// @material-ui-icons
import IconFilterList from '@material-ui/icons/FilterList'

//Redux
import { connect } from 'react-redux'

// Core Components
import Form from './form'
import { IconButton } from '@material-ui/core';



const styles = ({
    openButton: {
        marginTop: 10,
    },
    cancelButton: {
        color: red[500]
    },
    openFab: {
        margin: 2,
        float: 'right'
    }
})

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class FilterContainer extends React.Component {
    state = {
        open: false
    }

    handleOpenOrClose = () => this.setState({ open: !this.state.open })


    render() {
        const { classes, changeFilterProps } = this.props

        return (
            <div>
                <IconButton onClick={this.handleOpenOrClose} color="primary" className={classes.iconButton} aria-label="Directions">
                    <IconFilterList />
                </IconButton>
                <Dialog
                    fullScreen={true}
                    fullWidth={true}
                    disableBackdropClick
                    open={this.state.open}
                    onClose={this.handleOpenOrClose}
                    scroll='paper'
                    aria-labelledby="scroll-dialog-title"
                    TransitionComponent={Transition}
                >
                    <Form onSubmit={changeFilterProps} handleOpenOrClose={this.handleOpenOrClose} classes={classes} open={this.state.open} />
                </Dialog>

            </div>
        )
    }
}

FilterContainer.propTypes = {
    classes: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
    open: state.taskList.filterOpen,
})

export default connect(mapStateToProps)(withStyles(styles)(FilterContainer))
