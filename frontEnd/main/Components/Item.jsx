import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
// import Typography from '@material-ui/core/Typography';

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
                    <span className="itemPrice">{'$' + props.data.regularPrice}</span>
                </div>
            </div>
            <div className="buttonContainer2">
                <button className="addToCartButton">
                    <i className="cartIcon"></i>
                    Add to Cart
                </button>
            </div>
        </div>
        </li>
        
    )
}

export default Item;
