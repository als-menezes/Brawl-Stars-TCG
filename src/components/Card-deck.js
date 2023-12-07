import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardDeck extends Component {
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
      <section id="card-deck" className={ className }>
        <h1 did="name_deck">{ cardName }</h1>
        <img
          id="image_preview"
          src={ cardImage }
          alt={ cardName }
        />
        {cardTrunfo ? (
          <h6
            id="mega-brawler-deck"
          >
            Mega Brawler!

          </h6>) : null}
        <section id="card-stats-deck">
          <h3 id="attack-deck">{cardAttr1}</h3>
          <h3 id="health-deck">{cardAttr2}</h3>
          <h3 id="energy-deck">{cardAttr3}</h3>
        </section>
      </section>
    );
  }
}

CardDeck.propTypes = {
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default CardDeck;
