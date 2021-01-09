import React, { createContext, useState } from 'react';

const productList = []
export const ProductContext = createContext(productList);

const ProductContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  let [count, setCount] = useState(0);

  const addProduct = (productObj) => {

    let found = 0;
    for (var i = 0; i < productList.length; i++) {
      if ((productList[i].id === productObj.id) && (productList[i].inCart === true)) {
        productList[i].quantity += 1;
        setProductList(productList);
        setCount(count + 1);
        found = 1;
      }
    }
    if (found === 0) {
      productObj["quantity"] = 1;
      setProductList([...productList, { url: productObj.url, name: productObj.name, id: productObj.id, price: productObj.price, quantity: productObj.quantity, inCart: true }]);
      setCount(count + 1);
    }

  };

  const removeProduct = (id, qty) => {

    setProductList(productList.filter(product=>product.id !==id));
    setCount(count - qty);
  };

  const lessOneProduct = (id) => {

    for (var jj = 0; jj < productList.length; jj++) {
      if (productList[jj].id === id) {
        var qty = productList[jj].quantity;
        if (qty) {
        productList[jj].quantity -= 1
        setProductList(productList);
        setCount(count - 1);
        }
      }
    }
  };


  function productsCount() {
    let counter = 0;
    for (var i = 0; i < productList.length; i++) {
      counter = counter + productList[i].quantity;
    }
    setCount(counter);
    return count;
  }

  function timedMsg() {
    var x = document.getElementById("msgContainer");
    var y = document.getElementById("line");
    x.style.display = 'block';
    y.style.display = 'block';
    y.style.width = '240px';
    setTimeout(function () { x.style.display = 'none' }, 2000);
    setTimeout(function () { y.style.width = '0px' }, 1000);
  }

  return (
    <ProductContext.Provider value={{
      productList: productList,
      addProduct: addProduct,
      removeProduct: removeProduct,
      lessOneProduct: lessOneProduct,
      productsCount: productsCount,
      count: count,
      setCount,
      timedMsg
    }}>
      {children}
    </ProductContext.Provider>
  )
}


export default ProductContextProvider;
