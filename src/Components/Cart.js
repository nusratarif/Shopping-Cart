import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';


const Cart = () => {
  const { productList, addProduct, removeProduct, productsCount, lessOneProduct } = useContext(ProductContext);


  function totalPriceCal() {
    let total = 0;
    for (var i = 0; i < productList.length; i++) {
      total = total + productList[i].price * productList[i].quantity;
    }
    return total;
  }

  return productList.length ? (
    <div>
      <h3>Shopping List</h3>
      <hr />

      {productList.map((productObj, ind) => {
        return (
          <div className="shoppingList">

            <DeleteIcon className="del" onClick={() => removeProduct(productObj.id, productObj.quantity)} />
            <div style={{ width: 170, height: 125 }}>
              <span>{productObj.name}</span>
              <img src={productObj.url} alt = {'Product'} width={100} height={100} />
            </div>
            <span>${productObj.price}</span>
            <div className='qty-Container'>
              <span><AddCircleIcon className="del" onClick={() => addProduct(productObj)} /></span>
              <span>{productObj.quantity}</span>
              <span><IndeterminateCheckBoxIcon className="del" onClick={() => lessOneProduct(productObj.id)} /></span>
            </div>
            <div>SubTotal = {productObj.price * productObj.quantity}</div>
          </div>
        )
      })}
      <div className="shoppingList">
        <h2>Total Number Of Products</h2>
        <h4>{productsCount()}</h4>
        <h2>Total Price</h2>
        <h4>${totalPriceCal()}</h4>
      </div>
      <button className='chkoutButton'>CHECK OUT</button>
    </div>
  ) : (

      <div className='emptyCart'>
        Your Cart is empty
      </div>


    );
}

export default Cart;