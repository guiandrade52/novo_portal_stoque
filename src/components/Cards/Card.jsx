import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import { Tooltip } from '@material-ui/core';
import { Loading } from '../Loading';
import { Dialog } from '../Dialogs';
import { appConfig } from '../../appConfig';

const styles = {
    date: {
        marginLeft: 'auto'
    }
};

class ImgMediaCard extends Component {


    render() {
        const { classes, title, subTitle, url, loading, tipo } = this.props
        return (
            <Card style={{ maxWidth: 300 }}>
                <CardActionArea >
                    {
                        loading &&
                        <Loading />
                    }
                    {
                        !loading &&
                        <div>
                            {
                                appConfig.EXTENSIONS.embed.includes(tipo) &&
                                <embed src={url} width='300' height='200' />
                            }
                            {
                                appConfig.EXTENSIONS.office.includes(tipo) &&
                                <iframe src={`${appConfig.VIEWS.google}${url}&embedded=true`} title='Anexo' frameBorder="0" width='300' height='200' />

                            }
                        </div>
                    }
                </CardActionArea>
                <CardActions>
                    <Tooltip title={title} placement="bottom">
                        <Typography noWrap variant="caption">
                            {title}
                        </Typography>
                    </Tooltip>
                </CardActions>
                <CardActions>
                    <Dialog button='Visualizar' title={title} url={url} tipo={tipo} />
                    <Typography variant="overline" className={classes.date}>
                        {subTitle !== undefined ? subTitle.trim() : subTitle}
                    </Typography>
                </CardActions>
            </Card >
        )
    }
}


ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
