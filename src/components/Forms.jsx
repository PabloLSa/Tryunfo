import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name=""
          id=""
          data-testid="name-input"
        />
        <input
          type="textarea"
          name=""
          id=""
          data-testid="description-input"
        />
        <input
          type="number"
          name=""
          id=""
          data-testid="attr1-input"
        />
        <input
          type="number"
          name=""
          id=""
          data-testid="attr2-input"
        />
        <input
          type="number"
          name=""
          id=""
          data-testid="attr3-input"
        />
        <input
          type="text"
          name=""
          id=""
          data-testid="image-input"
        />
        <select name="" id="" data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">normal</option>
          <option value="muito raro">normal</option>
        </select>
        <input type="checkbox" name="" id="" data-testid="trunfo-input" />
        <button type="button" data-testid="save-button">Salvar</button>

      </div>
    );
  }
}
export default Form;
