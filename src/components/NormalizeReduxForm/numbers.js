export const numbers = value => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '')

    return onlyNums
}