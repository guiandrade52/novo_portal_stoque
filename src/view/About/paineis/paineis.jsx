import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Divider } from 'semantic-ui-react';

import TaskInterno from '../../../assets/videos/TaskInterno.mp4'
import TaskExterno from '../../../assets/videos/TaskExterno.mp4'
import HomePage from '../../../assets/videos/HomePage.mp4'
import ViewTask from '../../../assets/videos/ViewTask.mp4'
import Filtro from '../../../assets/videos/Filtro.mp4'
import { appConfig } from '../../../appConfig';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

class Paineis extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (
            <div className={classes.root}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Dash Home</Typography>
                        <Typography className={classes.secondaryHeading}>Ajuda na tela home</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className={classes.root}>
                            <Typography variant='h6'>
                                Tela inicial
                            </Typography>
                            <Typography>
                                Na tela Home temos o gráfico trassado resumindo a quantidade de ocorrências abertas por período de um ano antecedente. Assim como o gráfico round que demonstra
                                o total de ocorrências aberas e concluídas (O Filtro respeita o usuário logado e contratos vinculados).
                            </Typography>
                            <video width="100%" src={HomePage} controls loop autoPlay />
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Nova tarefa</Typography>
                        <Typography className={classes.secondaryHeading}>
                            Ajuda na tela nova tarefa
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className={classes.root}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Serviços internos</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div className={classes.root}>
                                        <Typography variant='h6'>
                                            Abrir ocorrência para serviços internos
                                        </Typography>
                                        <Typography >
                                            Em poucos passos abrir uma ocorrência para serviços internos com práticidade e agilidade.
                                        </Typography>
                                        <Divider />
                                        <video width="100%" src={TaskInterno} controls loop autoPlay />
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Tenho uma Série</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div className={classes.root}>
                                        <Typography variant='h6'>
                                            Abrir Ocorrência com uma série
                                        </Typography>
                                        <Typography >
                                            Abrir Ocorrência com uma série ficou ainda mais fácil e prático, em apenas três passos sua solicitação poderá ser registrada.
                                        </Typography>
                                        <Divider />
                                        <video width="100%" src={TaskExterno} controls loop autoPlay />
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Formulários</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div className={classes.root}>
                                        <Typography variant='h6'>
                                            Envio de formulários
                                        </Typography>
                                        <Typography >
                                            Os formulários estão ai para facilitar as solicitações como de novos colaboradores.
                                        </Typography>
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Lista de Tarefas</Typography>
                        <Typography className={classes.secondaryHeading}>
                            Ajuda na tela lista de tarefas
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className={classes.root}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Visualizar tarefas</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div className={classes.root}>
                                        <Typography variant='h6'>
                                            Tarefas
                                        </Typography>
                                        <Typography >
                                            O novo visualizador de tarefas está com novos recursos, onde os Card’s possuem uma pré-visualização da ocorrência bem resumida, assim como sinalizadores de status, se possui anexo ou RAT/CIT.
                                        </Typography>
                                        <video width="100%" src={ViewTask} controls loop autoPlay />
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Filtros</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div className={classes.root}>
                                        <Typography variant='h6'>
                                            Aplicar filtros
                                        </Typography>
                                        <Typography >
                                            Aplicar filtros ficou ainda mais fácil, agora você tem opção de aplicar múltiplos filtros facilitando suas pesquisas e relatórios.
                                        </Typography>
                                        <video width="100%" src={Filtro} controls loop autoPlay />
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Outros</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className={classes.root}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Gabarito de cores no status das ocorrências</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div className={classes.root}>
                                        <Typography variant='h6'>
                                            Gabarito das cores nos cards de ocorrências
                                        </Typography>
                                        <Typography >
                                            Aqui temos o gabarito das cores nos status das ocorrências.
                                        </Typography>
                                        {appConfig.statusSituacao.map(item =>
                                            <span key={item.id} style={{ padding: 10, margin: 5, borderRadius: 100, float: 'left', background: item.color, }}>{item.label}</span>
                                        )}
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

Paineis.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paineis);
