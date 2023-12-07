import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Logo from './components/Logo';
import CardDeck from './components/Card-deck';
import avatars from './images/avatars';
import RuleBanner from './components/RuleBanner';
import DeckTitle from './components/DeckTitle';

class App extends React.Component {
  state = {
    cardName: 'choose',
    cardDescription: 'test',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardRare: 'Raro',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    showRules: true,
    deck: [],
  };

  handleCardBG = (rarity) => {
    switch (rarity) {
    case 'Super raro':
      return 'card-bg2';
    case 'Épico':
      return 'card-bg3';
    case 'Mítico':
      return 'card-bg4';
    case 'Lendário':
      return 'card-bg5';
    case 'Cromático':
      return 'card-bg6';

    default:
      return 'card-bg1';
    }
  };

  onInputChange = ({ target }) => {
    const { name, value, checked, type } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  toggleShowRules = () => {
    const { showRules } = this.state;
    if (showRules) {
      this.setState({ showRules: false });
    } if (!showRules) {
      this.setState({ showRules: true });
    }
  };

  handleSaveButt = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    this.setState((prev) => ({
      deck: [...prev.deck, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      },
      ],
    }));
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState(
      { cardName: 'choose',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardRare: '',
        cardTrunfo: false,
      },
    );
  };

  handleRemoveBTN = (cardName, trunph) => {
    const { deck } = this.state;
    if (trunph) {
      this.setState({ hasTrunfo: false });
    }
    const updateDeck = deck.filter((card) => deck.indexOf(card) !== cardName);
    this.setState({ deck: updateDeck });
  };

  render() {
    const { deck, cardRare, cardName, cardTrunfo, showRules } = this.state;
    return (
      <div>
        <Logo />
        {showRules ? <RuleBanner showRules={ this.toggleShowRules } /> : (
          <main>
            <section id="form-section" className="box-model space-evenly">
              <Form
                { ...this.state }
                onInputChange={ this.onInputChange }
                onSaveButtonClick={ this.handleSaveButt }
                showRules={ this.toggleShowRules }
              />
              <Card
                { ...this.state }
                className={ this.handleCardBG(cardRare, cardTrunfo) }
                cardImage={ avatars[cardName] }
              />
            </section>
            {deck.length > 0 ? <DeckTitle /> : null}
            {deck.length > 0 ? (
              <section id="deck-list">
                {deck.map((card, index) => (
                  <div key={ index } style={ { margin: '1%' } }>
                    <CardDeck
                      className={ this.handleCardBG(card.cardRare) }
                      cardName={ card.cardName }
                      cardDescription={ card.cardDescription }
                      cardAttr1={ card.cardAttr1 }
                      cardAttr2={ card.cardAttr2 }
                      cardAttr3={ card.cardAttr3 }
                      cardImage={ avatars[card.cardName] }
                      cardRare={ card.cardRare }
                      cardTrunfo={ card.cardTrunfo }
                    />
                    <button
                      className="btn btn-dark"
                      id="remove-cardBTN"
                      type="button"
                      onClick={ () => this.handleRemoveBTN(index, card.cardTrunfo) }
                    >
                      Excluir

                    </button>
                  </div>
                ))}
              </section>
            ) : null}

          </main>
        )}

      </div>
    );
  }
}

export default App;
