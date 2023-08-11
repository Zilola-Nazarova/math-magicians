import PropTypes from 'prop-types';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleStateChange(button) {
    this.setState((prevState) => calculate(prevState, button));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <section id="calculator">
        <InputField text={((total || '') + (operation || '') + (next || '')) || '0'} />
        <Operands performOperation={this.handleStateChange} />
        <Commands performOperation={this.handleStateChange} />
        <Numbers performOperation={this.handleStateChange} />
      </section>
    );
  }
}

function InputField({ text }) {
  return (
    <div className="input">
      <p>{ text }</p>
    </div>
  );
}

function Operands({ performOperation }) {
  const onHandleClick = (e) => {
    performOperation(e.target.textContent);
  };

  return (
    <div className="operands">
      <Button content="÷" handleClick={onHandleClick} />
      <Button content="x" handleClick={onHandleClick} />
      <Button content="-" handleClick={onHandleClick} />
      <Button content="+" handleClick={onHandleClick} />
      <Button content="=" handleClick={onHandleClick} />
    </div>
  );
}

function Commands({ performOperation }) {
  const onHandleClick = (e) => {
    performOperation(e.target.textContent);
  };
  return (
    <div className="commands">
      <Button content="AC" handleClick={onHandleClick} />
      <Button content="+/-" handleClick={onHandleClick} />
      <Button content="%" handleClick={onHandleClick} />
    </div>
  );
}

function Numbers({ performOperation }) {
  const onHandleClick = (e) => {
    performOperation(e.target.textContent);
  };
  return (
    <div className="numbers">
      <Button content="7" handleClick={onHandleClick} />
      <Button content="8" handleClick={onHandleClick} />
      <Button content="9" handleClick={onHandleClick} />
      <Button content="4" handleClick={onHandleClick} />
      <Button content="5" handleClick={onHandleClick} />
      <Button content="6" handleClick={onHandleClick} />
      <Button content="1" handleClick={onHandleClick} />
      <Button content="2" handleClick={onHandleClick} />
      <Button content="3" handleClick={onHandleClick} />
      <Button content="0" handleClick={onHandleClick} />
      <Button content="." handleClick={onHandleClick} />
    </div>
  );
}

function Button({ content, handleClick }) {
  return (
    <button type="button" className="button" onClick={handleClick}>
      <p>{ content }</p>
    </button>
  );
}

Numbers.propTypes = {
  performOperation: PropTypes.func.isRequired,
};

Operands.propTypes = {
  performOperation: PropTypes.func.isRequired,
};

Commands.propTypes = {
  performOperation: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  text: 0,
};

InputField.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  content: 'ND',
};

Button.propTypes = {
  content: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Calculator;
