import React, { useState } from 'react';
import Item from './Item.jsx';
import $ from 'jquery';

const ItemCarouselBottom = (props) => {

  // creates an array of all the items available in the carousel
  let itemArray = Array.from(props.data);
  itemArray = itemArray.slice(0, 14);
  // controls what position in the item list we are viewing
  const [index, setIndex] = useState(1);
  var scrollIndex = index;
  // controls the state of what items are in the carousel list  
  const [carouselData, setCarouselData] = useState(itemArray);
  // array holding the positions that are moved to on click within the slider
  const spot = [0, 1020, 2040];
  const [scroll, setScroll] = useState(spot[1]);
  
//========================================================================
// functions for controlling the arrow buttons on the side of the carousel
//========================================================================
    const nextItems = () => {

        // there is no scrollRight function
        // this scrolls the carousel to the specific position
        // within the spot array
        $(".ulCarousel3").animate({scrollLeft: scroll});

        scrollIndex++;
    
        if(scrollIndex > 2) {
    
            scrollIndex = 1;
        }
    
        setScroll(spot[scrollIndex]);
        console.log('index value 1', scrollIndex);
        
        setIndex(scrollIndex);
        console.log('scroll value', scroll);
        
    }

    const previousItems = () => {

        scrollIndex--;
        
        if(scrollIndex < 0) {
            
            scrollIndex = 1;

        } 
        setScroll(spot[scrollIndex]);
        console.log('index value 1', scrollIndex);

        setIndex(scrollIndex);
        console.log('scroll value', scroll);

        $(".ulCarousel3").animate({scrollLeft: scroll});

    }

    return (
        <div className="mainContainer2">
            <div className="carouselContainer2">
                <div className="carouselHeader2">
                    {/* shows the number of items next to the carousel title */}
                    <h2 className="peopleAlsoBought">People also bought
                    <span className="xItems2">{'(' + carouselData.length + ')'}</span>
                    </h2>
                </div>
                <div className="bottomLine2"></div>
                <div className="carouselBody2">
                    <div className="carouselChildWrapper2">
                    {/* the arrows on the side of the carousels that move the carousel through the items array */}
                    <button className="previousButton" onClick={() => previousItems()}>
                        <svg className="svgLeft"><path className="pathLeft"></path></svg>
                    </button>
                        <ul className="ulCarousel3">
                        {carouselData.map((item, i) => {
                            return (

                                <Item key={i} data={item} rating={item.customer_review_AVG} getId={props.getId} />
                            )
                        })}
                        </ul>
                    {/* the arrows on the side of the carousels that move the carousel through the items array */}
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

