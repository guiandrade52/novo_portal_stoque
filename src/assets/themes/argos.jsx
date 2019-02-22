import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: { main: '#aaa' },
        secondary: { main: '#11cb5f' }
    },
    teste: {
        text: 'teste'
    }
})

export default theme