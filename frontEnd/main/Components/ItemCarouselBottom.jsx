import React, { useState } from 'react';
import Item from './Item.jsx';
import $ from 'jquery';

const ItemCarouselBottom = (props) => {

  // index variable for helping to control what items are currently being viewed
  let itemArray = Array.from(props.data);
  itemArray = itemArray.slice(0, 14);

  const [index, setIndex] = useState(1);
  var scrollIndex = index;
  // const [endIndex, setendIndex] = useState(9);
  const [carouselData, setCarouselData] = useState(itemArray);
  // const [carouselData, setCarouselData] = useState(itemArray.slice(index, endIndex));
  const spot = [0, 1020, 2040];
  const [scroll, setScroll] = useState(spot[1]);
  
//========================================================================
// functions for controlling the arrow buttons on the side of the carousel
//========================================================================
    const nextItems = () => {
      // starts at 0 but is otherwise equal to 'index'
      
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
                    <h2 className="peopleAlsoBought">People also bought
                    <span className="xItems2">{'(' + carouselData.length + ')'}</span>
                    </h2>
                </div>
                <div className="bottomLine2"></div>
                <div className="carouselBody2">
                    <div className="carouselChildWrapper2">
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

