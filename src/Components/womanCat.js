import React, { useContext } from 'react';
import WomanProducts from './../women.json';
import { Link } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';


function WomanCat() {

    let { addProduct, timedMsg } = useContext(ProductContext);

    const addToCart = (Products) => {
        addProduct(Products);
        timedMsg();
    }

    return(
        <div>
            <h1>Products For Women</h1>
            <div className='productContainer'>
                {Object.keys(WomanProducts).map(keyName=>{
                    return(
                        <div key={keyName} className='link'>
                        <Link key={keyName}
                        className='link'
                        to={'/womanCat/'+keyName}>
                            <img src = {WomanProducts[keyName].url} alt = {'Women'} width={300} height={300}/>
                            <h5>{WomanProducts[keyName].name}</h5>
                            <h5>Rs. {WomanProducts[keyName].price}</h5>
                        </Link>
                        <button className="bt" onClick={() => addToCart(WomanProducts[keyName])}>{WomanProducts[keyName].quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>
                        </div>
                    )
                }
                )
                }
            </div>
            <div id="msgContainer">
             <span><strong>Added To Cart</strong></span>
             </div>
             <div id="line"></div>
        </div>
    );

}

export default WomanCat;