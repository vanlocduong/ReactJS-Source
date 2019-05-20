import React, { Component } from 'react'
import TableDataRow from './TableDataRow.js';


export default class TableData extends Component {

    deleteUserClick =(idUser)=>{
        this.props.deleteUser(idUser);
    }

    mappingDataUser =()=>{
        return  this.props.dataUserProps.map((value,key)=>(
            <TableDataRow 
            deleteUserClick={(idUser) => this.deleteUserClick(idUser)}
            changeEditUserStatus={this.props.changeEditUserStatus} 
            editFunClick={(user) => this.props.editFun(value) }
            id = { value.id}
             stt={key} username={value.name} sodt={value.tel} 
             permisssion={value.permisssion}></TableDataRow>
        )
        )
    }
   
  render() {
    //   console.log(this.props.dataUserProps);
    //   console.log(this.props.sodt);
    return (
        <div className="col">
            <table className="table table-striped table-inverse table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Vị Tướng </th>
                        <th>Số Mật Danh</th>
                        <th>Vai Trò</th>
                        <th>Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mappingDataUser()} 
                </tbody>
            </table>
        </div>
    )
  }
}
