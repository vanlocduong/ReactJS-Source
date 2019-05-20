import React, { Component } from 'react';
import './App.css';
import New from './New.js';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
       
          aaa
          {this.props.dulieu}
          <New />
       
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num,
  }
}

export default connect(mapStateToProps)(App);
