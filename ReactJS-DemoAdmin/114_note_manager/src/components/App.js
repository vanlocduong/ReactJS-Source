import React, { Component } from 'react';
import './App.css';
import { noteData } from './firebaseConnect.js';
import * as firebase from 'firebase'
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
import AlertInfo from './Alertinfo';

class App extends Component {

// use redux not use react-js pure
  // addData = (item)=>{
  //   noteData.push(item);
  // }

  showForm= ()=>{
    if(this.props.isEdit){
      return <NoteForm/>
    }
  }

  render() {
    // console.log("nodata ", noteData);
    // noteData.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // });

    return (
		<div>
			<Nav />
      <AlertInfo/>
			<div className="container">
				<div className="row">
					<NoteList />
          {this.showForm()}
					{/* <NoteForm getData={item => this.addData(item)} /> */}
				</div>
			</div>
		</div>
	);
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

export default connect(mapStateToProps)(App)
