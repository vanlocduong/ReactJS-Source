import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { firebaseConnect } from './firebaseConnect.js';
import * as firebase from 'firebase'

class App extends Component {

  pushData = ()=>{
    var dataConnect = firebase.database().ref('dataForNote');
    dataConnect.push({
      title : " sai gon ",
      contentNote: " sai gon dep lam ",
    })
  }

  deleteData = (id)=>{
    var dataConnect = firebase.database().ref('dataForNote');
    dataConnect.child(id).remove();
    console.log('da xoa thanh cong ', id);
    
  }


  render() {
    console.log(firebaseConnect);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
         Duonv Van Loc
         <button onClick = {() => this.pushData()} > Click Them moi Du Lieu</button>
          <button onClick={() => this.deleteData('Note1')} > Click Xoa Du Lieu</button>
        
        </header> 
      </div>
    );
  }
}

export default App;
