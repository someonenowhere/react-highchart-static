import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class AreaWithNegativeValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }      
    }

    componentDidMount() {
        fetch('./chartData.json', {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
        .then(response => response.json())        
        .then(response => {
            const chartOptions =  response;    
            this.setState({
                options : chartOptions
            })
        })
    }
    
    render() {        
        return (
            <div>
                <h1>Area with negative value</h1>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={this.state.options}
                />
            </div>
        )
    }
}