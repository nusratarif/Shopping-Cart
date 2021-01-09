import React, { useContext } from 'react';
import ManProducts from './../man.json';
import { Link } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';



function ManCat() {
    
    let { addProduct, timedMsg } = useContext(ProductContext);

    const addToCart = (Products) => {
        //setCount(count + 1);
        addProduct(Products);
        timedMsg();
    }

    return(
        <div>
            <h1>Products For Men</h1>
            <div className='productContainer'>
                {Object.keys(ManProducts).map(keyName=>{
                    return(
                        <div key={keyName} className='link'>
                        <Link key={keyName}
                        className='link'
                        to={'/manCat/'+keyName}>
                           <img src={ManProducts[keyName].url} alt={'Men'} width = {300} height={300}/>
                           <h5> {ManProducts[keyName].name}</h5>
                           <h5>Rs.  {ManProducts[keyName].price}</h5>
                        </Link>
                        <button className="bt" onClick={() => addToCart(ManProducts[keyName])}>{ManProducts[keyName].quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>

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

export default ManCat;
