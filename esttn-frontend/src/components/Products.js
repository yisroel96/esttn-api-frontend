import React, { Component } from 'react' 
import CreateProductContainer from './CreateProductComponent';

  const Product = (props) => {
    // begin loading*************
    if (props.les.length > 0) {
    console.log(props.les)
      return (

      <div>
       {props.les[0].products.map( p => (
         <p>{p.name}</p>
       ))}

       <CreateProductContainer />
      </div>
      )  
      } 
      else {
        return(
        <h4>Loading...</h4>)
      } 
    }

    export default Product