import React, { useContext } from 'react';
import KidsProducts from './../kids.json';
import { Link } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';



function KidsCat() {

    let { addProduct, timedMsg } = useContext(ProductContext);

    const addToCart = (Products) => {
        //setCount(count + 1);
        addProduct(Products);
        timedMsg();
    }

    return(
        <div>
            <h1>Products For Kids</h1>
            <div className='productContainer'>
                {Object.keys(KidsProducts).map(keyName=>{
                    return(
                        <div key={keyName} className="link">
                        <Link key={keyName}
                        className='link'
                        to={'/kidsCat/'+keyName}>
                            <img src = {KidsProducts[keyName].url} alt = {'Kids'} width={300} height={300} />
                            <h5>{KidsProducts[keyName].name}</h5>
                            <h5>Rs. {KidsProducts[keyName].price}</h5>
                        </Link>
                        <button className="bt" onClick={() => addToCart(KidsProducts[keyName])}>{KidsProducts[keyName].quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>
                        </div>
                    )
                })
                }

            </div>
            <div id="msgContainer">
             <span><strong>Added To Cart</strong></span>
             </div>
             <div id="line"></div>
        </div>
    );

}

export default KidsCat;
