import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';

const Item = (props) => {
    // boolean for whether the add to cart button has been clicked
    const [added, setAdded] = useState('Add to Cart');
    // needed to make the cart icon dissapear on click
    const [showing, setShowing] = useState('visible');
    // place holder style to be updated when the 'added' state changes
    const [clicked, setClicked] = useState({});

    return (
        <li className="liItemContainer2">
        <div className="itemContainer2">
            {/* if image is clicked it will update the window.id */}
            <div className="image2">
                <img className="itemImage2" 
                     src={props.data.product_image} 
                     onClick={() => props.getId(props.data.id)}>                     
                </img>
            </div>
            {/* if the product name is clicked it will update the window.id */}
            <div className="name">
                <p className="itemName" onClick={() => props.getId(props.data.id)}>{props.data.product_name}</p>
            </div>
            <div className="reviewsAndPriceDiv">
                <ul className="review">
                    <li className="liReviews">
                        <div className="liDiv">
                            <i className="stars">
                                {/* star rating component from material ui, https://material-ui.com/components/rating/#rating */}
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
                {/* tells the current price including the death of circuit city discounts */}
                <div className="price">
                    <span className="itemPrice">{'$' + (Math.floor(props.data.regularPrice * .20)) + '.99'}</span>
                </div>
                {/* pre discount price retreived directly from the database */}
                <div className="priceDiscount">
                    <span className="itemPriceDiscount">{'$' + props.data.regularPrice}</span>
                </div>
            </div>
            {/* on click this button with change the 'clicked' state and add the styling within the 
            setClicked object */}
            <div className="buttonContainer2">
            <button className="addToCartButton" style={clicked} onClick={() => {
                setAdded('Added to Cart')
                setShowing('hidden')
                setClicked({
                
                    color: '#55555a',
                    backgroundColor: '#c5cbd5',
                    borderColor: '#c5cbd5'
                })
            }}>
                {/* material ui shopping cart icon */}
                <div className="cartIcon" style={{visibility: showing}}>
                    <ShoppingCartIcon />
                </div>
                <h2 className="cartText">{added}</h2>
                </button>
            </div>
        </div>
        </li>
        
    )
}

export default Item;


