import { noteData } from './firebaseConnect';
import { connect } from 'react-redux'

var redux = require('redux');


const noteinitialState = {
    isEdit : false,
		editItem : {},
		isAdd : false,
		alertShow: false,
		alertContent: '',
}

const allReducer = (state = noteinitialState, action) => {
  switch (action.type) {
		case 'ADD_DATA':
			noteData.push(action.getItem);
			//  console.log(" them thanh cong bien nhan vao la ", JSON.stringify(action.getItem));
			return state;
		case 'CHANGE_EDIT_STATUS':
			return { ...state, isEdit: !state.isEdit };
		case 'CHANGE_ADD_STATUS':
			return { ...state, isAdd: !state.isAdd };
		case 'GET_EDIT_DATA':
			return { ...state, editItem: action.editObject };
		case 'DELETE_DATA':
			noteData.child(action.idData).remove();
			return { ...state, editItem: {} };
		case 'EDIT':
			noteData.child(action.getItem.id).update({
				noteTitle: action.getItem.noteTitle,
				noteContent: action.getItem.noteContent,
			});
			console.log('du lieu da cap nhat ', JSON.stringify(action.getItem));
			return { ...state, editItem: {} };
		case 'CHANGE_ALERT_ON':
			return { ...state, alertShow: true, alertContent: action.alertcontent };
		case 'CHANGE_ALERT_OFF':
			return { ...state, alertShow: false, alertContent: action.alertcontent };
		default:
			return state;
  }
}

var store = redux.createStore(allReducer);
store.subscribe(function(){
  console.log(JSON.stringify(store.getState()));
});

export default store;

