import React, { Component } from 'react'
import { Paineis } from './paineis';
import { Slide } from '@material-ui/core';

class About extends Component {
    render() {
        return (
            <Slide direction="left" in={true} mountOnEnter unmountOnExit style={{ transitionDelay: true ? '400ms' : '0ms' }}>
                <Paineis />
            </Slide>
        )
    }
}

export default About