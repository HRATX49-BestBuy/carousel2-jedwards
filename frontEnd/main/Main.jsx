import React, {Component} from 'react';
import ItemCarousel2 from './Components/ItemCarousel';
import Axios from 'axios';
import _ from 'underscore';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      products: [],
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

    Axios.get('/products')
      .then( res => {
        let products = _.shuffle(res.data);
        this.setState({products: products}, () => this.setState({loaded: true}));
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
        <ItemCarousel2 data={this.state.products} getId={this.getId}/>
      </div>
    )
  }

  render() {

      return (
        
        <div className="mainContainer">
          {this.state.loaded === true ? this.renderCarousel() : null}
        </div>
      )

    }
}

export default App;
