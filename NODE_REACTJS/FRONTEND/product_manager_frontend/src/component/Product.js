import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card text-left">
          <img className="card-img-top" src={this.props.image}/>
          <div className="card-body">
            <h5 className="card-title float-left">{this.props.product_name}</h5>
            <h5 className="card-title float-right">{this.props.product_price}</h5>
          </div>
        </div>
      </div>
    )
  }
}
