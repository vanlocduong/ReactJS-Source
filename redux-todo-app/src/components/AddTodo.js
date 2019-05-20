import { React } from 'react';

const AddTodo = ({dispatch}) =>{
    let input;
    return(
        <div>
            <form>
                <input> nhap du lieu </input>
                <button type ="submit"> ShowAll</button>
            </form>
        </div>
    )
}
export default AddTodo;
