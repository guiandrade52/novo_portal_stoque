export const validate = values => {
    const errors = {}
    const requiredFields = [
        'Fun_Nome',
        'Fun_Alocado',
        'Fun_CPF',
        'Fun_Cargo',
        'Fun_Setor',
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Campo obrigatório'
        }
    })
    if (values.Sol_Email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Sol_Email)) {
        errors.Sol_Email = 'E-mail inválido.'
    }
    return errors
}