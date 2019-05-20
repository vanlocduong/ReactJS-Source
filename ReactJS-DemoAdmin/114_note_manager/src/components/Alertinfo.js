import React, { Component } from 'react'
import { Alert, AlertContainer } from 'react-bs-notifier';
import { connect } from 'react-redux';
class AlertInfo extends Component {
    handleAlert=()=>{
        this.props.changAlertOFF()
    }
  render() {
     
    if(this.props.alertShow === false) return null;

    return (
        <AlertContainer>
            <Alert type="danger" timeout={1500} onDismiss={()=> this.handleAlert() } >{this.props.alertContent}</Alert>
        </AlertContainer>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
		alertShow: state.alertShow,
        alertContent: state.alertContent,
	};
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changAlertOFF: () => {
            dispatch({ type: 'CHANGE_ALERT_OFF' });
        },
    }
}
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AlertInfo);
