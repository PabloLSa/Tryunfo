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
  };

  onInputChange = ({ target }) => {
    const { value, name } = target;
    // console.log('O nome campo é', name);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form { ...this.state } onInputChange={ this.onInputChange } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
