import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Product from './Product';
import axios from 'axios'
// import AddProduct from './AddProduct';
const getProductData = ()=>
  axios.get('/getData')
    .then((res)=> res.data)
const addProductActon = (product_name, product_price, image)=>
  axios.get('/add', {product_name, product_price, image})
    .then((resp)=> resp.data)

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: null,
       product_name: '',
            product_price:'',
            image:'',
    }
  }
  
  componentWillMount() {
    if(this.state.data === null){
      getProductData().then((res) => {
        this.setState({
          data: res
        }
        );
      })
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
        var  dataTemp = [];
        var item = {};
        item.product_name = product_name;
         item.product_price = product_price;
          item.image = image;
          if(item.product_name !== null){
            dataTemp.push(item);        
          }
          console.log(dataTemp);
        addProductActon(product_name,product_price, image).then((response)=>{
            console.log(response)
        })
        
    }

  printData =()=>{
    if(this.state.data !== null){
      return this.state.data.map((value,key)=>
        (<Product
         key = {key}
          product_name={value.product_name}
          product_price={value.product_price}
          image={value.image}
        />)
      )
    }
  }
  
  render() {

    // console.log("data ", this.state.data);
    
    // Make a request for a user with a given ID
    // axios.get('http://localhost:4000/getData')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    return (
      <div >
        <Header/>.
          {/* <div className="col-8 mx-auto"> */}
            {/* <AddProduct/> */}
          {/* </div> */}
        

        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="row">
               {this.printData()}
            </div>
          </div>
        <div className="col-3">
          <div className="row">
          <div>
            <form>
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
         </div>
        </div>
      </div>
    );
  }
}

export default App;
