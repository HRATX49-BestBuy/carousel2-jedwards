import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';

const Item = (props) => {

    return (
        <li className="liItemContainer2">
        <div className="itemContainer2">
            <div className="image2">
                <img className="itemImage2" src={props.data.product_image} onClick={() => props.getId(props.data.id)}></img>
            </div>
            <div className="name">
                <p className="itemName" onClick={() => props.getId(props.data.id)}>{props.data.product_name}</p>
            </div>
            <div className="reviewsAndPriceDiv">
                <ul className="review">
                    <li className="liReviews">
                        <div className="liDiv">
                            <i className="stars">
                                <Rating name="half-rating-read" 
                                        value={props.data.customer_review_AVG}
                                        precision={0.1} 
                                        size="small"
                                        emptyIcon={<GradeOutlinedIcon fontSize="inherit" />}
                                        readOnly 
                                />
                            </i>
                        <span className="totalReviews">{'(' + props.data.customerReviewCount + ')'}</span>
                        </div>
                    </li>
                </ul>
                <div className="price">
                    <span className="itemPrice">{'$' + (Math.floor(props.data.regularPrice * .75)) + '.99'}</span>
                </div>
                <div className="priceDiscount">
                    <span className="itemPriceDiscount">{'$' + props.data.regularPrice}</span>
                </div>
            </div>
            <div className="buttonContainer2">
                <button className="addToCartButton">
                    <div className="cartIcon">
                        <ShoppingCartIcon fontSize="15" />
                    </div>
                    <h2 className="cartText">Add to Cart</h2>
                </button>
            </div>
        </div>
        </li>
        
    )
}

export default Item;
