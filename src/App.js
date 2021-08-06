import React from "react";
import "./App.css";
import InputComp from "./InputComp";
import OutputComp from "./OutputComp";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    }
    else if (button === "AC") {
      this.reset();
    }
    else if (button === "DEL") {
      this.backspace();
    }
    else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "ERROR",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h2>Simple Calculator Using ReactJS</h2>
          <OutputComp result={this.state.result} />
          <InputComp onClick={this.onClick} />
          <h4>By Trijal Bhardwaj</h4>
        </div>
      </div>
    );
  }
}

export default App;
