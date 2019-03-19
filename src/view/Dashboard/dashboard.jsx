import React, { Component } from 'react'
import { GridContainer, GridItem } from '../../components/Grids';
import { Doughnut, Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { chartsActions } from '../../redux-flow/_actions/charts.actions';

const getDataChartRound = dataChart => {
    const labels = [];
    const data = [];
    if (dataChart.TotalFechadas > 0) {
        labels.push('Concluidas')
        data.push(dataChart.TotalFechadas)
    }
    if (dataChart.TotalAbertas > 0) {
        labels.push('Abertas')
        data.push(dataChart.TotalAbertas)
    }
    return {
        labels,
        datasets: [{
            data,
            backgroundColor: [
                '#46e00e',
                '#e03b3b',
            ],
            hoverBackgroundColor: [
                '#40ce0c',
                '#c63333',
            ]
        }]
    }
};

const getDataChartLine = chartData => {
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const labels = chartData.map(item => `${meses[item.Mes - 1]}/${item.Ano}`).reverse()
    const data = chartData.map(item => item.Total).reverse()

    return ({
        labels,
        datasets: [
            {
                label: 'Total de ocorrências abertas no mês',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data
            }
        ]
    })
};

class Dashboard extends Component {

    async componentWillMount() {
        await this.props.fetchChartLine()
    }

    render() {
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Line data={getDataChartLine(this.props.chartLine)} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Doughnut data={getDataChartRound(this.props.chartRound)} />
                </GridItem>
            </GridContainer>
        )
    }
}

const mapStateToProps = state => ({
    ...state.charts
})

const mapDispatchToProps = dispatch => bindActionCreators(chartsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)