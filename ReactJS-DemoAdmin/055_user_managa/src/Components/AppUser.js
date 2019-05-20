import React, { Component } from 'react'

export default class AppUser extends Component {

    constructor(props) {
      super(props);
      this.state ={
        id: "",
        name: "",
        tel: "",
        permisssion: "",

      }
    }
    
    // is change input
    isChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState ({
        // set arr name to value input
          [name] : value
      })
      // package to item
      // var item ={};
      // item.id = this.state.id;
      // item.name = this.state.name;
      // item.tel = this.state.tel;
      // item.permisssion = this.state.permisssion;
      // console.log(item);
    }

    hienThiForm =()=>{
      if (this.props.hienThiForm === true) {
        return (
          <div className="col">
          <form>
          <div className="card boder-primary mb-3 mt-2">
            <div className="card-header">Thêm mới User vào hệ thống</div>
            <div className="card-body text-primary">
              <div className="form-group">
                <label >Tên User</label>
                  <input onChange={(event) => { this.isChange(event)}} name= "name" type="text" className="form-control" placeholder="user name" aria-describedby="helpId" />
              </div>
              <div className="form-group">
                <label >Điện Thoại</label>
                  <input onChange={(event) => { this.isChange(event) }} type="text" className="form-control" name= "tel" placeholder="so dien thoai" aria-describedby="helpId" />
              </div>
              <div className="form-group" required>
                <label >Text</label>
                  <select onChange={(event) => { this.isChange(event) }} id="my-input" name = "permisssion" className="custom-select">
                  <option value>Chọn Quyền Mặc Định</option>
                  <option value={2}>admin</option>
                  <option value={3}>khách</option>
                  <option value={4}>client</option>
                </select>
              </div>
              <div className="form-group">
                <input type="reset" className="btn btn-block btn-primary"
                    onClick={(name, tel, permisssion) => this.props.add(this.state.name, this.state.tel, this.state.permisssion)} value="Thêm Mới">
                 </input>
              </div>
            </div>
          </div>
            </form>
          </div>
        );
      }
    }

  render() {
    return (
        <div >
          {this.hienThiForm() }
          
        </div>
    )
  }
}
