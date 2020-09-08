import { createMuiTheme } from '@material-ui/core'
import bkgLogin from "../../assets/img/bkgLogin.jpg";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: { main: '#00989a' },
        secondary: { main: '#11cb5f' }
    },
    login_background: `url(${bkgLogin})`
})

export default theme