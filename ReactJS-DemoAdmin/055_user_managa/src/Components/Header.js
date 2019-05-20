import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">Quản lý Giao Diện Các Vị Tướng Liên Quân</h1>
                    <p className="lead">Với Dữ Liệu Game Đến từ Garena </p>
                    <hr className="my-2" />
                    <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Game hay là nhờ các tướng </a>
                    <p />
                </div>
            </div>
      </div>
    )
  }
}
