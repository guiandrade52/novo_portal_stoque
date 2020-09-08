export const cnpj_cpfNormalise = value => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length <= 2) {
        return onlyNums
    }
    if (onlyNums.length <= 2) {
        return `${onlyNums.slice(0, 3)}.`
    }

    if (onlyNums.length <= 10) {
        return onlyNums
    }
    if (onlyNums.length <= 11) {
        return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(6, 9)}-${onlyNums.slice(9, 11)}`
    }
    if (onlyNums.length <= 12) {
        return onlyNums
    }
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(5, 8)}/${onlyNums.slice(8, 12)}-${onlyNums.slice(12, 14)}`
}