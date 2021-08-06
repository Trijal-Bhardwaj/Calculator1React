import React from "react";

class InputComp extends React.Component {
  render() {
    return (
      <div className="btn">
        <button value="AC" onClick={(e) => this.props.onClick(e.target.value)}>AC</button>
        <button value="(" onClick={(e) => this.props.onClick(e.target.value)}>(</button>
        <button value=")" onClick={(e) => this.props.onClick(e.target.value)}>)</button>
        <button value="DEL" onClick={(e) => this.props.onClick(e.target.value)}>DEL</button>
        <br />
        <button value="7" onClick={(e) => this.props.onClick(e.target.value)}>7</button>
        <button value="8" onClick={(e) => this.props.onClick(e.target.value)}>8</button>
        <button value="9" onClick={(e) => this.props.onClick(e.target.value)}>9</button>
        <button value="+" onClick={(e) => this.props.onClick(e.target.value)}>+</button>
        <br />
        <button value="4" onClick={(e) => this.props.onClick(e.target.value)}>4</button>
        <button value="5" onClick={(e) => this.props.onClick(e.target.value)}>5</button>
        <button value="6" onClick={(e) => this.props.onClick(e.target.value)}>6</button>
        <button value="-" onClick={(e) => this.props.onClick(e.target.value)}>-</button>
        <br />
        <button value="1" onClick={(e) => this.props.onClick(e.target.value)}>1</button>
        <button value="2" onClick={(e) => this.props.onClick(e.target.value)}>2</button>
        <button value="3" onClick={(e) => this.props.onClick(e.target.value)}>3</button>
        <button value="*" onClick={(e) => this.props.onClick(e.target.value)}>x</button>
        <br />
        <button value="0" onClick={(e) => this.props.onClick(e.target.value)}>0</button>
        <button value="." onClick={(e) => this.props.onClick(e.target.value)}>.</button>
        <button value="=" onClick={(e) => this.props.onClick(e.target.value)}>=</button>
        <button value="/" onClick={(e) => this.props.onClick(e.target.value)}>÷</button>
        <br />
      </div>
    );
  }
}

export default InputComp;