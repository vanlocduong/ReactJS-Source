import React, { Component } from 'react'

export default class componentName extends Component {

    constructor(props) {
        super(props);
        this.state={
            id : this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permisssion: this.props.userEditObject.permisssion,
            userObj: {}
        }
    }
    

    isChangeUpdateUser = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    saveButton =() =>{
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permisssion = this.state.permisssion;
        
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }

  render() {
      console.log(this.state);
    return (
        <div className="col-12">
            <form method="post">
                <div className="card text-while bg-warning mb-3 mt-2">
                    <div className="card-header text-center">Sửa  User vào hệ thống</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <label >Tên User</label>
                            <input onChange ={(event)=>this.isChangeUpdateUser(event)}
                            defaultValue = {this.props.userEditObject.name} 
                            name="name" type="text" className="form-control" 
                            placeholder="user name" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label >Điện Thoại</label>
                            <input onChange ={(event)=>this.isChangeUpdateUser(event) }
                            defaultValue={this.props.userEditObject.tel} type="text" className="form-control"
                             name="tel" placeholder="so dien thoai" aria-describedby="helpId" />
                        </div>
                        <div className="form-group" required>
                            <label >Text</label>
                            <select onChange ={(event)=>this.isChangeUpdateUser(event)}
                            defaultValue={this.props.userEditObject.permisssion} id="my-input" 
                            name="permisssion" className="custom-select">
                                <option value>Chọn Quyền Mặc Định</option>
                                <option value={2}>admin</option>
                                <option value={3}>khách</option>
                                <option value={4}>client</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input onClick={()=> this.saveButton()} type="button" className="btn btn-block btn-primary"
                                 value="Lưu">
                            </input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
  }
}
