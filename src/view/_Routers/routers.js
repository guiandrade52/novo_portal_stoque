// @material-ui/icons
import Home from '@material-ui/icons/Home'
import ViewHeadline from '@material-ui/icons/ViewHeadline'
import LiveHelp from '@material-ui/icons/LiveHelp'
import IconAdd from '@material-ui/icons/AddToPhotos'
import BuildIcon from '@material-ui/icons/Build'

// Core Components
import Dashboard from '../Dashboard'
import Tasks from '../Task'
import About from '../About'

import { Admin } from '../Admin'
import { MainNewTask } from '../NewTask';

export const SidebarRouter = [
    {
        path: "/",
        name: "Dashboard",
        icon: Home,
        component: Dashboard,
        exact: true,
        enable: true
    },
    {
        path: "/NewTask",
        name: "Nova Tarefa",
        icon: IconAdd,
        component: MainNewTask,
        enable: true
    },
    {
        path: "/Admin",
        name: "Administrador",
        icon: BuildIcon,
        component: Admin,
        enable: false
    },
    {
        path: "/Tasks",
        name: "Tarefas",
        icon: ViewHeadline,
        component: Tasks,
        enable: true
    },
    {
        path: "/About",
        name: "Sobre",
        icon: LiveHelp,
        component: About,
        enable: true
    }
]
