import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  link: {
    textDecoration: 'none',
    color: '#888',
    fontSize: '0.8rem',
    '&:hover': {
      color: '#333',
      textDecoration: 'underline',
    },
  },
  active: {
    fontSize: '0.8rem',
    color: '#333',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecoration: 'none',
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(0.7, 1),
    margin: '0 0 8px 0',
  },
});
