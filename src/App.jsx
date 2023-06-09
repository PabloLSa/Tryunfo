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
    hasTrunfo: false,
    filterCard: '',
    cardType: 'todas',
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardTrunfo,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;
    if (cardTrunfo === true) {
      this.setState({ cardTrunfo: false, hasTrunfo: true });
    }
    const cartaNova = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardTrunfo,
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
      cardType: 'todas',
      trunfoHas: false,
    }));
  };

  onInputHasTrunfo = ({ target }) => {
    const { checked } = target;

    this.setState({
      trunfoHas: checked,
    });
  };

  typeCard = ({ target }) => {
    const { value } = target;

    this.setState({
      cardType: value,
    });
  };

  onFilter = ({ target }) => {
    const { value } = target;

    this.setState({
      filterCard: value,
    });
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
    const { value, name, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, this.validaTion);
  };

  onRemove = ({ target }) => {
    const { cardeSave } = this.state;
    cardeSave.splice([target.name], 1);
    this.setState({
      cardeSave: [...cardeSave],
      cardTrunfo: false,
      hasTrunfo: false,
    });
  };

  render() {
    const { cardeSave, filterCard, cardType, trunfoHas } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ this.onFilter }
          disabled={ trunfoHas }
        />
        <label htmlFor="filter-rare" onChange={ this.typeCard }>
          <select data-testid="rare-filter" name="filter-rare" disabled={ trunfoHas }>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
            <option value="todas">todas</option>
          </select>
        </label>
        <label htmlFor="filter-trunfo">
          <input
            type="checkbox"
            name="filter-trunfo"
            id=""
            data-testid="trunfo-filter"
            onChange={ this.onInputHasTrunfo }
          />
        </label>

        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
        <div>
          { cardeSave.filter((carta) => carta.cardName
            .includes(filterCard))
            .filter((carta) => (cardType === 'todas'
              ? carta : carta.cardRare === cardType))
            .filter((carta) => (trunfoHas ? carta.cardTrunfo : carta))
            .map((carta) => (
              <div key={ carta.cardName }>
                <Card { ...carta } />
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ this.onRemove }
                >
                  Excluir

                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
