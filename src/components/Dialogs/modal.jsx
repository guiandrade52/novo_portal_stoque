import React from 'react';

//Redux
import { dialogActions } from '../../redux-flow/_actions/dialog.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

//Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Modal = ({ open, hideDialog, selected: { title } }) =>
    <div>
        <Dialog
            open={open}
            onClose={hideDialog}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
        >
            <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                    at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                    sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum
                    nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                    et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras
                    mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                    lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                    sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                    consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                    lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                    sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                    consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                    lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                    sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                    consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                    lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                    sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
                    consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                    lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                    sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={hideDialog} color="primary">
                    Fechar
                </Button>
            </DialogActions>
        </Dialog>
    </div>

const mapStateToProps = state => ({ ...state.dialog })

const mapDispatchToProps = dispatch => bindActionCreators(dialogActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Modal)