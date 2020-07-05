import React, {Component} from 'react';
import ItemCarouselTop from './Components/ItemCarouselTop';
import ItemCarouselBottom from './Components/ItemCarouselBottom';
import Axios from 'axios';
import _ from 'underscore';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // two states for products are needed for each carousel
      // to populate different items
      products: [],
      otherProducts: [],
      // state that determines whether the components render or not
      loaded: false,
    }
    // gets all the products from the database
    this.getProducts = this.getProducts.bind(this);
    // renders the carousels or any other element in it after products load
    this.renderCarousel = this.renderCarousel.bind(this);
    // get the products id on click and sets window.id to its value
    this.getId = this.getId.bind(this);
  }

  componentDidMount() {

    this.getProducts();

  }

  getProducts() {

    Axios.get('/products2')
      .then( res => {
        // makes two shuffled arrays of the same data
        let products = _.shuffle(res.data);
        let otherProducts = _.shuffle(res.data);
        // set the state of the products then allow the carousels to render to the page
        this.setState({products: products, otherProducts: otherProducts}, () => this.setState({loaded: true}));
      })
      .catch( err => {

        console.error('error with getting products', err);
      })
  }
  
  // some components need the id from items clicked within the carousel
  // this sets the window.id to the clicked items value
  getId(event) {

    window.id = event;

    console.log('Here is the window id', window.id);
  }

  // function called that renders the components after the product states are updated
  renderCarousel() {

    return(
      <div>
        <ItemCarouselTop data={this.state.products} getId={this.getId}/>
        <ItemCarouselBottom data={this.state.otherProducts} getId={this.getId}/>
      </div>
    )
  }

  render() {

      return (
        
        <div className="componentContainer">
          {/* image of the item directly above the two carousels */}
          <img src="https://carouselbundle.s3.us-east-2.amazonaws.com/images/boughtTogether.png" className="boughtTogether"></img>
          {/* conditional for making the carousels render */}
          {this.state.loaded === true ? this.renderCarousel() : null}
          {/* incomplete footer section */}
          <div className="footerBacking">
            <img src="https://carouselbundle.s3.us-east-2.amazonaws.com/images/footerBar.png" className="footerBar"></img>
          </div>
          <div className="footerLinksBacking">
            <img src="https://carouselbundle.s3.us-east-2.amazonaws.com/images/footerLinks.png" className="footer"></img>
          </div>
        </div>
      )

    }
}

export default App;
