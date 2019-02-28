import React, { Component } from 'react'
import { Select } from '../../components/Fields'
import { Field, reduxForm } from 'redux-form'


const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

class About extends Component {
    render() {
        return (
            <form>
                <Field
                    name='teste'
                    label='LabelTeste'
                    component={Select}
                    options={suggestions}
                    isMulti
                    placeholder='teste'
                />
            </form>
        )
    }
}

About = reduxForm({
    form: 'About',
    destroyOnUnmount: false
})(About)

export default About