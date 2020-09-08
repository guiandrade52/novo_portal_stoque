import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        width: 230,
        margin: theme.spacing.unit * 1,
    },
    size: {
        marginLeft: 40,
        color: '#767676'
    }
})

class CardFile extends Component {

    formatBytes = size => {
        var i = Math.floor(Math.log(size) / Math.log(1024));
        // eslint-disable-next-line no-mixed-operators
        return !size && '0 Bytes' || (size / Math.pow(1024, i)).toFixed(2) + " " + ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][i]
    }

    render() {
        const { classes, image, title, handleRemove, size } = this.props
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        alt={title}
                        height='150'
                        image={image}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" noWrap>
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={handleRemove} size="small" color="primary">
                        Remover
                    </Button>
                    <span className={classes.size}>{this.formatBytes(size)}</span>
                </CardActions>
            </Card>
        )
    }
}

CardFile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardFile);
