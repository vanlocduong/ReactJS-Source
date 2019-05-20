import React, { Component } from 'react'
import EditUser from './EditUser.js';
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            tempValue: '',
            userObj : {}
        }
    }
    
    getUserEditInfo = (info)=>{
        this.setState({
            userObj: info
        });
        // console.log(info.name);
        this.props.getUserEditInfoApp(info);
    }

    // ham tim kiem gia tri
    isChangeSearch =(valueChange)=>{
        console.log(valueChange.target.value)
        this.setState({
            tempValue : valueChange.target.value
        });
        this.props.checkConnectionSearch(this.state.tempValue);  // tim kiem live
    }

    // hien thi nut 2 button
    hienThiNut=()=>{
        if (this.props.hienThiForm===true){
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}> Đóng Lại </div>;
        }else{
            
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}> Thêm Mới </div>;
        }
    }
    isChangeShowEditForm =() =>{
        if (this.props.editUserStatus === true){
            return <EditUser
            getUserEditInfo = {(info)=> {this.getUserEditInfo(info)}}
             userEditObject={this.props.userEditObject}
             changeEditUserStatus={this.props.changeEditUserStatus}/>
        }
    }
  render() {
    return (
        <div>
        <div className="col-12">
            <div className="row">
                    {this.isChangeShowEditForm()}
            </div>
            <div className="form-group">
                <div className="btn-group">
                    <input type="text" className="form-control" style={{ width: '600px' }} 
                     placeholder="Nhập từ khóa" onChange={(valueChange)=>this.isChangeSearch(valueChange)}/>
                        <div className="btn btn-info" onClick={(dl)=>this.props.checkConnectionSearch(this.state.tempValue)}> Tìm </div>
                </div>
            </div>
                <div className="btn-group1">
                    {this.hienThiNut()}
                    
                </div>
            <hr/>
        </div>
        </div>
    )
  }
}
