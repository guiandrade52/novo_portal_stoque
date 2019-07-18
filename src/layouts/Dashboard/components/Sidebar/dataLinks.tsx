import React from 'react';


// Material icons
import {
  Dashboard as DashboardIcon,
  LibraryAdd as LibraryAddIcon,
  FormatListBulleted as FormatListBulletedIcon,
  SettingsTwoTone as SettingsIcon,
  PagesTwoTone as PagesIcon,
  InsertDriveFileTwoTone as InsertDriveFileIcon,
} from '@material-ui/icons';

export const links = [
  {
    icon: <DashboardIcon color="primary" />,
    title: 'Dashboard',
    link: '/',
    subLink: [],
  },
  {
    icon: <LibraryAddIcon color="primary" />,
    title: 'Novo',
    link: '/new',
    subLink: [
      {
        icon: <PagesIcon color="primary" />,
        title: 'Tarefa',
        link: '/new/task',
      },
      {
        icon: <InsertDriveFileIcon color="primary" />,
        title: 'Formulário',
        link: '/new/form',
      },
    ],
  },
  {
    icon: <FormatListBulletedIcon color="primary" />,
    title: 'Listar Tarefas',
    link: '/listTask',
    subLink: [],
  },
  {
    icon: <SettingsIcon color="primary" />,
    title: 'Configurador',
    link: '/configs',
    subLink: [],
  },
];
