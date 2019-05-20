import React, { Component } from 'react'
import { connect } from 'react-redux'
class News extends Component {
  // useEditStatusInStore= ()=>{
  //   var { dispatch } = this.props;
  //   dispatch({ type: 'CHANGE_EDIT_STATUS'})
  // }
  render() {
    return (
      <div>
        Day Là Coponent New 
        <button onClick = {() => this.props.useEditStatusInStore() }>Click me  </button>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editStatus: state.status
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    useEditStatusInStore: () => {
      dispatch({type: 'CHANGE_EDIT_STATUS'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(News)
