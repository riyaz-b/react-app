import React, { Component } from "react";


const smartphones = [
  { id: 1, name: "iPhone 15 Pro", price: "₹1,34,900", brand: "Apple" },
  { id: 2, name: "Samsung Galaxy S24 Ultra", price: "₹1,29,999", brand: "Samsung" },
  { id: 3, name: "OnePlus 12", price: "₹64,999", brand: "OnePlus" },
  { id: 4, name: "Google Pixel 8 Pro", price: "₹1,06,999", brand: "Google" }
];

const cars = [
  { id:1, brand: "Ford", model: "Mustang", color: "red", year: 1964 },

];

class State extends Component {

  
   constructor(props) {
      super(props);
      this.state = {
        car :cars[0],
        smartphones : smartphones,
        showSmartphones: false
     };
    }
  
  


     changeColor = () => {
       this.setState(prevState => ({
        car: {
          ...prevState.car,
          color: prevState.car.color === "red" ? "blue" : "red"
         }
    }));
  }
      
 
toggleSmartphones = () => {
   this.setState(prevState => ({
    showSmartphones: !prevState.showSmartphones
    }));
  };
  

displaySmartphones = () => {
   return this.state.smartphones.map(phone => (
    <div key={phone.id}>
        <h2>{phone.name}</h2>
          <p>Price: {phone.price}</p>
          <p>Brand: {phone.brand}</p>
      </div>
      ));
    };
  

  render() {
    const { car, showSmartphones } = this.state;
    return (
      <div>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color}   {car.model} from {car.year}.
        </p>
        <button type="button" onClick={this.changeColor}>Change color</button>
        <button type="button" onClick={this.toggleSmartphones}>
               {showSmartphones ? "Hide smartphones" : "Display smartphones"}
        </button>      
        {showSmartphones && (
        <div>
            <h2>Smartphones:</h2>
             {this.displaySmartphones()}
       </div>
        )}
      </div>
    );
  }
}
  
export default State;