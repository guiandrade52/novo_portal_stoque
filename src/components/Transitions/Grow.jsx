import React from 'react'
import { Grow as GrowM } from '@material-ui/core';

export const Grow = ({ children, open }) =>
    <GrowM in={open} style={{ transformOrigin: '0 0 0' }} {...({ timeout: 1000 })}>
        {children}
    </GrowM>

Grow.defaultProps = {
    open: true
}
