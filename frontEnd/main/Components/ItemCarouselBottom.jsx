import React, { useState } from 'react';
import Item from './Item.jsx';
 
const ItemCarouselBottom = (props) => {

    // index variable for helping to control what items are currently being viewed
    let itemArray = Array.from(props.data);

    const [ index, setIndex ] = useState(0);
    const [ endIndex, setEndIndex ] = useState(5);
    const [ carouselData, setCarouselData ] = useState(itemArray.slice(index, endIndex));

//========================================================================
// functions for controlling the arrow buttons on the side of the carousel
//========================================================================
    const nextItems = () => {
        
        if (endex <= 94) {
            setIndex(index + 5);
            setEndIndex(endIndex + 5);
        }
        setCarouselData(itemArray.slice(index, endIndex));
    }

    const previousItems = () => {

        if (index >= 5) {
            setIndex(index - 5);
            setEndIndex(endIndex - 5);
        }
        setCarouselData(itemArray.slice(index, endIndex));
    }

    return (
        <div className="mainContainer2">
            <div className="carouselContainer2">
                <div className="carouselHeader2">
                    <h2 className="peopleAlsoBought">People also bought<span className="xItems2">{'(' + Math.round(Math.random() * props.data.length) + 20 + ')'}</span></h2>
                </div>
                <div className="bottomLine2"></div>
                <div className="carouselBody2">
                    <div className="carouselChildWrapper2">
                    <button className="previousButton" onClick={() => previousItems()}>
                        <svg className="svgLeft"><path className="pathLeft"></path></svg>
                    </button>
                        <ul className="ulCarousel2">
                        {carouselData.map((item, i) => {
                            return (

                                <Item key={i} data={item} rating={item.customer_review_AVG} getId={props.getId} />
                            )
                        })}
                        </ul>
                    <button className="nextButton" onClick={() => nextItems()}>
                        <svg className="svgRight"><path className="pathRight"></path></svg>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCarouselBottom;

