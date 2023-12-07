import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RuleBanner extends Component {
  render() {
    const {
      showRules,
    } = this.props;

    return (
      <section id="rule-banner">
        <h1>
          Regras para
          {' '}
          <br />
          criação do deck
        </h1>
        <ul style={ { textAlign: 'left', fontSize: '1.3em' } }>
          <li>Seu deck deverá ter 10 cartas.</li>
          <li>O valor máximo permitido para cada atributo é 90.</li>
          <li>A soma dos três atributos não pode ultrapassar 210.</li>
          <li>Seu deck só poderá ter 1 Mega Brawler.</li>
        </ul>
        <button
          type="button"
          className="btn btn-dark"
          onClick={ showRules }
        >
          Começar agora!
        </button>
      </section>
    );
  }
}

RuleBanner.propTypes = {
  showRules: PropTypes.bool,
}.isRequired;

export default RuleBanner;
