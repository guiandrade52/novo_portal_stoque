import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 10,
    },
    container: {
        textAlign: 'center',
    }
});

const CircularIndeterminate = ({ classes, size }) => {
    return (
        <div className={classes.container}>
            <CircularProgress className={classes.progress} size={size} />
        </div>
    );
}

CircularIndeterminate.defaultProps = {
    size: 100
}

CircularIndeterminate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);