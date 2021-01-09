import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ManProducts from '../man.json';
import WomanProducts from '../women.json';
import KidsProducts from '../kids.json';
import { ProductContext } from '../Context/ProductContext';

function ProductItem() {
    const { id } = useParams();
    const manproduct = ManProducts[id];
    const womanProduct = WomanProducts[id];
    const kidsproduct = KidsProducts[id];

    let {count, setCount, addProduct, timedMsg} = useContext(ProductContext);

    let fproduct = "";
    if (manproduct) {
        fproduct = manproduct;
    }
    else if (womanProduct) {
        fproduct = womanProduct;
    } else {
        fproduct = kidsproduct;
    }

     function addToCart(fproduct) {
         setCount(count+1);
         addProduct(fproduct);
         timedMsg();
     }
     
    return(
        <div>
            <h4>Product Item</h4>
            <div id='product'>
                 <img src={fproduct.url} alt = {'Products'} width = {300} height={300}/>
                 <h5> {fproduct.name}</h5> 
                 <h5>Rs. {fproduct.price}</h5>
                 <button className="item" onClick={()=>addToCart(fproduct)}>{fproduct.quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>         
            </div>
            <div id="msgContainer">
             <span><strong>Added To Cart</strong></span>
             </div>
             <div id="line"></div>
        </div>
    );

}

export default ProductItem;