import PropTypes from 'prop-types';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import styles from '../styles/Calculator.module.css';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleStateChange = (button) => {
    setState((prevState) => calculate(prevState, button));
  };

  const { total, operation, next } = state;

  return (
    <div className={styles.calculator}>
      <InputField text={((total || '') + (operation || '') + (next || '')) || '0'} />
      <Operands performOperation={handleStateChange} />
      <Commands performOperation={handleStateChange} />
      <Numbers performOperation={handleStateChange} />
    </div>
  );
};

function InputField({ text }) {
  return (
    <div className={styles.input}>
      <p>{ text }</p>
    </div>
  );
}

function Operands({ performOperation }) {
  const onHandleClick = (e) => {
    performOperation(e.target.textContent);
  };

  return (
    <div className={styles.operands}>
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
    <div className={styles.commands}>
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
    <div className={styles.numbers}>
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
