import React from 'react'
import TextField from '@material-ui/core/TextField'

export default ({ input, meta: { touched, invalid, error }, ...custom }) =>
    <div>
        < TextField
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    </div>