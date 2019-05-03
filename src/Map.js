import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mapData: []
        }
    }

    componentDidMount() {
        fetch('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-density.json', { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
            .then(response => response.json())
            .then(response => {
                const getMapData = response
                this.setState({
                    mapData: getMapData
                })
            })
    }
    render() {
        var options = {
            chart: {
                map: 'custom/world'
            },
    
            title: {
                text: 'Zoom in on country by double click'
            },
    
            mapNavigation: {
                enabled: true,
                enableDoubleClickZoomTo: true
            },
    
            colorAxis: {
                min: 1,
                max: 1000,
                type: 'logarithmic'
            },
    
            series: [{
                data: this.state.mapData,
                joinBy: ['iso-a3', 'code3'],
                name: 'Population density',
                states: {
                    hover: {
                        color: '#a4edba'
                    }
                },
                tooltip: {
                    valueSuffix: '/km²'
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
