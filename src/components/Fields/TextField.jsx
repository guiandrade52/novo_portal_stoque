import React from 'react'
import { TextField as Field } from '@material-ui/core'

const TextField = ({ input, meta: { touched, invalid, error }, ...custom }) =>
    <div>
        < Field
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    </div>

export default TextField