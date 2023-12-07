import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  state = { };

  render() {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardTrunfo,
      className,
    } = this.props;
    return (
      <section id="card-preview" className={ className }>
        <h1 id="name_preview">{ cardName }</h1>
        <img
          id="image_preview"
          src={ cardImage }
          alt={ cardName }
        />
        {cardTrunfo ? (
          <h6
            id="mega-brawler"
          >
            Mega Brawler!

          </h6>) : null}
        <section id="card-stats">
          <h3 id="attack">{cardAttr1}</h3>
          <h3 id="health">{cardAttr2}</h3>
          <h3 id="energy">{cardAttr3}</h3>
        </section>
      </section>
    );
  }
}

Card.propTypes = {
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
