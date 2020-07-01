import React, {useState} from 'react';
import Item from './Item.jsx';
 
const ItemCarousel2 = (props) => {

    // index variable for helping to control what items are currently being viewed
    let itemArray = Array.from(props.data);

    const [index, setIndex] = useState(0);
    const [endex, setEndex] = useState(5);
    const [carouselData, setCarouselData] = useState(itemArray.slice(index, endex));

//========================================================================
// functions for controlling the arrow buttons on the side of the carousel
//========================================================================
    const nextItems = () => {
        
        if (endex <= 95) {
            setIndex(index + 5);
            setEndex(endex + 5);
        }
        setCarouselData(itemArray.slice(index, endex));
    }

    const previousItems = () => {

        if (index >= 5) {
            setIndex(index - 5);
            setEndex(endex - 5);
        }
        setCarouselData(itemArray.slice(index, endex));
    }

    return (
        <div className="mainContainer2">
            <div className="carouselContainer2">
                <div className="carouselHeader2">
                    <h2 className="peopleAlsoBought">People also bought<span className="xItems2">{'(' + props.data.length + ')'}</span></h2>
                </div>
                <div className="bottomLine2"></div>
                <div className="carouselBody2">
                    <div className="carouselChildWrapper2">
                    <button className="previousButton" onClick={() => previousItems(3)}>
                        <svg className="svgLeft"><path className="pathLeft"></path></svg>
                    </button>
                        <ul className="ulCarousel2">
                        {carouselData.map((item, i) => {
                            return (

                                <Item key={i} data={item} rating={item.customer_review_AVG} getId={props.getId} />
                            )
                        })}
                        </ul>
                    <button className="nextButton" onClick={() => nextItems(3)}>
                        <svg className="svgRight"><path className="pathRight"></path></svg>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCarousel2;

