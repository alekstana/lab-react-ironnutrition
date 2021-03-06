import React, { Component } from 'react';

class Foodbox extends Component {
    state = {
        name: this.props.food.name,
        quantity: this.props.food.quantity,
        calories: this.props.food.calories
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ quantity: e.target.value })
    }

  render() {
    const { food , addQuantity } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={this.state.quantity} onChange={this.handleChange} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={()=>{this.props.toSum(this.state)}}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Foodbox;
