import React, { Component } from 'react';
class Display extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            <div id={`product-${this.props.data.id}`} className="product">
				<img src={this.props.data.image} />
				<h3 className="title"><a href="#">{this.props.data.name}</a></h3>
				<span>Price: ${this.props.data.price}</span>
				<a className="add-to-cart" href="#">Add To Cart</a>
			</div>
            </>
         );
    }
}
 
export default Display;