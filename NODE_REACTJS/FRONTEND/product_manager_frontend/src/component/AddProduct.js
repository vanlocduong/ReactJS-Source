import React, { Component } from 'react'
import axios from 'axios'

const addProductActon = (product_name, product_price, image)=>
  axios.get('/add', {product_name, product_price, image})
    .then((resp)=> resp.data)

export default class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state ={
            product_name: '',
            product_price:'',
            image:'',
        }
    }
    isChange=(event)=>{
       var name = event.target.name;
        var value = event.target.value;
        var [name] = value;
        this.setState({
            [name]: value
        })
    }

    handleClick=()=>{
        var {product_name, product_price, image } = this.state;
        addProductActon(product_name,product_price, image).then((response)=>{
            console.log(response)
        })
        
    }
  render() {
    return (
        <div className="container">
          <div className="row">
          <div className="col-8 mx-auto">
            <form action="">
                <div className="form-group">
                    <label htmlFor="product_name">Tên Sản Phẩm</label>
                    <input type="text" onChange={(event)=> this.isChange(event)} className="form-control" name="product_name" id="product_name" aria-describedby="helpId" placeholder="Nhập vào tên sản phẩm" />
                    <small id="name_text" className="form-text text-muted">Nhập Text Vào</small>
                </div>
                <div className="form-group">
                    <label htmlFor="product_price">Giá Sản Phẩm</label>
                    <input type="text" onChange={(event)=> this.isChange(event)} className="form-control" name="product_price" id="product_price" aria-describedby="helpId" placeholder="Nhập vào giá sản phẩm" />
                    <small id="name_text" className="form-text text-muted">Nhập Text Vào</small>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Link Sản Phẩm</label>
                    <input type="text" onChange={(event)=> this.isChange(event)} className="form-control" name="image" id="image" aria-describedby="helpId" placeholder="Nhập vào link sản phẩm" />
                    <small id="name_text" className="form-text text-muted">Nhập Link Ảnh Vào</small>
                </div>
                <button type="reset" className="btn btn-primary" onClick={()=> this.handleClick()}>Thêm mới</button>
            </form>
        </div>
        </div>
        </div>
    )
  }
}
