import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class Stock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jsonData: []
        }
    }

    componentDidMount() {
        fetch('https://www.highcharts.com/samples/data/aapl-c.json', { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
            .then(response => response.json())
            .then(response => {
                const getJsonData = response
                this.setState({
                    jsonData: getJsonData
                })
            })       
    }

    render() {
        var options = {
            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'AAPL Stock Price'
            },

            series: [{
                name: 'AAPL',
                data: this.state.jsonData,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        }
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        )
    }
}
