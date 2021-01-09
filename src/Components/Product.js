import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ManProducts from './../man.json';
import WomanProducts from './../women.json';
import KidsProducts from './../kids.json';
import { ProductContext } from '../Context/ProductContext';




function Product() {
    let { count, setCount, addProduct, timedMsg } = useContext(ProductContext);

    const addToCart = (Products) => {
        setCount(count + 1);
        addProduct(Products);
        timedMsg();
    }

    return (
        <div>
            <h2>All Products Available</h2>
            <div className="productContainer">{Object.keys(ManProducts).map(keyName => {
                return (
                    <div key={keyName} className="link">
                        <Link key={keyName}
                            to={'/product/' + keyName}>
                            <img src={ManProducts[keyName].url} alt = {'Products for men'} width={300} height={300} />
                            <h5>{ManProducts[keyName].name}</h5>
                            <h5>Rs. {ManProducts[keyName].price}</h5>
                        </Link>
                        <button className="bt" onClick={() => addToCart(ManProducts[keyName])}>{ManProducts[keyName].quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>

                    </div>
                )
            })}
            </div>
            <div className='productContainer'>{Object.keys(WomanProducts).map(keyName => {
                return (
                    <div key={keyName} className="link">
                        <Link key={keyName}
                            to={'/product/' + keyName}>
                            <img src={WomanProducts[keyName].url} alt = {'Products for women'} width={300} height={300} />
                            <h5>{WomanProducts[keyName].name}</h5>
                            <h5>Rs. {WomanProducts[keyName].price}</h5>
                        </Link>
                        <button className="bt" onClick={() => addToCart(WomanProducts[keyName])}>{WomanProducts[keyName].quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>
                    </div>
                )
            })}
            </div>
            <div className='productContainer'>{Object.keys(KidsProducts).map(keyName => {
                return (
                    <div key={keyName} className="link">
                        <Link key={keyName}
                            to={'/product/' + keyName}>
                            <img src={KidsProducts[keyName].url} alt = {'Products for kids'} width={300} height={300} />
                            <h5>{KidsProducts[keyName].name}</h5>
                            <h5>Rs. {KidsProducts[keyName].price}</h5>
                        </Link>
                        <button className="bt" onClick={() => addToCart(KidsProducts[keyName])}>{KidsProducts[keyName].quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>
                        <div id="msgContainer">
                            <span><strong>Added To Cart</strong></span>
                        </div>
                        <div id="line"></div>
                    </div>
                )
            })}

            </div>

        </div>
    );

}

export default Product;
