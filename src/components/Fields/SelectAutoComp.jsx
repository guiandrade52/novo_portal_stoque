import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';

import { emphasize } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    flexGrow: 1
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
})

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

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
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

const components = {
  MultiValue,
  Placeholder,
  Control,
  NoOptionsMessage,
  Option
}

class SelectAutoComp extends React.Component {

  handleChange = (value) =>{
    this.props.input.onChange(value)
    
    if(this.props.onChange)
      this.props.onChange()
  }

  render() {
    const { classes, onKeyDown, placeholder, label, options, input, handleFocus, isMulti } = this.props
    return (
      <div className={classes.root}>
        <Select
          classes={classes}
          textFieldProps={{
            label: label,
            InputLabelProps: {
              shrink: true,
            },
          }}
          value={input.value}
          onChange={value => this.handleChange(value)}
          onKeyDown={onKeyDown}
          components={components}
          options={options}
          placeholder={placeholder}
          isMulti={isMulti}
          onFocus={handleFocus}
        />
      </div>
    );
  }
}

SelectAutoComp.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SelectAutoComp);
