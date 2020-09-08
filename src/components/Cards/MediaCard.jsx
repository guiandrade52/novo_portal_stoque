import React from 'react';
import PropTypes from 'prop-types';

//Material Ui
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { Icon } from 'semantic-ui-react';

import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';


const styles = {
    media: {
        height: 140,
    }

};

const MediaCard = props => {
    const { classes, image, title, descricao, onClick, icon } = props;
    const matches = useMediaQuery('(min-width:1400px)')
    const styleCard = matches ? { minWidth: 700, } : { minWidth: 350 }

    return (
        <Card style={styleCard} onClick={onClick}>
            <CardActionArea>
                {image &&
                    <CardMedia
                        className={classes.media}
                        image={image}
                    />
                }
                {icon &&
                    <div>
                        <div style={{ padding: 25 }} >
                        </div>
                        <div style={{ padding: 30, background: icon.color }}>
                        </div>
                        <div align='center' style={{ margin: 4 }}>
                            <Icon className={classes.icon} size='huge' color='grey' name={icon.nameIcon} />
                        </div>
                        <div style={{ padding: 10, background: icon.color }}>
                        </div>
                    </div>
                }
                <CardContent>
                    {title &&
                        <Typography align='center' variant="h5" component="h2">
                            {title}
                        </Typography>
                    }
                    {descricao &&
                        <Typography component="p">
                            {descricao}
                        </Typography>
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
