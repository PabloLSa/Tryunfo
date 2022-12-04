import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    cardeSave: [],
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;
    const cartaNova = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare };

    this.setState(({ cardeSave }) => ({
      cardeSave: [...cardeSave, cartaNova],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
    }));
  };

  validaTion = () => {
    const { cardName,
      cardImage,
      cardDescription,
      cardRare, cardAttr1,
      cardAttr2, cardAttr3 } = this.state;
    const card = 90;
    const num = 210;
    const sum = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= num);
    const validaTionName = cardName !== '';
    const validaTionDEs = cardDescription !== '';
    const validaTionImg = cardImage !== '';
    const validaTionRaridade = cardRare !== '';
    const valueAttr1 = Number(cardAttr1) <= card && Number(cardAttr1) >= 0;
    const valueAttr2 = Number(cardAttr2) <= card && Number(cardAttr2) >= 0;
    const valueAttr3 = Number(cardAttr3) <= card && Number(cardAttr3) >= 0;

    this.setState({
      isSaveButtonDisabled: !(validaTionName && validaTionDEs
         && validaTionImg && validaTionRaridade
    && valueAttr1 && valueAttr2 && valueAttr3 && sum),
    });
  };

  onInputChange = ({ target }) => {
    const { value, name } = target;
    // console.log('O nome campo é', name);
    this.setState({
      [name]: value,
    }, this.validaTion);
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
