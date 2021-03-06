/* eslint-disable react/prop-types, react/jsx-handler-names */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
});

function NoOptionsMessage(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            Nenhuma opção encontrada
        </Typography>
    );
}

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

function Control(props) {
    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps.classes.input,
                    inputRef: props.innerRef,
                    children: props.children,
                    ...props.innerProps,
                },
            }}
            {...props.selectProps.textFieldProps}
        />
    );
}

function Option(props) {
    return (
        <MenuItem
            buttonRef={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

function Placeholder(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function SingleValue(props) {
    return (
        <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
            {props.children}
        </Typography>
    );
}

function ValueContainer(props) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={classNames(props.selectProps.classes.chip, {
                [props.selectProps.classes.chipFocused]: props.isFocused,
            })}
            onDelete={props.removeProps.onClick}
            deleteIcon={<CancelIcon {...props.removeProps} />}
        />
    );
}

function Menu(props) {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    );
}

const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
};

class SelectAuto extends React.Component {

    search = false;
    count = 0;

    handleChange = value => {
        this.props.input.onChange(value)
    };

    handleFocus = () => {
        this.search = true
    }

    handleBlur = () => {
        this.search = false
    }

    onInputChange = value => {
        if (value === '' && this.count === 0 && this.search) {
            this.count = 1
            this.props.onKeyDown(value)
        }
        else if (this.search && this.count === 0) {
            this.count = 0
            this.props.onKeyDown(value)
        }
        else if (this.search && value !== '') {
            this.props.onKeyDown(value)
            this.count = 0
        }
    }

    render() {
        const { classes, theme, options, isMulti, placeholder, label, input: { value } } = this.props;

        const selectStyles = {
            input: base => ({
                ...base,
                color: theme.palette.text.primary,
                '& input': {
                    font: 'inherit',
                },
            }),
        };

        console.log(value)
        return (
            < div className={classes.root} >
                <NoSsr>
                    {!isMulti &&
                        <Select
                            classes={classes}
                            styles={selectStyles}
                            options={options}
                            components={components}
                            value={value}
                            onChange={this.handleChange}
                            placeholder={placeholder}
                            isClearable
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            onInputChange={this.onInputChange}
                            textFieldProps={{
                                label,
                                InputLabelProps: {
                                    shrink: true,
                                },
                            }}
                        />
                    }
                    <div className={classes.divider} />
                    {isMulti &&
                        <Select
                            classes={classes}
                            styles={selectStyles}
                            textFieldProps={{
                                label,
                                InputLabelProps: {
                                    shrink: true,
                                },
                            }}
                            options={options}
                            components={components}
                            value={value}
                            onChange={this.handleChange}
                            placeholder={placeholder}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            isMulti
                            onInputChange={this.onInputChange}
                        />
                    }
                </NoSsr>
            </div >
        );
    }
}

SelectAuto.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    onKeyDown: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(SelectAuto)
