import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import OpenWithIcon from '@material-ui/icons/OpenWith';
import { IconButton } from '@material-ui/core';
import { Button, Icon } from 'semantic-ui-react';

import { appConfig } from '../../appConfig';

class DialogContainer extends React.Component {

    state = {
        open: false,
        fullScreen: false
    };

    handleClickOpen = () => {
        this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false, fullScreen: false })
    }

    handleFullScreen = () => {
        this.setState({ fullScreen: !this.state.fullScreen })
    }

    handleDownload = () => {
        window.open(this.props.url, '_blank')
    }

    render() {
        const { button, title, url, tipo } = this.props
        return (
            <div>
                <Button animated='fade' basic onClick={this.handleClickOpen}>
                    <Button.Content visible>{button}</Button.Content>
                    <Button.Content hidden><Icon name='eye' /></Button.Content>
                </Button>
                <Button animated='fade' basic onClick={this.handleDownload}>
                    <Button.Content visible><Icon name='cloud download' /></Button.Content>
                    <Button.Content hidden><Icon name='download' /></Button.Content>
                </Button>
                <Dialog fullScreen={this.state.fullScreen} open={this.state.open} onClose={this.handleClose} aria-labelledby="responsive-dialog-title">
                    <DialogTitle id="responsive-dialog-title">
                        {title}
                        <IconButton aria-label="expandir" onClick={this.handleFullScreen} style={{ float: 'right' }} >
                            <OpenWithIcon fontSize="large" />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent style={{ margin: 0, padding: 0, position: 'relative' }}>
                        <div style={{ width: '100%', height: '100%', position: this.state.fullScreen ? 'absolute' : 'initial' }}>
                            {
                                appConfig.EXTENSIONS.embed.includes(tipo) &&
                                <embed src={url} width='100%' height='100%' style={{ minHeight: '380px', minWidth: '490px' }} />
                            }
                            {
                                appConfig.EXTENSIONS.office.includes(tipo) &&
                                <embed src={`${appConfig.VIEWS.microsoft}${url}&embedded=true`} width='100%' height='100%' style={{ minHeight: '380px', minWidth: '490px' }} />
                            }
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button animated='fade' basic onClick={this.handleDownload}>
                            <Button.Content visible>Download</Button.Content>
                            <Button.Content hidden><Icon name='cloud download' /></Button.Content>
                        </Button>
                        <Button animated='fade' basic onClick={this.handleClose}>
                            <Button.Content visible>Fechar</Button.Content>
                            <Button.Content hidden><Icon name='close' /></Button.Content>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default DialogContainer
