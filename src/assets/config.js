import { Argos, Stoque } from './themes'

const pathname = window.location.pathname

export const themes = pathname === '/argos'
    ? { themeProvider: Argos, title: 'Portal Argos' }
    : { themeProvider: Stoque, title: 'Portal Stoque' }
