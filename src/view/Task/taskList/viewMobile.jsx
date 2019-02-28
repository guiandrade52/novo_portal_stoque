import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button, Icon } from 'semantic-ui-react';

import 'perfect-scrollbar-react/dist/style.min.css';

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { taskListActions } from '../../../redux-flow/_actions';

class ViewMobile extends React.Component {

    render() {
        const { children } = this.props
        return (
            <div>
                <Dialog fullScreen={true} open={this.props.open} onClose={() => this.props.showDetailsTask(false)} aria-labelledby="responsive-dialog-title">
                    <DialogTitle id="responsive-dialog-title">
                        Detalhes da ocorrência
                    </DialogTitle>
                    <DialogContent style={{ padding: 10 }}>
                        {children}
                    </DialogContent>
                    <DialogActions>
                        <Button animated='fade' basic onClick={() => this.props.showDetailsTask(false)}>
                            <Button.Content visible>Fechar</Button.Content>
                            <Button.Content hidden><Icon name='close' /></Button.Content>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    open: state.task.open
})

const mapDispatchToProps = dispatch => bindActionCreators(taskListActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ViewMobile)
