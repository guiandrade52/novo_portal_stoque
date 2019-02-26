import React from 'react'
import TextField from '@material-ui/core/TextField'

export default (props) => {
    const { input } = props
    return (
        <div>
            < TextField
                {...input}
                {...props}
            />
        </div>
    )
}