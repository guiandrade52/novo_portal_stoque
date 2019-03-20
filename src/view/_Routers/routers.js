// @material-ui/icons
import Home from '@material-ui/icons/Home'
import ViewHeadline from '@material-ui/icons/ViewHeadline'
import LiveHelp from '@material-ui/icons/LiveHelp'
import IconAdd from '@material-ui/icons/AddToPhotos'

// Core Components
import Dashboard from '../Dashboard'
import Tasks from '../Task'
import About from '../About'
import NewTask from '../NewTask'

export const SidebarRouter = [
    {
        path: "/",
        name: "Dashboard",
        icon: Home,
        component: Dashboard,
        exact: true,
    },
    {
        path: "/NewTask",
        name: "Nova Tarefa",
        icon: IconAdd,
        component: NewTask,
    },
    {
        path: "/Tasks",
        name: "Tarefas",
        icon: ViewHeadline,
        component: Tasks,
    },
    {
        path: "/About",
        name: "Sobre",
        icon: LiveHelp,
        component: About,
    }
]
