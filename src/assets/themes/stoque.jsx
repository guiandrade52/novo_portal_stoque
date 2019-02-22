import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: { main: '#00989a' },
        secondary: { main: '#11cb5f' }
    },
    props: {
        teste: 'teste'
    }
})

export default theme