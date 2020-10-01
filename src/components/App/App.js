import React, { Component } from 'react';
import './App.css';
import Product from '../Product/Product';
import Modal from '../Modal/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      products : [
        {
          name 	: "Laptop Asus",
          price 	: "10000000",
          images 	: "/images/products/p1.png",
          hot 	: true
        },
        {
          name 	: "Điện Thoại Asus",
          price 	: "40000000",
          images 	: "/images/products/p2.png",
          hot 	: false
        },
        {
          name 	: "Điện Thoại iPhone X",
          price 	: "55000000",
          images 	: "/images/products/p3.png",
          hot 	: true
        },
        {
          name 	: "Macbook",
          price 	: "55000000",
          images 	: "/images/products/p4.png",
          hot 	: true
        },
        {
          name 	: "Laptop HP",
          price 	: "96000000",
          images 	: "/images/products/p4.png",
          hot 	: false
        },
        {
          name 	: "Laptop Lenovo",
          price 	: "26000000",
          images 	: "/images/products/p3.png",
          hot 	: true
        }
      ]
    };
  }

  deleteProduct = (id) => {
    var arrProduct = this.state.products;
    arrProduct.splice(id,1);
    this.setState({products : arrProduct});
  }

  editNameProduct = (id,name) => {
    var arrProduct = this.state.products;
    arrProduct[id].name = name;
    this.setState({products : arrProduct});
  }

  show_product = () => {
    const listProduct = this.state.products.map((item,index) =>
      <Product key={index} index={index} price={ item.price } edit={ (id,name) => { this.editNameProduct(id,name) } } delete={ (id) => { this.deleteProduct(id) } } images={ item.images} hot={ item.hot }>{ item.name }</Product>
    );

    return listProduct;
  }
  

  render() {
    return (
      <div className="App">
        <div className="container">
          { this.show_product() }

          <Modal />
        </div>
      </div>
    );
  }
}

export default App;
