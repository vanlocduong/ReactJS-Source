import numReducer from './reducer/NumReducer';
import statusReducer from './reducer/StatusReducer';

var redux = require('redux');
var oldState = {
    num: ["man hinh ", "chuot ", "ban phim "],
    status: true,
}
var reducer = (state = oldState, action) => {
    switch (action.type) {
        case "CHANGE_EDIT_STATUS":
            return { ...state, status: !state.status }

        case "NEW_ITEM":
            return { ...state, num: [...state.num, action.newItem] }

        case "DELETE":
            return { ...state, num: state.num.filter((value, i) => i !== action.num) }

        default:
            return state;
    }

}




const allReducer = redux.combineReducers({
    num: numReducer,
    status : statusReducer,
})

var store1 = redux.createStore(allReducer);
store1.subscribe(() => {
    console.log(JSON.stringify(store1.getState()));
})

store1.dispatch({ type: "CHANGE_EDIT_STATUS" })

store1.dispatch({
    type: "NEW_ITEM",
    newItem: "Lap Top ",
})

store1.dispatch({
    type: "DELETE",
    num: 0,
})

export default store1;