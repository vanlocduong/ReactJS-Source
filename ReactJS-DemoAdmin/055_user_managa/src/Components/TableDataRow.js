import React, { Component } from 'react'

export default class componentName extends Component {
  setPermisson = () => {
    if(this.props.permisssion === 1){
      return "Sát Thủ";
    }else if (this.props.permisssion === 2){
      return "Xạ Thủ";
    }else {
      return "Pháp Sư";
    }
  }

  

  editFunClickRow = () => {
    this.props.editFunClick();
    this.props.changeEditUserStatus();
  
  }

  deleteUserClick =(idUser)=>{
    this.props.deleteUserClick(idUser);
  }

  render() {
    return (
      
            <tr>
                <td >{this.props.stt}</td>
                <td>{this.props.username}</td>
                <td>{this.props.sodt}</td>
                <td>{this.setPermisson()}</td>
                <td>
                    <div className="btn-group">
                         <div className="btn btn-warning sua" onClick={() => this.editFunClickRow()}>
                          <i className="fa fa-edit " />Sửa</div>
                        <div className="btn btn-danger xoa" onClick={(idUser) => this.deleteUserClick(this.props.id)}>
                         <i className="fa fa-delete " />Xóa</div>
                    </div>
                </td>
            </tr>
    
    )
  }
}
