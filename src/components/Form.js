import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import avatars from '../images/avatars';

const MAX_ATT = 90;
const MAX_SUM = 210;
const MAX_CARDS = 10;
const brawlerList = Object.keys(avatars);

class Form extends Component {
  state = { };

  render() {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      onInputChange,
      onSaveButtonClick,
      showRules,
      deck,
    } = this.props;
    return (
      <FormGroup id="form" className="box-model box-column">
        <Label htmlFor="name">
          Brawler:
          <Input
            type="select"
            id="name"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          >
            {brawlerList.map((brawler, index) => (
              <option key={ index }>{brawler}</option>))}
          </Input>
        </Label>
        <div className="box-model space-evenly">
          <Label htmlFor="attr1">
            Ataque:
            <Input
              type="number"
              id="attr1"
              name="cardAttr1"
              min="0"
              max="90"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </Label>
          <Label htmlFor="attr2">
            Saúde:
            <Input
              type="number"
              name="cardAttr2"
              id="attr2"
              min="0"
              max="90"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </Label>
          <Label htmlFor="attr3">
            Energia:
            <Input
              type="number"
              name="cardAttr3"
              id="attr3"
              min="0"
              max="90"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </Label>
        </div>
        <Label htmlFor="rarity">
          Raridade:
          <Input
            type="select"
            id="rarity"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="Raro">Raro</option>
            <option value="Super raro">Super raro</option>
            <option value="Épico">Épico</option>
            <option value="Mítico">Mítico</option>
            <option value="Lendário">Lendário</option>
            <option value="Cromático">Cromático</option>
          </Input>
        </Label>
        {hasTrunfo ? <p>Você já tem um Mega-Brawler em seu deck</p>
          : (
            <Label htmlFor="tryunph">
              Mega-Brawler
              <Input
                type="checkbox"
                id="tryunph"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </Label>)}
        <Button
          className="btn-outline-info"
          type="button"
          onClick={ showRules }
        >
          Ver regras

        </Button>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={
            !cardName
            || cardName === 'choose'
            || (!cardAttr1 || cardAttr1 < 0 || cardAttr1 > MAX_ATT)
            || (!cardAttr2 || cardAttr2 < 0 || cardAttr2 > MAX_ATT)
            || (!cardAttr3 || cardAttr3 < 0 || cardAttr3 > MAX_ATT)
            || ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > MAX_SUM)
            || deck.length >= MAX_CARDS
          }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </FormGroup>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
