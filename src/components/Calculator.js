import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function Calculator() {
  return (
    <section id="calculator">
      <InputField />
      <Operands />
      <Commands />
      <Numbers />
    </section>
  );
}

function InputField(props) {
  const { number } = props;
  return (
    <div className="input">
      <p>{ number }</p>
    </div>
  );
}

InputField.defaultProps = {
  number: 0,
};

InputField.propTypes = {
  number: PropTypes.number,
};

function Operands() {
  return (
    <div className="operands">
      <Button content="÷" />
      <Button content="x" />
      <Button content="-" />
      <Button content="+" />
      <Button content="=" />
    </div>
  );
}

function Commands() {
  return (
    <div className="commands">
      <Button content="AC" />
      <Button content="+/-" />
      <Button content="%" />
    </div>
  );
}

function Numbers() {
  return (
    <div className="numbers">
      <Button content="7" />
      <Button content="8" />
      <Button content="9" />
      <Button content="4" />
      <Button content="5" />
      <Button content="6" />
      <Button content="1" />
      <Button content="2" />
      <Button content="3" />
      <Button content="0" />
      <Button content="." />
    </div>
  );
}

function Button(props) {
  const { content } = props;
  return (
    <button type="button" className="button">
      <p>{ content }</p>
    </button>
  );
}

Button.defaultProps = {
  content: 'ND',
};

Button.propTypes = {
  content: PropTypes.string,
};

export default Calculator;
