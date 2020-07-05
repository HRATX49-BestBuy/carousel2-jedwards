import React, {Component} from 'react';
import ItemCarouselTop from './Components/ItemCarouselTop';
import ItemCarouselBottom from './Components/ItemCarouselBottom';
import Axios from 'axios';
import _ from 'underscore';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      products: [],
      otherProducts: [],
      loaded: false,
    }

    this.getProducts = this.getProducts.bind(this);
    this.renderCarousel = this.renderCarousel.bind(this);
    this.getId = this.getId.bind(this);
  }

  componentDidMount() {

    this.getProducts();

  }

  getProducts() {

    Axios.get('/products2')
      .then( res => {

        let products = _.shuffle(res.data);
        let otherProducts = _.shuffle(res.data);

        this.setState({products: products, otherProducts: otherProducts}, () => this.setState({loaded: true}));
      })
      .catch( err => {

        console.error('error with getting products', err);
      })
  }
  
  getId(event) {

    window.id = event;

    console.log('Here is the window id', window.id);
  }

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
          <img src="https://carouselbundle.s3.us-east-2.amazonaws.com/images/boughtTogether.png" className="boughtTogether"></img>
          {this.state.loaded === true ? this.renderCarousel() : null}
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
