import React, { Component } from 'react'
import AreaWithNegativeValue from './AreaWithNegativeValue'
import Scatter from './Scatter'
import PackedBubbledChart from './PackedBubbledChart'
import Advance from './Advance'
import Parallel from './Parallel'
import CloumnLineChart from './CloumnLineChart'
import ThreeD from './ThreeD'
import Stock from './Stock'
// import Map from './Map'

var style = {
  width: "46.333333%", float: 'left', margin: '10px', padding: '10px', boxShadow: '0px 2px 10px 0px #ccc'
}

export default class App extends Component {
  render() {
    return (
      <div>
        <div style={style}>
          <AreaWithNegativeValue />
        </div>
        <div style={style}>
          <Scatter />
        </div>
        <div style={style}>
          <Advance />
        </div>
        <div style={style}>
          <Parallel />
        </div>
        <div style={style}>
          <PackedBubbledChart />
        </div>
        <div style={style}>
          <CloumnLineChart />
        </div>
        <div style={style}>
          <Stock />
        </div>
        <div style={style}>
          <ThreeD />
        </div>

        {/* <div style={style}>
          <Map />
        </div> */}
      </div>
    )
  }
}