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
import DialogTitle from '@material-ui/core/DialogTitle';
import image from '../../assets/img/help.jpg'
import { Image } from 'semantic-ui-react';

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
                Vá até a tela de ajuda para ver as novidades do sistema.
                <Image src={image} />
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
