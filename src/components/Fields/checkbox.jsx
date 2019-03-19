import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox as CheckboxM } from '@material-ui/core';

const Checkbox = ({ input, label, ...custon }) =>
    <div>
        <FormControlLabel
            control={
                <CheckboxM
                    checked={input.value ? true : false}
                    onChange={input.onChange}

                />
            }
            {...custon}
            label={label}
        />
    </div>

export default Checkbox